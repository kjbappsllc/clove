import { setStyles } from '.'
import { expect } from 'chai'

describe('DOM - style-setter', () => {
    it('Should add to cssText with the value being inline string css', (done) => {
        const node = document.createElement('div')
        const newValueCssText = "background-color: green;"
        setStyles({ node, oldValue: null, newValue: newValueCssText })
        expect(node.style.cssText).to.be.equal(newValueCssText)
        done()
    })

    it('Should set cssText back to empty if new value is null', (done) => {
        const node = document.createElement('div')
        const oldValueCssText = "background-color: green;"
        node.style.cssText = oldValueCssText
        setStyles({ node, oldValue: oldValueCssText, newValue: null })
        expect(node.style.cssText).to.be.equal('')
        done()
    })

    it('Should set the appropriate style in cssText and in the css prop list when old value is null and new value is an object', (done) => {
        const node = document.createElement('div')
        const newValueCssObj = {backgroundColor: 'green'}
        setStyles({ node, oldValue: null, newValue: newValueCssObj })
        expect(node.style.cssText).to.be.equal('background-color: green;')
        expect(node.style.backgroundColor).to.be.equal('green')
        done()
    })

    it('Should appropriately change style in cssText and in the css prop list when old value is not null and new value is an object', (done) => {
        const node = document.createElement('div')
        const oldValueCssText = "background-color: green;"
        node.style.cssText = oldValueCssText
        const newValueCssObj = {backgroundColor: 'blue'}
        setStyles({ node, oldValue: oldValueCssText, newValue: newValueCssObj })
        expect(node.style.cssText).to.be.equal('background-color: blue;')
        expect(node.style.backgroundColor).to.be.equal('blue')
        done()
    })

    it('Should add a pixel value to style properties that need pixels values', (done) => {
        const node = document.createElement('div')
        const newValueCssObj = {height: 10, width: 10}
        setStyles({ node, oldValue: null, newValue: newValueCssObj })
        expect(node.style.cssText).to.not.equal('')
        expect(node.style.height).to.be.equal('10px')
        expect(node.style.width).to.be.equal('10px')
        done()
    })

    it('Should not add a pixel value to style properties who are not pixel dependent', (done) => {
        const node = document.createElement('div')
        const newValueCssObj = {opacity: 0.10, zIndex: 5}
        setStyles({ node, oldValue: null, newValue: newValueCssObj })
        expect(node.style.cssText).to.not.equal('')
        expect(node.style.opacity).to.be.equal('0.1')
        expect(node.style.zIndex).to.be.equal('5')
        done()
    })

    it('Should remove an old value when the new value does not contain the style anymore', (done) => {
        const node = document.createElement('div')
        const oldValue = "background-color: green"
        const newValueCssObj = { opacity: 0.10 }
        node.style.cssText = oldValue

        setStyles({ node, oldValue: oldValue, newValue: newValueCssObj })
        expect(node.style.cssText).to.not.equal('')
        expect(node.style.opacity).to.be.equal('0.1')
        expect(node.style.backgroundColor).to.be.equal('')
        done()
    })
})