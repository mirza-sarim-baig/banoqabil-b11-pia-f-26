//old
function greet() {
  //   console.log("Hello World");
  let container = document.getElementById("container");
  container.innerHTML = "<h5 class='title'>Changing html from js</h5>";
}

//new arrow function
// const funtionName = ()=>{}

let displayName = document.getElementById("displayName");

const changeNameToSarim = () => {
  //   console.log(displayName.innerText);
  displayName.innerText = "Sarim";
  displayName.style.color = "blue";
  //   console.log(displayName.innerText);
};

const changeNameToHabib = () => {
  //   let displayName = document.getElementById("displayName");
  displayName.innerText = "Habib";
  displayName.style.color = "green";

  //   console.log(displayName.innerText);
};

// if (true) {
//   let userName;
//   userName = "sarim";
//   console.log(userName);
// }
// /Conot access outsite block of statement
// console.log(userName);
let bulbImg = document.getElementById("bulbImg");
const turnBulbOn = () => {
  bulbImg.src =
    "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png";
};
const turnBulbOff = () => {
  bulbImg.src =
    "https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png";
};
