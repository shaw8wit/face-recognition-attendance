const result = document.getElementById('result');
const studentDetails = document.getElementById('studentDetails');
const mailDetails = document.getElementById('mailDetails');

const faceDetails = () => {
    studentDetails.classList.add('hide');
    eel.mainMenu(2, {
        "id": document.getElementById('id').value,
        "name": document.getElementById('name').value,
    })(function (response) {
        alert(response);
    })
    return false;
}

const sendMail = () => {
    mailDetails.classList.add('hide');
    eel.mainMenu(5, {
        "receiver": document.getElementById('receiver').value,
    })(function (response) {
        alert(response);
    })
    return false;
}

function checkCamera() {
    eel.mainMenu(1)(function (response) {
        alert(response);
    });
}

function captureFaces() {
    mailDetails.classList.add('hide');
    studentDetails.classList.toggle('hide');
}

function trainImages() {
    eel.mainMenu(3)(function (response) {
        alert(response);
    });
}

function recordAttendance() {
    eel.mainMenu(4)(function (response) {
        alert(response);
    });
}

function mail() {
    studentDetails.classList.add('hide');
    mailDetails.classList.toggle('hide');
}