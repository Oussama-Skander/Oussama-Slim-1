function Products(image, description, price){
  this.image = image;
  this.description = description;
  this.price = price;
};
Products.prototype.getPrice = function(category) {  
   return this.price;
};
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
  $('.cancel').hide();
 $('#carte').hide();
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
    check("btn"+i, category[i].price, category[i].image, category[i].description)
  };  
};
function createItem() {
  localStorage.mytim =document.getElementById("output").innerHTML;
}
function cretItem(){
  localStorage.ytim =document.getElementById("carte").innerHTML; 
}
var basket = [];
function check(id, selected, img, desc){
  var button = document.getElementById(id);
  button.onclick = function(){
    total = total + selected;
    document.getElementById('output').innerHTML = total;
    $('.cancel').show();
    $('#carte').prepend('<br>' + img + '<br>' + desc + '<br>' + selected + '<hr><br>');
    createItem();
    basket.push([img,desc]);
    cretItem()
  };
}
/*function display(){
  if($("#carte").hide() ){
   $("#carte").show() ;
    }else{
  $("#carte").hide(); 
  }
}*/




function display(){
  
    if(document.getElementById("carte").style.display === "none"){
      document.getElementById("carte").style.display = "block";
    }else{
    document.getElementById("carte").style.display= "none";
  }
}
/*function display(){
  if($('#carte').attr(display).value=== 'none')
function showCarte(){
  $('#carte').show();
}
function hideCarte(){
  $('#carte').hide();
}
}*/


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