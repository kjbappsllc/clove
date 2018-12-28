export const iterateChildren = ({ children }) => {
    if( children === null  || (!children && isNaN(parseInt(children))) ) {
        return []
    }
    if( (children).constructor !== Array ) {
        return [ children ]
    }
    const stack=[]
    for (let i = children.length; i-- > 0;) stack.push(children[i]) 
    return stack
}