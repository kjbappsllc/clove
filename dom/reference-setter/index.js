export const setRef = ({
    node,
    oldValue,
    newValue
}) => {
    const applyRef = (refFunc, nodeRef) => {
        if (refFunc &&  typeof refFunc === 'function') refFunc(nodeRef) 
    }

    applyRef(oldValue, null)
    applyRef(newValue, node)
}