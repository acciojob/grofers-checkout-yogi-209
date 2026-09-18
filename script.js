const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	priceElements=document.querySelectorAll('.prices');

	let total=0;
	priceElements.forEach(element)=>{
	total+=Number(element.textContent);
	
	}

	const table=document.querySelector('table');
	const newRow=document.createElement('tr');
	const newCell=document.createElement('td');

	newCell.id='ans';
	newCell.textContent=total;

	newRow.appendChild(newCell);
	table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

