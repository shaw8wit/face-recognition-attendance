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
  setTimeout(() => hide(alertme), 3000);
};

const faceDetails = () => {
  hide(studentDetails);
  eel.mainMenu(2, {
    "id": document.getElementById('id').value,
    "name": document.getElementById('name').value.split(' ').join('_'),
  })(showAlert);
  return false;
};

const sendMail = () => {
  hide(mailDetails);
  eel.mainMenu(5, {
    "receiver": document.getElementById('receiver').value,
  })(showAlert);
  return false;
};

function checkCamera() {
  eel.mainMenu(1)(showAlert);
}

function captureFaces() {
  hide(mailDetails);
  show(studentDetails);
}

function trainImages() {
  eel.mainMenu(3)(showAlert);
}

function recordAttendance() {
  eel.mainMenu(4)(showAlert);
}

function clear() {
  document.getElementById('id').value = "";
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
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
  .addEventListener("click", () => {
    hide(studentDetails);
    clear();
  });

document
  .querySelector(".close1")
  .addEventListener("click", () => {
    hide(mailDetails);
    clear();
  });

//document.getElementById('btnn3').addEventListener("click",()=> showalert(alertme));