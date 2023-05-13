const inputBtn = document.querySelector("input");
const Addbtn = document.getElementById("AddBtn");
const divForAddList = document.querySelector(".listDiv");
let changeElement;
let changeFlag = false;
Addbtn.addEventListener("click", () => {
    let data = inputBtn.value;

    if (data !== "" && !changeFlag) {
        divForAddList.innerHTML +=
            `
    <div class="list">
    <span>${data}</span>
    <button id="editBtn"onclick="editBtn(this)">Edit</button>
    <button id="deletBtn" onclick="DeleteBtn(this)">Delete</button>    
    </div>
    `
    inputBtn.value = ""
    } else if (data !== "" && changeFlag) {
        changeElement.innerHTML = data;
        inputBtn.value = "";
        Addbtn.textContent = "Add";
        changeFlag = false;
    }
}
)
//delete data
function DeleteBtn(object) {
    divForAddList.removeChild(object.parentElement);
}
// edit data
function editBtn(object) {
    changeElement = object.previousSibling.previousSibling;
    inputBtn.value = changeElement.innerHTML;
    changeFlag = true;
    Addbtn.textContent = "edit";
}
function DeleteAll() {
    divForAddList.innerHTML = "";
}


