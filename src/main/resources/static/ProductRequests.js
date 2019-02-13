
function postRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:9595/product");
    xhr.setRequestHeader("content-type", "application/JSON");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(this);
        }
        
    }


		let id = document.getElementById("productId").value;
		let name = document.getElementById("productName").value;
		let price = document.getElementById("productPrice").value;
		let quantity = document.getElementById("productQuantity").value;
		let warehouseId= document.getElementById("warehouseId").value;
		let warehouseName= document.getElementById("warehouseName".value);
		let warehouseAddress= document.getElementById("warehouseAddress".value);
		
		let warehouseObj = {
				"warehouseName": warehouseName,
				"warehouseId" : warehouseId,
				"warehouseAddress": warehouseAddress
				
	
	};
		 let newProduct = {
    		"id": id,
    		"name": name,
    		"price": price,
    		"quantity": quantity,
    		"warehouse": {
    			"id": warehouseId,
    			"name": warehouseName,
    			"address": warehouseAddress}
		 }
   
    let jsonObj = JSON.stringify(newProduct);

    xhr.send(jsonObj);
}

function addNewRow(id, name, price, quantity, warehouse){
	let counter = 25;
	let row = document.createElement("tr");
	let cell1 = document.createElement("td");
	let cell2 = document.createElement("td");
	let cell3 = document.createElement("td");
	let cell4 = document.createElement("td");
	let cell5 = document.createElement("td");
	
	  if(id === undefined){
	        id = counter;
	        counter++;
	  }
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
function postSuccess(){
	alert("Product Generated Successfully, Please Refresh Page")	}

document.getElementById("selcButt").addEventListener("click",postRequest);
document.getElementById("selcButt").addEventListener("click",postSuccess);

//Delete Button
function deleteRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:9595/product");
    xhr.setRequestHeader("content-type", "application/JSON");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(this);
        }
        
    }


		let id = document.getElementById("productId").value;
		let name = document.getElementById("productName").value;
		let price = document.getElementById("productPrice").value;
		let quantity = document.getElementById("productQuantity").value;
		let warehouseId= document.getElementById("warehouseId").value;
		let warehouseName= document.getElementById("warehouseName".value);
		let warehouseAddress= document.getElementById("warehouseAddress".value);
		
		let warehouseObj = {
				"warehouseName": warehouseName,
				"warehouseId" : warehouseId,
				"warehouseAddress": warehouseAddress
				
	
	};
		 let newProduct = {
    		"id": id,
    		"name": name,
    		"price": price,
    		"quantity": quantity,
    		"warehouse": {
    			"id": warehouseId,
    			"name": warehouseName,
    			"address": warehouseAddress}
		 }
   
    let jsonObj = JSON.stringify(newProduct);

    xhr.send(jsonObj);
}
function deleteSuccess(){
	alert("Product Deleted Successfully, Please Refresh Page")	}
document.getElementById("delButt").addEventListener("click",deleteRequest);
document.getElementById("delButt").addEventListener("click",deleteSuccess);


//Put Button
function putRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", "http://localhost:9595/product");
    xhr.setRequestHeader("content-type", "application/JSON");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(this);
        }
        
    }


		let id = document.getElementById("productId").value;
		let name = document.getElementById("productName").value;
		let price = document.getElementById("productPrice").value;
		let quantity = document.getElementById("productQuantity").value;
		let warehouseId= document.getElementById("warehouseId").value;
		let warehouseName= document.getElementById("warehouseName".value);
		let warehouseAddress= document.getElementById("warehouseAddress".value);
		
		let warehouseObj = {
				"warehouseName": warehouseName,
				"warehouseId" : warehouseId,
				"warehouseAddress": warehouseAddress
				
	
	};
		 let newProduct = {
    		"id": id,
    		"name": name,
    		"price": price,
    		"quantity": quantity,
    		"warehouse": {
    			"id": warehouseId,
    			"name": warehouseName,
    			"address": warehouseAddress}
		 }
   
    let jsonObj = JSON.stringify(newProduct);

    xhr.send(jsonObj);
}
function putSuccess(){
	alert("Product Updated Successfully, Please Refresh Page")	}
document.getElementById("putButt").addEventListener("click",putRequest);
document.getElementById("putButt").addEventListener("click",putSuccess);

    document.getElementById("putButt").addEventListener("click",putRequest);
