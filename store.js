if(document.readyState="loading")
{
    document.addEventListener('DOMContentLoaded',ready)
}else {
    ready()
}
function ready()
{
    var removecartitembutton=document.getElementsByClassName("button-danger")
console.log(removecartitembutton);
for(var i=0;i<removecartitembutton.length;i++)
{   var button=removecartitembutton[i];
button.addEventListener('click', removecartitem)
}
var quantityinputs=document.getElementsByClassName("cart-quantity-input")
for(var i=0;i<quantityinputs.length;i++)
{
    var inputs=quantityinputs[i]
    inputs.addEventListener('change',quantitychanged)
}
var addtocartbutton=document.getElementsByClassName('shop-item-button');
for(var i=0;i<addtocartbutton.length;i++)
{
    var button=addtocartbutton[i];
    button.addEventListener('click',addtocartclicked);
}
document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseclicked)
}
function purchaseclicked(event)
{
    alert('THANK YOU FOR YOUR PURCHASE, COMR BACK SOON , ')
var cartitem=document.getElementsByClassName('cart-items')[0]
while(cartitem.hasChildNodes())
{
    cartitem.removeChild(cartitem.firstChild);
}


    updatecarttotal()
}


function addtocartclicked(event)
{
    var button =event.target;
    var shopitem=button.parentElement.parentElement
    var title=shopitem.getElementsByClassName('shop-item-title')[0].innerText
    var price=shopitem.getElementsByClassName('shop-item-price')[0].innerText
    var imagesrc=shopitem.getElementsByClassName('shop-item-image')[0].src

  console.log(title,price,imagesrc)
  additemtocart(title,price,imagesrc);
  updatecarttotal();
  

}

function additemtocart(title,price,imagesrc)
{ var cartrow=document.createElement('div')
 
  cartrow.classList.add('cart-row');
  var cartitems=document.getElementsByClassName('cart-items')[0];

  var cartitemnames=cartitems.getElementsByClassName('cart-item-title')

  for(var i=0;i<cartitemnames.length;i++)
  {
      if(cartitemnames[i].innerText==title){ alert("WE UNDERSTAND THAT OUR ITEM IS TOO MUCH GOOD BUT  this ITEM is already added to the CART") 
      return;}
  }

var cartrowcontents=` <div class="cart-item cart-column">
<img class="cart-item-image" src="${imagesrc}">
<span class="cart-item-title">${title}</span> </div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
<input  class="cart-quantity-input" type="number" value="1">
<button class="button button-danger cart-quantity-button"  role="button">remove</button> </div>
`
cartrow.innerHTML=cartrowcontents
cartitems.append(cartrow)
cartrow.getElementsByClassName('button-danger')[0].addEventListener('click',removecartitem);
cartrow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantitychanged);

}
function quantitychanged(event)
{
    var   input=event.target
    if(isNaN(input.value)||input.value<=0)
    {input.value=1;}
    updatecarttotal();

}


function removecartitem (event){
    console.log("clicked");
    var buttonclicked=event.target
    buttonclicked.parentElement.parentElement.remove();
    updatecarttotal()
}

function updatecarttotal()
{var cartitemcontainer=document.getElementsByClassName('cart-items')[0]
var cartrows=cartitemcontainer.getElementsByClassName('cart-row')      
        var total=0;
        console.log(cartrows.length);
for(var i=0;i<cartrows.length;i++)
{  var cartrow=cartrows[i]
    var priceElement=cartrow.getElementsByClassName("cart-price")[0]
    var quantityElement =cartrow.getElementsByClassName("cart-quantity-input")
[0]
   var price=parseFloat(priceElement.innerText)
   var quantity=quantityElement.value
  
   total= total+(price*quantity);
  

}

document.getElementsByClassName("cart-total-price")[0].innerText='$'+total;


}