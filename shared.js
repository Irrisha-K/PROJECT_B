const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// document
//   .getElementById("signInForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form from submitting normally

//     // Add any form validation or authentication logic here if needed

//     // Redirect to index.html
//     window.location.href = "index.html";
//   });

document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Redirect to the index.html inside the 'home' folder
    window.location.href = "homes/index.html"; // Adjust the path as needed
  });
