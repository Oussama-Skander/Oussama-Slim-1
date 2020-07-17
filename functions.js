function Products(image, description, price){
	this.image = image;
	this.description = description;
	this.price = price;


var productsMen = [ 
new Products('img', 'maryoul', 25 ),
new Products('img', 'men shirt', 25 ),
new Products('img', '5al3a', 25 ),
new Products('img', 'men shirt', 25 ),
];

var productsWomen = [
new Products('img', 'dress', 25 ),
new Products('img', 'dress', 30 ),
new Products('img', 'dress', 14 ),
new Products('img', 'dress', 5 ),
];

var productsChildren = [
new Products('img', 'child blue', 25 ),
new Products('img', 'child green', 25 ),
new Products('img', 'child rose', 25 ),
new Products('img', 'child jean', 25 ),
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
		check("btn"+i, category[i].price)
	};	
};


function check(id, selected){
	var button = document.getElementById(id);

	button.onclick = function(){
		total = total + selected;
		document.getElementById('output').innerHTML = total;
	};
}

function loadBasket(){
	location.href = 'basket.html';
};

document.getElementById("home").onclick = function () {
        location.href = "home.html";
    };


var total = 0

function sum(num) {
      var price = document.getElementByClass("tot").innerHTML;
      var y = parseInt(price) + parseInt(num)
      document.getElementById("p1").innerHTML = y
}

