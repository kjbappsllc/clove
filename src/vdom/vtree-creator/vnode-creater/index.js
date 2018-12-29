class VNode {}

export const createVNode = ({
    node,
    props = {},
    key = undefined,
    children = []
}) => {
    const newVNode = new VNode()
    newVNode.node = node
    newVNode.props = props
    newVNode.key = key
    newVNode.children = children
    return newVNode
}