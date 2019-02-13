window.onload= function(){
	getRequest(url, printResponse);
}

const url="http://localhost:9595/warehouse/all";
let wareTab=document.getElementById("Warehouses");

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
    let data= JSON.parse(xresponse);
    for(item of data) {  addRow(item.id, item.name, item.address);
    }

function addRow(id, name, address){
	let row = document.createElement("tr");
	let cell1 = document.createElement("td");
	let cell2 = document.createElement("td");
	let cell3 = document.createElement("td");
	
	row.appendChild(cell1);
	row.appendChild(cell2);
	row.appendChild(cell3);

	cell1.innerHTML= id;
	cell2.innerHTML= name;
	cell3.innerHTML= address;
	
    document.getElementById("Warehouses").appendChild(row);

    
   
	}
document.getElementById("dropMenu").addEventListener("change", function(){
	  window.location.href = "http://localhost:9595/Product.html";
},{passive: true});

//document.getElementById("dropMenu").addEventListener("change", onChange());
//
//function onChange(){
//	 if(document.getElementById("dropMenu")[2].selected){
//		window.location.href = "http://localhost:9595/index.html";
//		console.log("2");
//	}
//else if(document.getElementById("dropMenu")[1].selected){
//		window.location.href = "http://localhost:9595/Product.html";
//		console.log("3");
//	}
//	else if(document.getElementById("dropMenu")[0].selected){
//		window.location.href = "http://localhost:9595/Warehouses.html";
//		Console.log("4")
//	}



}