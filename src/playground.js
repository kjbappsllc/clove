import { createVNodeTree } from './vdom/vtree-creator'

const test = () => ({
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

const functionalComp = ({ testProp }) => ({
    node: 'div',
    className: 'hello-my-class',
    children: 10
})

const element = createVNodeTree({ 
    tree: { 
        node: functionalComp,
        testProp: 10,
        children: [{
            node: 'div',
            className: 'test-className',
            children: 5
        }, 6]
    }
})
