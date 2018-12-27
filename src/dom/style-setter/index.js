export const setStyles = ({
    node,
    oldValue,
    newValue
}) => {
    const notPixelDependent = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    node.style.cssText = newValue || '';
    if (newValue && typeof newValue==='object') {
        if (typeof oldValue!=='string') {
            for (let styleProp in oldValue) if (!(styleProp in newValue)) node.style[styleProp] = '';
        }
        for (let styleProp in newValue) {
            node.style[styleProp] = !isNaN(newValue[styleProp]) && !notPixelDependent.test(styleProp) ? (newValue[styleProp]+'px') : newValue[styleProp];
        }
    }

}