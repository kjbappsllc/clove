import { handleEventListener } from '.'
import { expect } from 'chai'
import { simulateClick } from '../../utils/test-utils'

describe('DOM - event-handler', () => {

    it('Should add a ._listeners property on a dom element', (done) => {
        let node = document.createElement('div')
        let eventName = 'onClick'
        let oldValue = void 0
        let newValue = () => {}
        handleEventListener({ node, eventName, oldValue, newValue })
        expect(node._listeners).to.exist
        done()
    })

    it('Should set appropriate dom event in ._listeners', (done) => {
        let node = document.createElement('div')
        let eventName = 'onClick'
        let expectedDomEventName = 'click'
        let oldValue = void 0
        let newValue = () => {}
        handleEventListener({ node, eventName, oldValue, newValue })
        expect(node._listeners[expectedDomEventName]).to.exist
        done()
    })
    
    it('Should register an event listener in the dom when there is no old value for the node and there exists a new value', (done) => {
        let firstEventClicked = false
        let node = document.createElement('div')
        let eventName = 'onClick'
        let oldValue = void 0
        let newValue = () => { firstEventClicked = true }

        handleEventListener({ node, eventName, oldValue, newValue })
        simulateClick({ node })

        expect(firstEventClicked).to.be.true
        done()
    })

    it('Should not add additional event listener if there exists an old value', (done) => {
        let firstEventClicked = false
        let node = document.createElement('div')
        let eventName = 'onClick'
        let oldValue = () => {}
        let newValue = () => { firstEventClicked = true }

        handleEventListener({ node, eventName, oldValue, newValue })
        simulateClick({ node })

        expect(firstEventClicked).to.be.false
        done()
    })

    it('Should remove appropriate event listener from dom if the new value is null', (done) => {
        let firstEventClicked = false
        let node = document.createElement('div')
        let eventName = 'onClick'
        let oldValue = () => { firstEventClicked = !firstEventClicked }

        handleEventListener({ node, eventName, oldValue: null, newValue: oldValue })
        simulateClick({ node })
        expect(firstEventClicked).to.be.true

        handleEventListener({ node, eventName, oldValue, newValue: null })
        simulateClick({ node })
        expect(firstEventClicked).to.be.true

        done()
    })

    it('Should remove dom event key from ._listeners in dom element if the new value is null', (done) => {
        let node = document.createElement('div')
        let eventName = 'onClick'
        let expectedDomEventName = 'click'
        let oldValue = () => {}

        handleEventListener({ node, eventName, oldValue: null, newValue: oldValue })
        handleEventListener({ node, eventName, oldValue, newValue: null })

        expect(node._listeners[expectedDomEventName]).to.be.undefined

        done()
    })
})