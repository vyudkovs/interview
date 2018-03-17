let parseTree = function(fileText) {
	var result = "put your result here";
	
	//your code goes here
	
	return result;
}

let readFile = function (evt) {
	let file = evt.target.files[0]; 

	if (file) {
	  let reader = new FileReader();
	  reader.onload = function(e) { 
		document.getElementById('result').innerHTML = parseTree(e.target.result);
	  }
	  reader.readAsText(file);
	} else { 
	  document.getElementById('result').innerHTML = "Failed to load file";
	}
}

window.addEventListener("load", function () {
	document.getElementById('fileInput').addEventListener('change', readFile, false);
}, false);