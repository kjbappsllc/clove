import { createVDom } from '.'
import { expect } from 'chai'

const buildNode = ({
    node,
    props={},
    key=undefined,
    children=[]
}) => ({
    node: node,
    props: props,
    key: key,
    children: children
})

describe('vdom/create', () => {
    it('Should return a VNode', (done) => {
		let tree
		expect( () => tree = createVDom({ tree: { node: 'foo' }})).not.to.throw()
		expect(tree).to.be.an('object')
		expect(tree.constructor.name).to.be.equal('VNode')
		expect(tree).to.have.property('node', 'foo')
		expect(tree).to.have.property('props').that.eql({})
        expect(tree).to.have.property('children').that.eql([])
        done()
    });
    
    it('Should preserve raw props', (done) => {
		let attrs = { foo:'bar', baz:10, func:()=>{} }
		let tree = createVDom({tree: {node: 'foo', ...attrs}})
		expect(tree).to.be.an('object')
        expect(tree).to.have.deep.property('props', attrs)
        expect(tree).to.have.property('children').that.eql([])
        done()
    });
    
    it('Should support VNode children', (done) => {
        let tree = createVDom({tree: {
            node: 'foo', 
            children: [{ node: 'bar'}, {node: 'baz'}]
        }})
		expect(tree).to.be.an('object')
		expect(tree).to.have.deep.property('children',[
            buildNode({ node: 'bar' }),
            buildNode({ node: 'baz' })
        ])
        done()
    });

    it('Should support multiple VNode children, nested inside of eachother', (done) => {
        let tree = createVDom({tree: {
            node: 'foo', 
            children: [{ node: 'bar', children:[{ node: 'test' }]}, {node: 'baz'}]
        }})

		expect(tree).to.be.an('object')
		expect(tree).to.have.deep.property('children', [
            buildNode({ node: 'bar', children: [buildNode({ node: 'test' })] }),
            buildNode({ node: 'baz' })
        ])
        done()
    });
    
    it('Should support text children', (done) => {
		let tree = createVDom({ tree: { node: 'foo', children: 'test' }})

		expect(tree).to.be.an('object')
		expect(tree).to.have.property('children').with.length(1).with.property('0').that.equals('test');
        done()
    });

    it('Should not merge children that are boolean, null, or undefined values', (done) => {
        let tree = createVDom({ tree: { node: 'foo', children: [null, false, true, undefined, 'one'] }})
		expect(tree).to.be.an('object')
	    expect(tree).to.have.deep.property('children', ['one'])
        done()
	});
    
    it('Should merge sequential text children', (done) => {
        let tree = createVDom({ tree: { node: 'foo', children: [
            'test', 
            null, 
            'one', 
            { node: 'bar' },
            'three',
            { node: 'baz' },
            'four',
            null,
            false,
            'five',
            6] 
        }})
		expect(tree).to.be.an('object')
		expect(tree).to.have.deep.property('children', [
            'testone',
			buildNode({node: 'bar'}),
			'three',
			buildNode({node: 'baz'}),
            'fourfive6'
        ]);
        done()
    });

    it('Should not accept functions in the children property', (done) => {
		let Component = ({children}) => children;
        let tree = createVDom({ tree: { node: 'foo', children: [null, false, true, undefined, 'two', Component, 'one'] }})
        
		expect(tree).to.be.an('object')
	    expect(tree).to.have.deep.property('children', ['twoone'])
        done()
    });
    
    it('Should create a VNode for a functional node type and not execute function', (done) => {
        let Component = ({children}) => children;
        let tree = createVDom({ tree: { node: Component, testProp: 5, children: [ {node: 'bar'}, 5 ] }})
        
        expect(tree).to.be.an('object')
        expect(tree.node).to.be.eql(Component)
	    expect(tree).to.have.deep.property('children', [
            buildNode({ node: 'bar'}),
            '5'
        ])
        expect(tree).to.have.deep.property('props', {testProp: 5})
        expect(tree.constructor.name).to.be.eql('VNode')
        done()
	});
})