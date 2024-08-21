var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["todoItem"] = document.getElementById("todoItem").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("todoList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.todoItem;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("todoItem").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("todoItem").value = selectedRow.cells[0].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.todoItem;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this to-do item?')) {
        row = td.parentElement.parentElement;
        document.getElementById("todoList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("todoItem").value == "") {
        isValid = false;
        document.getElementById("todoItemValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("todoItemValidationError").classList.contains("hide"))
            document.getElementById("todoItemValidationError").classList.add("hide");
    }
    return isValid;
}

document.querySelector('input[type=submit]').addEventListener('mouseover', function () {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    this.style.transform = `translate(${randomX}px, ${randomY}px`;
});
