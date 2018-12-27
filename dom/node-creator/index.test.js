import { createNode } from '.'
import { expect } from 'chai'

describe('DOM - node-creator', () => {
    it('Should create normal dom element when passed a defined tag', (done) => {
        const node = createNode({ nodeName: 'div' })
        expect(node.tagName).to.be.equal('DIV')
        done()
    })
})