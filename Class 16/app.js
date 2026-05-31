const getUserData = (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  console.log(gender);

  let usersArr = JSON.parse(localStorage.getItem("users")) || [];
  console.log(usersArr);

  let userObj = {
    name,
    email,
    password,
  };

  usersArr.push(userObj);
  localStorage.setItem("users", JSON.stringify(usersArr));
};
