export const handleEventListener = ({
    node,
    eventName,
    oldValue,
    newValue
}) => {
    (node._listeners || (node._listeners = {}))
    const domEventName = eventName.toLowerCase().substring(2)
    if(newValue){
        if (!oldValue) node.addEventListener(domEventName, eventProxy)
    } else {
        node.removeEventListener(domEventName, eventProxy)
    }
    node._listeners[domEventName] = newValue
}

function eventProxy(e) { 
    return this._listeners[e.type](e)
}