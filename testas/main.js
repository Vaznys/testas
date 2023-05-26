let shadow
function dragit(event) {
    shadow = event.target;
}
function dragover(e) {
    let children = Array.from(e.target.parentNode.parentNode.children);
    if (children.indexOf(e.target.parentNode) > children.indexOf(shadow))
        e.target.parentNode.after(shadow);
    else
        e.target.parentNode.before(shadow);
}
function reOrder() {
    document.querySelectorAll(".myTable > tbody > tr > td:first-child").forEach(function (elem, index) {
        elem.innerHTML = (index + 1);
    });
}