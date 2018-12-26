import { createText } from '.'
import { expect } from 'chai'

describe('DOM - text-creator', () => {
    it('Should create a dom text element with the specified value', (done) => {
        const textElement = createText({ value: 'test' })

        expect(textElement.data).to.be.equal('test', "Should equal the string that was passed into createText")
        done()
    })

    it('Should create a text element from a value that is not a string', (done) => {
        const textElement = createText({ value: [1,2,3] })

        expect(textElement.data).to.be.equal('1,2,3', "Should of converted the value into a string")
        done()
    })
})