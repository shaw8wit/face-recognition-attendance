const result = document.getElementById('result');

const faceDetails = () => {
    eel.mainMenu(2, {
        "id": document.getElementById('id').value,
        "name": document.getElementById('name').value,
    })
}

const mailDetails = () => {
    eel.mainMenu(2, {
        "id": document.getElementById('id').value,
        "name": document.getElementById('name').value,
    })
}

function checkCamera() {
    eel.mainMenu(1);
}

function captureFaces() {
    document.getElementById('studentDetails').classList.toggle('hide');
}

function trainImages() {
    eel.mainMenu(3);
}

function recordAttendance() {
    eel.mainMenu(4);
}

function mail() {
    eel.mainMenu(5);
}