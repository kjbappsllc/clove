import { removeNode } from '.'
import { expect } from 'chai'

describe('DOM - node-remover', () => {
    it('Should remove a normal dom element from its parent', (done) => {
        const parent = document.createElement('div')
        const child = document.createTextNode('Test')
        parent.appendChild(child)
        removeNode({ node: child })

        expect(parent.children.length).to.be.equal(0, "Child node length should be equal to zero")
        done()
    })

    it('Should not remove a normal dom element if it does not have a parent', (done) => {
        const parent = document.createElement('div')
        removeNode({ node: parent })
        
        expect(parent).to.exist
        done()
    })
})