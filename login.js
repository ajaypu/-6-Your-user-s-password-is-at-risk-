const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");

async function onLogin(e) {
  e.preventDefault();

  const loginDetails = {
    email: email.value,
    password: password.value,
  };
  const response = await axios
    .post("http://localhost:3000/user/login", loginDetails)
    .then((response) => {
      if (response.status === 200) {
        if (response.data[0].email) {
          alert("Login Successfully");
        } else {
          throw new Error(response.data);
        }
      }
    })
    .catch((err) => {
      document.body.innerHTML += `<div style="color:red">${err.message}</div>`;
    });
}

form.addEventListener("submit", onLogin);
