function Products(image, description, price){
	this.image = image;
	this.description = description;
	this.price = price;
};

Products.prototype.getPrice = function() {
	return this.price;
};

var productsMen = [
new Products('img', 'maryoul', 25),
new Products('img', 'men shirt', 25),
new Products('img', '5al3a', 25),
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


	$('.specificCateg').hide();


function generate(category){ 
	$('.categs').hide();
	$('.specificCateg').show();

	for (var i = 0; i < category.length; i++) {
		var im = document.getElementById('img' + i);
		im.innerHTML = category[i].image;
		var descrip = document.getElementById('desc' + i);
		descrip.innerHTML = category[i].description;
		var prix = document.getElementById('price' + i);
		prix.innerHTML = category[i].price;
	};

	
};





