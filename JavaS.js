// LogIn Page Validation

function loginValidation() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  if (email.indexOf("@") == -1) {
    document.getElementById("error-message").style.display = "block";
    document.getElementById("email").style.border = "1px solid red";

    return false;
  }
  if (pass.length < 8) {
    document.getElementById("error-pass").style.display = "block";
    document.getElementById("pass").style.border = "1px solid red";

    return false;
  }
}

function SgininValidation() {
  var first = document.getElementById("firstN").value;
  var last = document.getElementById("lastN").value;
  var tele = document.getElementById("phone").value;
  var pass = document.getElementById("pass").value;
  if (first.length < 3) {
    document.getElementById("firstN").style.border = "1px solid red";
    if (last.length < 6) {
      document.getElementById("lastN").style.border = "1px solid red";
      if (tele.length == "" || isNaN(false)) {
        document.getElementById("phone").style.border = "1px solid red";
        if (pass.length < 6) {
          document.getElementById("pass-w").style.border = "1px solid red";
          return false;
        }
      }
    }
  }
  return true;
}

function Close() {
  document.getElementById("sign-show").style.display = "none";
}

function Open() {
  document.getElementById("sign-show").style.display = "block";
}

// Get the modal
var modal = document.getElementById("signup-modal");

// Get the button that opens the modal
var btn = document.getElementById("signup-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
