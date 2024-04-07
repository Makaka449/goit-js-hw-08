const categoriesUl = document.querySelector('.categories');
const categoriesli = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesli.length}`);

categoriesli.forEach(item => {
  const categoriesH = item.querySelector('h2').textContent;
  console.log(`Category: ${categoriesH}`)
  const categoriese = item.querySelectorAll('ul > li').length;
  console.log(`Elements: ${categoriese}`)
});