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
    const traverse = treeRoot => {
        let type = typeof treeRoot
        if (['number', 'string'].includes(type)) {
            return String(treeRoot)
        } else if ( ['boolean', 'function'].includes(type) || !treeRoot) {
            return null
        }
        const childrenStack = iterateChildren({ children: treeRoot.children })
        const children = []

        while (childrenStack.length) {
            const child = traverse(childrenStack.pop())
            if (typeof child === 'string' && typeof children[children.length - 1] === 'string') {
                children[children.length - 1] += child
            } else {
                (child && children.push(child))
            }
        }

        const node = treeRoot.node
        const props = Object.keys(treeRoot).reduce((result, key) => {
            if (!['node', 'children'].includes(key)) {
                result[key] = treeRoot[key];
            }
            return result;
        }, {});
        const key = treeRoot.key
        const args = { node, props, key, children }
        return createVNode({ ...args })
    }

    return traverse(tree)
}