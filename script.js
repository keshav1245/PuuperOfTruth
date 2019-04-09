// TODO(you): Write the JavaScript necessary to complete the homework.
// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

let data1 = document.querySelectorAll('[data-choice-id = "blep"]');
let data2 = document.querySelectorAll('[data-choice-id = "happy"]');
let data3 = document.querySelectorAll('[data-choice-id = "sleeping"]');
let data4 = document.querySelectorAll('[data-choice-id = "dopey"]');
let data5 = document.querySelectorAll('[data-choice-id = "burger"]');
let data6 = document.querySelectorAll('[data-choice-id = "cart"]');
let data7 = document.querySelectorAll('[data-choice-id = "nerd"]');
let data8 = document.querySelectorAll('[data-choice-id = "shy"]');
let data9 = document.querySelectorAll('[data-choice-id = "sleepy"]');

let attrValue = [];
let toychoosen = 0;
let dogchoosen = 0;
let bedchoosen = 0;

let dataAll = [data1,data2,data3,data4,data5,data6,data7,data8,data9];

data1[0].onclick =function(){
	itemSelect(dataAll,1,0);	
}
data2[0].onclick = function(){
	itemSelect(dataAll,2,0);
}
data3[0].onclick = function(){
	itemSelect(dataAll,3,0);
}
data4[0].onclick = function(){
	itemSelect(dataAll,4,0);
}
data5[0].onclick = function(){
	itemSelect(dataAll,5,0);
}
data6[0].onclick = function(){
	itemSelect(dataAll,6,0);
}
data7[0].onclick = function(){
	itemSelect(dataAll,7,0);
}
data8[0].onclick = function(){
	itemSelect(dataAll,8,0);
}
data9[0].onclick = function(){
	itemSelect(dataAll,9,0);
}

data1[1].onclick =function(){
	itemSelect(dataAll,1,1);	
}
data2[1].onclick = function(){
	itemSelect(dataAll,2,1);
}
data3[1].onclick = function(){
	itemSelect(dataAll,3,1);
}
data4[1].onclick = function(){
	itemSelect(dataAll,4,1);
}
data5[1].onclick = function(){
	itemSelect(dataAll,5,1);
}
data6[1].onclick = function(){
	itemSelect(dataAll,6,1);
}
data7[1].onclick = function(){
	itemSelect(dataAll,7,1);
}
data8[1].onclick = function(){
	itemSelect(dataAll,8,1);
}
data9[1].onclick = function(){
	itemSelect(dataAll,9,1);
}

data1[2].onclick =function(){
	itemSelect(dataAll,1,2);	
}
data2[2].onclick = function(){
	itemSelect(dataAll,2,2);
}
data3[2].onclick = function(){
	itemSelect(dataAll,3,2);
}
data4[2].onclick = function(){
	itemSelect(dataAll,4,2);
}
data5[2].onclick = function(){
	itemSelect(dataAll,5,2);
}
data6[2].onclick = function(){
	itemSelect(dataAll,6,2);
}
data7[2].onclick = function(){
	itemSelect(dataAll,7,2);
}
data8[2].onclick = function(){
	itemSelect(dataAll,8,2);
}
data9[2].onclick = function(){
	itemSelect(dataAll,9,2);
}

function itemSelect(arr,index,dataitem){

	if(dataitem===0){
		attrValue[0]=arr[index-1][dataitem].getAttribute('data-choice-id');
		if(dogchoosen === 1){

		}else{
			dogchoosen++;
		}
	}else if(dataitem===1){
		attrValue[1]=arr[index-1][dataitem].getAttribute('data-choice-id');
		if(bedchoosen===1){

		}else{
			bedchoosen++;
		}
	}else if(dataitem===2){
		attrValue[2]=arr[index-1][dataitem].getAttribute('data-choice-id');
		if(toychoosen===1){

		}else{
			toychoosen++;
		}
	}


	arr[index-1][dataitem].style.backgroundColor = "rgba(30,0,180,0.5)";
	arr[index-1][dataitem].querySelector('.checkbox').src = "images/checked.png";

	for(var i =0 ;i<arr.length ;i++){
		if(i=== index-1){
			arr[i][dataitem].style.opacity = '1';
		}else{
			arr[i][dataitem].style.backgroundColor = "#f4f4f4";
			arr[i][dataitem].querySelector('.checkbox').src = "images/unchecked.png";
			// arr[i][dataitem].style.pointerEvents = "none";
			arr[i][dataitem].style.opacity = '0.5';
		}
	}

	if( (dogchoosen+bedchoosen+toychoosen)===3){

		for(var i =0;i<dataAll.length;i++){
			dataAll[i][0].style.pointerEvents = 'none';
			dataAll[i][1].style.pointerEvents = 'none';
			dataAll[i][2].style.pointerEvents = 'none';
		}
		
		let article = document.querySelector('article');
		let result = document.createElement('div');
		result.setAttribute('class','resultBox');
		result.setAttribute('id','rBox');

		article.appendChild(result);

		let resultTitle = document.createElement('h1');
		result.appendChild(resultTitle);

		let resultContents = document.createElement('p');
		result.appendChild(resultContents);

		let restartBtn = document.createElement('button');
		result.appendChild(restartBtn);

		restartBtn.addEventListener('click',function(){
			dogchoosen = toychoosen = bedchoosen = 0;

			for(var i =0;i<dataAll.length;i++){
				
				dataAll[i][0].style.pointerEvents = 'visible';
				dataAll[i][0].style.backgroundColor = "#f4f4f4";
				dataAll[i][0].querySelector('.checkbox').src = "images/unchecked.png";
				dataAll[i][0].style.opacity = '1';

				dataAll[i][1].style.pointerEvents = 'visible';
				dataAll[i][1].style.backgroundColor = "#f4f4f4";
				dataAll[i][1].querySelector('.checkbox').src = "images/unchecked.png";
				dataAll[i][1].style.opacity = '1';

				dataAll[i][2].style.pointerEvents = 'visible';
				dataAll[i][2].style.backgroundColor = "#f4f4f4";
				dataAll[i][2].querySelector('.checkbox').src = "images/unchecked.png";
				dataAll[i][2].style.opacity = '1';

			}

			let resultDisplay = document.querySelector('.resultBox');
			resultDisplay.style.display = "none";
			window.location = 'index.html';

		});
		

		if(attrValue[0]!==attrValue[1]!==attrValue[2]){
			resultMap = RESULTS_MAP[attrValue[0]];			
		}else if((attrValue[0]===attrValue[1])||(attrValue[0]===attrValue[2])){
			resultMap = RESULTS_MAP[attrValue[0]];
		}else if(attrValue[1]===attrValue[2]){
			resultMap = RESULTS_MAP[attrValue[1]];
		}





		resultTitle.textContent = resultMap.title;
		resultContents.textContent = resultMap.contents;
		restartBtn.textContent = "Restart Quiz";


		window.location.hash = '#rBox';


	}

}