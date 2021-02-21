const result = document.getElementById('result');
const studentDetails = document.getElementById('studentDetails');
const mailDetails = document.getElementById('mailDetails');

const show = (element) => {
    element.style.display = "flex";
}

const hide = (element) => {
    element.style.display = "none";   
}

const faceDetails = () => {
    hide(studentDetails);
    // eel.mainMenu(2, {
    //     "id": document.getElementById('id').value,
    //     "name": document.getElementById('name').value,
    // })(function (response) {
    //     alert(response);
    // })

    // show(elem);
    // setTimeout(2000, hide(elem));
    return false;
}

const sendMail = () => {
    hide(mailDetails);
    // eel.mainMenu(5, {
    //     "receiver": document.getElementById('receiver').value,
    // })(function (response) {
    //     alert(response);
    // })
    return false;
}

function checkCamera() {
    // eel.mainMenu(1)(function (response) {
    //     alert(response);
    // });
}

function captureFaces() {
    hide(mailDetails);
    show(studentDetails);
}

function trainImages() {
    // eel.mainMenu(3)(function (response) {
    //     alert(response);
    // });
}

function recordAttendance() {
    // eel.mainMenu(4)(function (response) {
    //     alert(response);
    // });
}

function mail() {
    hide(studentDetails);
    show(mailDetails);
}

document.getElementById('btnn').addEventListener('click', () => show(studentDetails));

document.getElementById('btnn-2').addEventListener('click', () => show(mailDetails));

document.querySelector('.close').addEventListener("click", () => hide(studentDetails));

document.querySelector('.close1').addEventListener("click", () => hide(mailDetails));