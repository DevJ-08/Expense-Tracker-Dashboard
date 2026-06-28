let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function updateScreen() {

    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    let total = 0;

    expenses.forEach((expense, index) => {

        total += Number(expense.amount);

        let li = document.createElement("li");

        li.innerHTML = `
        ${expense.name} - ₹${expense.amount}
        <button onclick="deleteExpense(${index})">Delete</button>
        `;

        list.appendChild(li);
    });

    document.getElementById("total").textContent = total;

    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpense(){

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;

    if(name === "" || amount === ""){
        alert("Fill all fields");
        return;
    }

    expenses.push({
        name:name,
        amount:amount
    });

    document.getElementById("expenseName").value="";
    document.getElementById("expenseAmount").value="";

    updateScreen();
}

function deleteExpense(index){

    expenses.splice(index,1);

    updateScreen();
}

updateScreen();