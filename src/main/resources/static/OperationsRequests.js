//Average
let url0="http://localhost:9595/product/avg";
function avgRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(this);
        }
    }
    xhr.send();
}
  
function printResponse0(xhrobj){
    let xresponse = xhrobj.response;
    let avg= JSON.parse(xresponse);
    document.getElementById("avg").innerHTML= (Math.round(avg *100)/100);
}

avgRequest(url0, printResponse0);

//Maximum
let url1 ="http://localhost:9595/product/max";
function maxRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(this);
        }
    }
    xhr.send();
}
  
function printResponse1(xhrobj){
    let xresponse = xhrobj.response;
    let max= JSON.parse(xresponse);
    document.getElementById("max").innerHTML= (Math.round(max *100)/100);
}

maxRequest(url1, printResponse1);

//Median
let url2 ="http://localhost:9595/product/median";
function medianRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(this);
        }
    }
    xhr.send();
}
  
function printResponse2(xhrobj){
    let xresponse = xhrobj.response;
    let median= JSON.parse(xresponse);
    document.getElementById("median").innerHTML= (Math.round(median *100)/100);
}

medianRequest(url2, printResponse2);

//Minimum
let url3 ="http://localhost:9595/product/min";
function minRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(this);
        }
    }
    xhr.send();
}
  
function printResponse3(xhrobj){
    let xresponse = xhrobj.response;
    let min= JSON.parse(xresponse);
    document.getElementById("min").innerHTML= (Math.round(min *100)/100);
}

minRequest(url3, printResponse3);

//Sum
let url4 ="http://localhost:9595/product/sum";
function sumRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(this);
        }
    }
    xhr.send();
}
  
function printResponse4(xhrobj){
    let xresponse = xhrobj.response;
    let sum= JSON.parse(xresponse);
    document.getElementById("sum").innerHTML= (Math.round(sum *100)/100);
}

sumRequest(url4, printResponse4);