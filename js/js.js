var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDescription=document.getElementById("productDescription");
var productSearch=document.getElementById("searchBtn");
var alertWindow=document.getElementById("alert");
var productList=[];
var i=0;
var btns;
var index;
if(JSON.parse(localStorage.getItem("Products"))!=null){
    productList=JSON.parse(localStorage.getItem("Products"));
    display();
}
document.getElementById("dataButton").addEventListener("click",function(){addProduct()});
productSearch.addEventListener("input",function(){productNameSearch();});
productName.addEventListener("input",function(){rejexName();});
productPrice.addEventListener("input",function(){rejexPrice();});
productCategory.addEventListener("input",function(){rejexCategory();});
productDescription.addEventListener("input",function(){rejexDescription();});
alertWindow.addEventListener("click",function(){exitAlertWindow();});
function exitAlertWindow(){
    alertWindow.classList.add("d-none");
}

function addProduct(){
   if(validation()==true){
    var product={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        description:productDescription.value,
    };
    productList.push(product);
    console.log(productList);
    localStorage.setItem("Products",JSON.stringify(productList));
    display();
    clearInputs();
   }
   else{
    alertWindow.classList.remove("d-none");
   }
}
function clearInputs(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDescription.value="";
}
function display(){
    var cartona=" ";
    for(var i=0;i<productList.length;i++){
        cartona+=`   <tr>
        <td>${i+1}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td>
        <button index="${i}" id="updateBtn"  onclick="updateProduct(${i})" class="updateButton btn btn-info px-2 mx-2">Update</button>
        <button index="${i}" id="deleteBtn"  onclick="deleteProduct(${i})" class="btn btn-danger px-2 ">delete</button>
        </td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartona;
    btns=document.getElementById("deleteBtn");
}
function deleteProduct(i){
productList.splice(index,1);
localStorage.setItem("Products",JSON.stringify(productList));
display();
}
function updateProduct(updateNumber){
     i=updateNumber;
document.getElementById("dataButton").classList.add("d-none");
document.getElementById("updateButton").classList.remove("d-none");
productName.value=productList[i].name;
productPrice.value=productList[i].price;
productCategory.value=productList[i].category;
productDescription.value=productList[i].description;
}
document.getElementById("updateButton").addEventListener("click",function(){updateProductDisplay();});
function updateProductDisplay(){
    if(validation()==true){
    var product={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        description:productDescription.value,
    }
    productList.splice(i,1,product);
    localStorage.setItem("Products",JSON.stringify(productList));
display();
clearInputs();
document.getElementById("dataButton").classList.remove("d-none");
document.getElementById("updateButton").classList.add("d-none");}
else{
    alertWindow.classList.remove("d-none");
   }
}

   function rejexName(){
    var regexName=/^[a-z]{3,20}$/i;
    if(regexName.test(productName.value)){
        productName.classList.remove("is-invalid");
        productName.classList.add("is-valid");
        return true;
    }
    else{
        productName.classList.remove("is-valid");
        productName.classList.add("is-invalid");
        return false;
    }}
    function rejexPrice(){
    var regexPrice=/^\d{1,6}$/;
    if(regexPrice.test(productPrice.value)){
        productPrice.classList.remove("is-invalid");
        productPrice.classList.add("is-valid");
        return true;
    }
    else{
        productPrice.classList.remove("is-valid");
        productPrice.classList.add("is-invalid");
        return false;
    }}
    function rejexCategory(){
    var regexCategory=/^[a-z]{3,20}$/i;
    if(regexCategory.test(productCategory.value)){
        productCategory.classList.remove("is-invalid");
        productCategory.classList.add("is-valid");
        return true;
    }
    else{
        productCategory.classList.remove("is-valid");
        productCategory.classList.add("is-invalid");
        return false;
    }}
    function rejexDescription(){
   var  regexDescription=/^.{10,}$/i;
    if(regexDescription.test(productDescription.value)){
        productDescription.classList.remove("is-invalid");
        productDescription.classList.add("is-valid");
        return true;
    }
    else{
        productDescription.classList.remove("is-valid");
        productDescription.classList.add("is-invalid");
        return false;
    }}
    function validation(){
if(rejexName()==true
    && rejexPrice()==true
    &&rejexCategory()==true
    &&rejexDescription()==true){
        return true;
    }
    else{
        return false;
    }
    }
  

function productNameSearch(){
var term=productSearch.value;
   var cartona=" ";
    for(var i=0;i<productList.length;i++){
        if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
        cartona+=`   <tr>
        <td>${i+1}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td>
        <button index="${i}" id="updateBtn${i}" class="btn btn-info px-2 mx-2">Update</button>
        <button index="${i}" id="deleteBtn${i}" class="btn btn-danger px-2 ">delete</button>
        </td>
    </tr>`
    }
    else{
        
    }
}
    document.getElementById("tableBody").innerHTML=cartona;

}