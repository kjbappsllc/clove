class VNode {
    constructor({ node, key, props, children }) {
        this.key = key
        this.node = node
        this.props = props
        this.children = children
    }
}

const iterateChildren = ({ children }) => {
    if (children === null || (!children && isNaN(parseInt(children)))) {
        return []
    }
    if ((children).constructor !== Array) {
        return [children]
    }
    const stack = []
    for (let i = children.length; i-- > 0;) stack.push(children[i])
    return stack
}

export const createVDom = ({
    tree
}) => {
    const traverse = treeRoot => {
        let type = typeof treeRoot
        if (['number', 'string'].includes(type)) {
            return String(treeRoot)
        } else if (['boolean', 'function'].includes(type) || !treeRoot) {
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
        return new VNode({ ...args })
    }

    return traverse(tree)
}