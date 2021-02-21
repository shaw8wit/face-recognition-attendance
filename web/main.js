const result = document.getElementById("result");
const studentDetails = document.getElementById("studentDetails");
const mailDetails = document.getElementById("mailDetails");
const alertme = document.getElementById("alertpopup");


const show = (element) => {
  element.style.display = "flex";
};

const hide = (element) => {
  element.style.display = "none";
};

const showAlert = (content) => {
  show(alertme);
  document.getElementById('modalpopup').innerHTML = content;
  setTimeout(() => {
    hide(alertme);
  }, 2000);
};

const faceDetails = () => {
  hide(studentDetails);
  eel.mainMenu(2, {
    "id": document.getElementById('id').value,
    "name": document.getElementById('name').value,
  })(function (response) {
    showAlert(response);
  });
  return false;
};

const sendMail = () => {
  hide(mailDetails);
  eel.mainMenu(5, {
    "receiver": document.getElementById('receiver').value,
  })((response) => {
    showAlert(response);
  });
  return false;
};

function checkCamera() {
  eel.mainMenu(1)((response) => showAlert(response));
}

function captureFaces() {
  hide(mailDetails);
  show(studentDetails);
}

function trainImages() {
  eel.mainMenu(3)(function (response) {
    showAlert(response);
  });
}

function recordAttendance() {
  eel.mainMenu(4)(function (response) {
    showAlert(response);
  });
}

function mail() {
  hide(studentDetails);
  show(mailDetails);
}

document
  .getElementById("btnn")
  .addEventListener("click", () => show(studentDetails));

document
  .getElementById("btnn-2")
  .addEventListener("click", () => show(mailDetails));

document
  .querySelector(".close")
  .addEventListener("click", () => hide(studentDetails));

document
  .querySelector(".close1")
  .addEventListener("click", () => hide(mailDetails));

//document.getElementById('btnn3').addEventListener("click",()=> showalert(alertme));