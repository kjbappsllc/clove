import { iterateChildren } from '.'
import { expect } from 'chai'

describe('VDOM-VTREE - child-iterator', () => {
    it('Should create a child stack from normal array', (done) => {
        const children = [1, 2, 3]
        expect(iterateChildren({ children })).to.be.eql([3, 2, 1])
        done()
    })
    it('Should create a child stack from a number', (done) => {
        let children = 5
        expect(iterateChildren({ children })).to.be.eql([5])
        children = 0
        expect(iterateChildren({ children })).to.be.eql([0])
        children = NaN
        expect(iterateChildren({ children })).to.be.eql([])
        done()
    })
    it('Should create a child stack from a string', (done) => {
        const children = 'Hello'
        expect(iterateChildren({ children })).to.be.eql(['Hello'])
        done()
    })
    it('Should create a child stack from an object', (done) => {
        const children = { test: 'Hello' }
        expect(iterateChildren({ children })).to.be.eql([{ test: 'Hello' }])
        done()
    })
    it('Should create an empty child stack with a falsey children param', (done) => {
        let children = null
        expect(iterateChildren({ children })).to.be.eql([])
        children = undefined
        expect(iterateChildren({ children })).to.be.eql([])
        children = ''
        expect(iterateChildren({ children })).to.be.eql([])
        done()
    })
})