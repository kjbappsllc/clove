import { createVNode } from '.'
import { expect } from 'chai'

describe('VDOM - vnode-creator', () => {
    it('Should create normal vdom element when passed the neccesarry parameters', (done) => {
        const node = createVNode({
            vNodeName: 'div', 
            attributes: {className: 'test'},
            key: 1,
            children: []
        })
        expect(node.vNodeName).to.be.equal('div')
        expect(node.attributes).to.be.eql({className: 'test'})
        expect(node.key).to.be.equal(1)
        expect(node.children).to.be.eql([])
        done()
    })
})