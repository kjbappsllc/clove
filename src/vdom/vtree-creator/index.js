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
    const traverse = node => {
        let type = typeof node
        if (['number', 'string'].includes(type)) {
            return String(node)
        } else if ( ['boolean', 'function'].includes(type) || !node) {
            return null
        }
        const childrenStack = iterateChildren({ children: node.children })
        const children = []

        while (childrenStack.length) {
            const child = childrenStack.pop()
            const VNode = traverse(child)
            if (typeof VNode === 'string' && typeof children[children.length - 1] === 'string') {
                children[children.length - 1] += VNode
            } else {
                (VNode && children.push(VNode))
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
        const args = { vNodeName, attributes, key, children }
        return typeof vNodeName === 'function' ? args :  createVNode({ ...args })
    }

    return traverse(tree)
}