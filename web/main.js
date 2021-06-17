// some constants used throughout the project
const result = document.getElementById("result");
const alertme = document.getElementById("alertpopup");
const mailDetails = document.getElementById("mailDetails");
const studentDetails = document.getElementById("studentDetails");

// makes element visible
const show = (element) => {
  element.style.display = "flex";
};

// hides the element
const hide = (element) => {
  element.style.display = "none";
};

// displays an alert
const showAlert = (content) => {
  show(alertme);
  document.getElementById('modalpopup').innerHTML = content;
  setTimeout(() => hide(alertme), 3000);
};

// records face for given details
const faceDetails = () => {
  hide(studentDetails);
  eel.mainMenu(2, {
    "id": document.getElementById('id').value,
    "name": document.getElementById('name').value.split(' ').join('_'),
  })(showAlert);
  return false;
};

// sends mail for given details
const sendMail = () => {
  hide(mailDetails);
  eel.mainMenu(5, {
    "receiver": document.getElementById('receiver').value,
  })(showAlert);
  return false;
};

// checks camera
function checkCamera() {
  eel.mainMenu(1)(showAlert);
}

// displays form for details to capture face
function captureFaces() {
  hide(mailDetails);
  show(studentDetails);
}

// trains images
function trainImages() {
  eel.mainMenu(3)(showAlert);
}

// starts recording the attendance
function recordAttendance() {
  eel.mainMenu(4)(showAlert);
}

// clears the form data
function clear() {
  document.getElementById('id').value = "";
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
}

// displays form for details to send mail
function mail() {
  hide(studentDetails);
  show(mailDetails);
}

// calls method to clear all data on app
function clearData() {
  eel.mainMenu(6)(showAlert);
}

// displays the respective forms on button click
document
  .getElementById("btnn")
  .addEventListener("click", () => show(studentDetails));
document
  .getElementById("btnn-2")
  .addEventListener("click", () => show(mailDetails));

// hides and clears the respective forms on button clicks
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