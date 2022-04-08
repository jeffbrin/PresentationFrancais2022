/**
 * Gets all the html elements on the page in a recursive manner
 * @returns a list of all the elements on the page
 */
function getAllElementsRecursively(parent, elements) {

    if (!elements)
        elements = [];
    if (!parent)
        parent = document

    let childElements = [...parent.children];

    childElements.forEach(element => {
        elements.push(element)
        getAllElementsRecursively(element, elements)
    })

    return elements

}


document.getElementById("blind-mode").addEventListener('click', () => {
    const nodes = getAllElementsRecursively(document)

    nodes.forEach(node => {
        blackoutNode(node);
    })

    var pHead = document.getElementsByTagName('head')[0];
    pHead.innerHTML = pHead.innerHTML + "<style>#videoContainer:before {content: ''; position: absolute; background: black; border-radius: 5px; top: 0; right: 0; bottom: 0; left: 0;}</style>";
})

function blackoutNode(node, delay) {

    node.style.color = "black";
    node.style.background = "black";
    node.style.visibility = 'visible';

    if (node.nodeName == "IMG")
        node.src = "https://htmlcolors.com/color-image/000.png";

    if(node.nodeName == "VIDEO"){
        node.style.pointerEvents = 'none';
    }
    
}