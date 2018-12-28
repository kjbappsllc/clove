import { createVNodeTree } from '.'
import { expect } from 'chai'

const buildNode = ({
    vNodeName,
    attributes={},
    key=null,
    children=[]
}) => ({
    vNodeName: vNodeName,
    attributes: attributes,
    key: key,
    children: children
});

describe('VDOM - vtree-creator', () => {
    it('Should return a VNode', (done) => {
		let tree
		expect( () => tree = createVNodeTree({ tree: { node: 'foo' }})).not.to.throw()
		expect(tree).to.be.an('object')
		expect(tree.constructor.name).to.be.equal('VNode')
		expect(tree).to.have.property('vNodeName', 'foo')
		expect(tree).to.have.property('attributes').that.eql({})
        expect(tree).to.have.property('children').that.eql([])
        done()
    });
    
    it('Should preserve raw attributes', (done) => {
		let attrs = { foo:'bar', baz:10, func:()=>{} }
		let tree = createVNodeTree({tree: {node: 'foo', ...attrs}})
		expect(tree).to.be.an('object')
        expect(tree).to.have.deep.property('attributes', attrs)
        expect(tree).to.have.property('children').that.eql([])
        done()
    });
    
    it('Should support VNode children', (done) => {
        let tree = createVNodeTree({tree: {
            node: 'foo', 
            children: [{ node: 'bar'}, {node: 'baz'}]
        }})
		expect(tree).to.be.an('object')
		expect(tree).to.have.deep.property('children',[
            buildNode({ vNodeName: 'bar' }),
            buildNode({ vNodeName: 'baz' })
        ])
        done()
    });

    it('Should support multiple VNode children, nested inside of eachother', (done) => {
        let tree = createVNodeTree({tree: {
            node: 'foo', 
            children: [{ node: 'bar', children:[{ node: 'test' }]}, {node: 'baz'}]
        }})

		expect(tree).to.be.an('object')
		expect(tree).to.have.deep.property('children', [
            buildNode({ vNodeName: 'bar', children: [buildNode({ vNodeName: 'test' })] }),
            buildNode({ vNodeName: 'baz' })
        ])
        done()
    });
    
    it('Should support text children', (done) => {
		let tree = createVNodeTree({ tree: { node: 'foo', children: 'test' }})

		expect(tree).to.be.an('object')
		expect(tree).to.have.property('children').with.length(1).with.property('0').that.equals('test');
        done()
    });

    it('Should not merge children that are boolean, null, or undefined values', (done) => {
        let tree = createVNodeTree({ tree: { node: 'foo', children: [null, false, true, undefined, 'one'] }})
		expect(tree).to.be.an('object')
	    expect(tree).to.have.deep.property('children', ['one'])
        done()
	});
    
    it('Should merge sequential text children', (done) => {
        let tree = createVNodeTree({ tree: { node: 'foo', children: [
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
			buildNode({vNodeName: 'bar'}),
			'three',
			buildNode({vNodeName: 'baz'}),
            'fourfive6'
        ]);
        done()
    });

    it('Should not accept functions in the children property', (done) => {
		let Component = ({children}) => children;
        let tree = createVNodeTree({ tree: { node: 'foo', children: [null, false, true, undefined, 'two', Component, 'one'] }})
        
		expect(tree).to.be.an('object')
	    expect(tree).to.have.deep.property('children', ['twoone'])
        done()
    });
    
    it('Should not create a VNode for a functional node type, but should still process children', (done) => {
        let Component = ({children}) => children;
        let tree = createVNodeTree({ tree: { node: Component, children: [ {node: 'bar'}, 5 ] }})
        
        expect(tree).to.be.an('object')
        expect(tree.vNodeName).to.be.eql(Component)
	    expect(tree).to.have.deep.property('children', [
            buildNode({ vNodeName: 'bar'}),
            '5'
        ])
        done()
	});
})