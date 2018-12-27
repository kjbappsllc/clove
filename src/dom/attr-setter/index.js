export const setAttribute = ({
    node,
    propertyName,
    newValue
}) => {
    const propToAttributeMap = {
        className: 'class'
    }
    const attributeName = propToAttributeMap[propertyName] || propertyName
    if ( newValue ) {
        if( node[propertyName] !== void 0 ) {
            node.setAttribute(attributeName, newValue)
        }
    } else {
        node.removeAttribute(attributeName)
    }
}