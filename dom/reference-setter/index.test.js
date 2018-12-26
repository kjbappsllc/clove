import { setRef } from '.'
import { expect } from 'chai'

describe('DOM - reference-setter', () => {
    it('Should create a variable that references a dom element', (done) => {
        const node = document.createElement('div')
        node.textContent = "hello"
        let referenceNode = null

        const refFunc = (ref) => referenceNode = ref
        setRef({ node, oldValue: null, newValue: refFunc })
        expect(referenceNode).to.not.be.null
        expect(referenceNode.textContent).to.be.equal("hello")
        done()
    })

    it('Should replace a previous ref with null when set to a new one', (done) => {
        const node = document.createElement('div')
        node.textContent = "hello"
        let referenceNode = null
        let referenceNode2 = null

        const refFunc = (ref) => referenceNode = ref
        setRef({ node, oldValue: null, newValue: refFunc })
        expect(referenceNode).to.not.be.null
        expect(referenceNode.textContent).to.be.equal("hello")

        const secondRefFunc = (ref) => referenceNode2 = ref
        setRef({ node, oldValue: refFunc, newValue: secondRefFunc})
        expect(referenceNode).to.be.null
        expect(referenceNode2).to.not.be.null
        expect(referenceNode2.textContent).to.be.equal("hello")
        done()
    })
})