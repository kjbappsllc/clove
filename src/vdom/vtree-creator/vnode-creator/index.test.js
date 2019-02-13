import { createVNode } from '.'
import { expect } from 'chai'

describe('VDOM-VTREE - vnode-creator', () => {
    it('Should create normal vdom element when passed the neccesarry parameters', (done) => {
        const vnode = createVNode({
            node: 'div', 
            props: {className: 'test'},
            key: 1,
            children: []
        })
        expect(vnode.node).to.be.equal('div')
        expect(vnode.props).to.be.eql({className: 'test'})
        expect(vnode.key).to.be.equal(1)
        expect(vnode.children).to.be.eql([])
        done()
    })
})