// console.log("Users.js loaded");

// https://fakestoreapi.com/users

const fetchUsers = async () => {
  const users = await fetch("https://fakestoreapi.com/users");
  const usersData = await users.json();
  mapUsers(usersData);
};

fetchUsers();

let usersSection = document.getElementById("usersSection");

const mapUsers = (usersData) => {
  for (let i = 0; i < usersData.length; i++) {
    usersSection.innerHTML += `
  <div class="user-card">
        <div class="card-header"></div>

        <div class="card-body">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User Avatar"
            class="avatar"
          />

          <h2 class="name">${usersData[i].username}</h2>
          <p class="role">${usersData[i].email}</p>

          <p class="bio">
            Passionate about creating beautiful and user-friendly web
            experiences.
          </p>

          <div class="stats">
            <div class="stat">
              <h3>1.2K</h3>
              <p>Followers</p>
            </div>

            <div class="stat">
              <h3>340</h3>
              <p>Following</p>
            </div>

            <div class="stat">
              <h3>58</h3>
              <p>Projects</p>
            </div>
          </div>

          <a href="#" class="btn">Follow</a>
        </div>
      </div>`;
  }
};
