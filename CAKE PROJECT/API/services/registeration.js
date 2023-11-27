console.log("checking..");

const submitBtn = document.getElementById("submit");
const firstUserNameInput = document.getElementById("firstName");
const lastUserName = document.getElementById("lastName");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

submitBtn.addEventListener("click", async () => {
   if (!firstUserNameInput || !lastUserName || !userEmail) {
      alert("Oops!! something went wrong");
      return;
   }
   console.log(firstUserNameInput.value);
   console.log(lastUserName.value);
   console.log(userEmail.value);
   console.log(userPassword.value);

   const options = {
      method: "POST",
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify({
         name: `${firstUserNameInput} ${lastUserName}`,
         email: `${userEmail}`,
         password: userPassword,
      }),
   };
   const res = await fetch("http://127.0.0.1:8080/api/user/", options);
   console.log(await res.json());
});

// submitBtn.addEventListener("click", () => {
//    const userData = {
//       name: `${firstUserNameInput} ${lastUserName}`,
//       email: `${userEmail}`,
//       password: userPassword,
//    };
//    const req = new XMLHttpRequest();

//       req.open("POST", "http://127.0.0.1:8080/api/user/");

//       req.setRequestHeader("Content-Type", "application/json");

//       req.addEventListener("load", function () {
//          console.log(req.response());
//       });

//       req.send(JSON.stringify(userData));

// });
