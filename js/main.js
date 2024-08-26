let inputText = document.querySelector(".form-control");
let inputSub = document.querySelector('.btn');
let ulList = document.querySelector('.list');

function createEle() {
    if (inputText.value == '') {
        alert('Please Inter A Task')
    } else {
        let task = document.createElement("li");
        let taskText = document.createTextNode(`${inputText.value}`);
        task.appendChild(taskText);
        task.classList.add("animate__animated", "animate__backInLeft");
        ulList.appendChild(task);
        console.log(ulList);
        inputText.value = '';
        inputSub.classList.add("animate__animated", "animate__pulse");
    }
}
inputSub.onclick = function () {
    createEle();
}
