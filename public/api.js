const API_URL = "http://localhost:3000/api/users";

const avgAge = document.getElementById("avgAge");
const addUserForm = document.getElementById("addUserForm");
const usersGrid = document.getElementById("usersGrid");
const totalUsers = document.getElementById("totalUsers");

async function loadUsers() {
  try {
    const response = await fetch(API_URL); //face פונקציה ששולחת בקשת http לשרת
    //my test
    const users = await response.json();
    renderUsers(users);
    console.log(users);
  } catch (error) {
    console.error("שגיאה בהבאת הנתונים:", error);
  }
}

function renderUsers(users) {
  if (users.length === 0) {
    usersGrid.innerHTML = `
        <p>No User Yet Add One<p/>`;
    return;
  }

  usersGrid.innerHTML = users
    .map(
      (user) => `
    
    <div class="card">
        <button class='deleteBtn'></button>
        <div>${user.name}</div>
        <div>${user.email}</div>
        <div>${user.age}</div>
    
    </div>
    `
    )
    .join("");
}

async function 
loadUsers();
