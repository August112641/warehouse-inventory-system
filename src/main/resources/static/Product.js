window.onload= function(){
	getRequest(url, printResponse);
}

const url="http://localhost:9595/product/all";
let prodTab=document.getElementById("products");

function getRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(this);
        }
    }
    xhr.send();
}
  
   
function printResponse(xhrobj){
    let xresponse = xhrobj.response;
    let data= JSON.parse(xresponse); //This is my JSON Object/File
    for(item of data) {  addRow(item.id, item.name, item.price, item.quantity, item.warehouse.name);
    }
console.log(item.warehouse);
function addRow(id, name, price, quantity, warehouse){
	let row = document.createElement("tr");
	let cell1 = document.createElement("td");
	let cell2 = document.createElement("td");
	let cell3 = document.createElement("td");
	let cell4 = document.createElement("td");
	let cell5 = document.createElement("td");
	
	
	row.appendChild(cell1);
	row.appendChild(cell2);
	row.appendChild(cell3);
	row.appendChild(cell4);
	row.appendChild(cell5);
	
	
	cell1.innerHTML= id;
	cell2.innerHTML= name;
	cell3.innerHTML= price;
	cell4.innerHTML= quantity;
	cell5.innerHTML= warehouse;
	
    document.getElementById("product").appendChild(row);

	}

document.getElementById("dropMenu").addEventListener("change", function(){
	  window.location.href = "http://localhost:9595/Warehouses.html";
},{passive: true});


}