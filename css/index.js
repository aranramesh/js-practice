/* 
1. show / hide button 
---------------------
*/
// create variables
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.listHolder');

// action to be taken when clicked on hide list button
toggleBtn.addEventListener('click', () => {
  if (divList.style.display === 'none') {
    divList.style.display = 'block';
    toggleBtn.innerHTML = 'Hide List';
  } else {
    divList.style.display = 'none';
    toggleBtn.innerHTML = 'Show List';
  }
});

/* 
2. add list items
-----------------
*/
// create variables
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');

function addLists() {
  if (addInput.value === '') {
    alert('Enter the list name please!!!');
  } else {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
    createBtn(li);
  }
}

// add list when clicked on add item button
addBtn.addEventListener('click', () => {
  addLists();
});

// add list when pressed enter
addInput.addEventListener('keyup', (event) => {
  if(event.which === 13) {
    addLists();
  }
});

// second topic 


	
function calculate(){
	var unitprice,qty,total,
	
	 documents=this.parentNode.parentNode,
	 unitprices=documents.getElementsByClassName("unitprice")[0],
	 qtys=documents.getElementsByClassName("qty")[0],
	 totals=documents.getElementsByClassName("total")[0];
	
	unitprice=unitprices.innerText;
	qty=qtys.value;
	total=unitprice*qty;
	totals.innerText=total;
	}
	
	
	let btn=document.getElementsByClassName("btn");
	
	
	for(var i=0;i<btn.length; i++){
	
		btn[i].addEventListener("click",calculate);
	}
	
	
	function totalprice(){
	
	var unitprice,qty,total,
	
	documents=this.parentNode.parentNode,
	unit=documents.getElementsByClassName("unitprice")[0],
	quantity=documents.getElementsByClassName("qty")[0],
	overallprice=documents.getElementsByClassName("total")[0];
	
	
	unitprice=unit.innerText;
	qty=quantity.value;
	total=unitprice*qty;
	overallprice.innerText=total;
	
	}
	
	let btns=document.getElementsByClassName("btn")
	
	for(i=0; i<btns.length; i++){
		btns[i].addEventListener("click",totalprice);
	}


