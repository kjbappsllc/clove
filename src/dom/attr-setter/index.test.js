import { setAttribute } from '.'
import { expect } from 'chai'

describe('DOM - attr-setter', () => {
    it('Should set an attribute that is defined for that html element', (done) => {
        const node = document.createElement('div')
        setAttribute({ node, propertyName: 'id', newValue: 'test-id' })
        expect('id' in node).to.be.true
        done()
    })

    it('Should not set an attribute that is not defined for that html element', (done) => {
        const node = document.createElement('div')
        setAttribute({ node, propertyName: 'value', newValue: 'test-value' })
        expect('value' in node).to.be.false
        done()
    })

    it('Should remove an attribute when the newValue is null', (done) => {
        const node = document.createElement('div')
        setAttribute({ node, propertyName: 'id', newValue: 'test-id' })
        setAttribute({ node, propertyName: 'id', newValue: null })
        expect('value' in node).to.be.false
        done()
    })

    it('Should correctly map dom properties to attribute names if they differ', (done) => {
        const node = document.createElement('div')
        setAttribute({ node, propertyName: 'className', newValue: 'test-class' })
        
        expect(node.hasAttribute('class')).to.be.true
        done()
    })
})