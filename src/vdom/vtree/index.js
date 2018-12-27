import { createVNode } from './vnode-creater'
import { iterateChildren } from './child-iterator'

/*
    Simple example:
    {
        node: 'div',
        onClick: () => {console.log('clicked')},
        className: 'test-class'
        children: 5
    }
*/

export const createVNodeTree = ({
    tree
}) => {
    const last = (arr) => arr[arr.length - 1]
    const traverse = node => {
        if (!isNaN(node) || typeof node === 'string') {
            return String(node)
        }

        const childrenStack = iterateChildren(node.children)
        const children = []

        while (childrenStack.length) {
            const child = childrenStack.pop()
            const VNode = traverse(child)
            if (typeof VNode === 'string' && typeof children[children.length - 1] === 'string') {
                children[children.length - 1] += VNode
            } else {
                children.push(VNode)
            }
        }

        const vNodeName = node.node
        const attributes = Object.keys(node).reduce((result, key) => {
            if (!['node', 'children'].includes(key)) {
                result[key] = node[key];
            }
            return result;
        }, {});
        const key = node.key
        return createVNode({ vNodeName, attributes, key, children })
    }

    return traverse(tree)
}