export const handleEventListener = ({
    node,
    eventName,
    oldValue,
    newValue
}) => {
    (node._listeners || (node._listeners = {}))
    const proxy = (e) => node._listeners[e.type].handler(e)

    const domEventName = eventName.toLowerCase().substring(2)
    if(newValue){
        if (!oldValue) {
            node._listeners[domEventName] = {}
            node.addEventListener(domEventName, proxy)
            node._listeners[domEventName].handler = newValue
            node._listeners[domEventName].removeListener = () => node.removeEventListener(domEventName, proxy)
        }
    } else {
        (node._listeners[domEventName] && node._listeners[domEventName].removeListener())
        node._listeners[domEventName] = undefined
        node._listeners = JSON.parse(JSON.stringify(node._listeners))
    }
}
