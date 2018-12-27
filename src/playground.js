import { createVNodeTree } from './vdom/vtree-creator'

const container = ({}) => ({
    node: 'div',
    onClick: () => { console.log('clicked') },
    className: 'test-class',
    children: [5, 6, "hello",
        {
            node: 'div',
            className: 'div-test-class',
            children: [{
                node: 'div',
                className: 'nested-test-class',
            }]
        }, "Test"]
})

const element = createVNodeTree({ tree: container({}) })
console.log(element)