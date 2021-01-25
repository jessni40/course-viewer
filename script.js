// ----------------------------------------------------------------------
// Jessica Ni
// 9/9/20
// CS 639
// TODO: 
// ----------------------------------------------------------------------

let hasLoadedFriendsAndFamilyData = false;

function askQuestion() {
	document.getElementById("questionArea").style.visibility = "visible";
}

function submitQuestion() {
	var inputVal = document.getElementById("questionField").value;
	console.log(inputVal);

}

function addPizzazz() {
	document.getElementsByName("sayingOfTheDay")[0].style.color = "#8ab7ff";
	document.getElementsByName("sayingOfTheDay")[0].style.fontSize = "x-large";
	document.getElementsByName("sayingOfTheDay")[0].style.textShadow = "2px 2px 1px #e3e3e3";
}

function saveBalance() {
	var userBalance = document.getElementById("balanceInput").value;
	// if invalid input
	if(userBalance === "" || isNaN(userBalance)){
		console.log("Cannot update balance, syntax error!");
	} else{
		document.getElementById("balance").innerHTML = userBalance;
	}
}

function printBalance() {
	var balance = document.getElementById("balance").innerHTML;
	console.log("You have " + balance + " in your account!");
}

function alertBalance() {
	var balance = document.getElementById("balance").innerHTML;
	if(balance < 0){
		window.alert(":(");
	} else if(balance >= 0 && balance <= 100){
		window.alert(":)");
	} else if(balance > 100){
		window.alert(":D");
	}
}

function loadFriendsAndFamilyData() {

	if (hasLoadedFriendsAndFamilyData) {
		return;
	} else {
		hasLoadedFriendsAndFamilyData = true;
	}

	let friendsAndFamilyAccounts = [
		{
			name: "Jane McCain",
			balance: 7262.71
		},
		{
			name: "Bill Phil",
			balance: 9830.02
		},
		{
			name: "Tod Cod",
			balance: 0.03
		},
		{
			name: "Karen Marin",
			balance: 72681.01
		}
	];

	
	var table = document.getElementById("friendsAndFamilyBalances");
	
	friendsAndFamilyAccounts.forEach(element => {
		let row = table.getElementsByTagName("tbody")[0].insertRow();
		let name = row.insertCell(0);
		
		name.innerHTML = element.name;
		let balance = row.insertCell(1);
		
		if(element.balance < 1){
			console.log("hello");
			balance.style.color = "red";
			name.style.color = "red";
		}
		
		balance.innerHTML = element.balance;
	});

}

function addPersonalTransactionRows() {
	
	for(var i = 0; i < 4; i++){
		fetch('http://mysqlcs639.cs.wisc.edu:53706/api/badgerbank/transaction')
			.then(response => response.json())
			.then(data => {
				let table2 = document.getElementById("personalTransactions");
				let row = table2.getElementsByTagName("tbody")[0].insertRow();
				let dateCol = row.insertCell(0);
				dateCol.innerHTML = data.date;
				let companyCol = row.insertCell(1);
				companyCol.innerHTML = data.company;
				let amountCol = row.insertCell(2);
				amountCol.innerHTML = data.amount;
			}
			);
	}

}

function clearPersonalTransactionRows() {
	// delete old tbody insert new tbody
	// var newtbody = document.createElement('tbody');
	// populate_with_new_rows(newtbody);
	// oldtbody.personalTransactions.replaceChild(newtbody, oldtbody)

	var Table = document.getElementById("mytable");
	personalTransactions.getElementsByTagName("tbody")[0].innerHTML = "";
	
}
