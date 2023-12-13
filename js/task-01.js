const listWithClass = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${listWithClass.length}`);

listWithClass.forEach (function callback (el) {
console.log(`Category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`);    
});




// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).