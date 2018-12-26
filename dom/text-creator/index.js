export const createText = ({
    value
}) => {
    const text = String(value)
    return document.createTextNode(text)
}