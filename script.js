/* JS code to implement function prepareFood with parameteres table no, items and callback
and function serveFood that takes tableno and items as parameter */
var tablenumber = 100;
var items = ["burger", "pasta", "cake"];
//method that prepares food
function prepareFood(tablenumber, items, callBack) {
    console.log("Preparing food for items -" + "> (" + items.length + ") " + " [" + items + "]");
    console.log("Serving food for items -" + "> (" + items.length + ")" + " [" + callBack(tablenumber, items) + "]");
}
//method that serves food
function serveFood(tablenumber, items) {
    return items;
}
prepareFood(tablenumber, items, serveFood);