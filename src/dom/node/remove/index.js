export const removeNode = ({
    node
}) => {
    let parent = node.parentNode
    if(parent) parent.removeChild(node)
}