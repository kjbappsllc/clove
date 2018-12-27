
export const simulateClick = ({
    node
}) => {
    const evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
    });

    node.dispatchEvent(evt)
}