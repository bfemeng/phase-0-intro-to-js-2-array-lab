const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push ("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift (name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop (name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift (name);
}
function appendCat(name) {
    const newArray = [...cats]
    newArray.push(name);
    return newArray;
}
function prependCat(name) {
    return [name,...cats]
}
function removeLastCat(name) {
    return cats.slice(0, cats.length-1);
}
function removeFirstCat(name) {
    return cats.slice(1);
}