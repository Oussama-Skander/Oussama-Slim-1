function Products(image, description, price){
	this.image = image;
	this.description = description;
	this.price = price;
};

var productsMen = [
new Products('img', 'men shirt', 25),
new Products('img', 'men shirt', 25),
new Products('img', 'men shirt', 25),
new Products('img', 'men shirt', 25),
];

var productsWomen = [
new Products('img', 'dress', 25),
new Products('img', 'dress', 25),
new Products('img', 'dress', 25),
new Products('img', 'dress', 25),
];

var productsChildren = [
new Products('img', 'child blue', 25),
new Products('img', 'child green', 25),
new Products('img', 'child rose', 25),
new Products('img', 'child jean', 25),
];

function generate(category){
	for (var i = 0; i < category.length; i++) {
		var element = document.getElementById('desc' + i);
		element.innerHTML = category[i].description;
	}
};

generate(productsChildren);



