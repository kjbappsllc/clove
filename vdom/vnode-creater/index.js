class VNode {}

export const createVNode = ({
    vNodeName,
    attributes = undefined,
    key = null,
    children = []
}) => {
    const newVNode = new VNode()
    newVNode.vNodeName = vNodeName
    newVNode.attributes = attributes
    newVNode.key = key
    newVNode.children = children
    return newVNode
}