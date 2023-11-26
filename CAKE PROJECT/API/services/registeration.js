console.log("checking..");

const submitBtn = document.getElementById("submit");
const firstUserNameInput = document.getElementById("firstName");
const lastUserName = document.getElementById("lastName");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

submitBtn.addEventListener("click", () => {
   if (!firstUserNameInput || !lastUserName || !userEmail) {
      alert("Oops!! something went wrong");
      return;
   }
   console.log(
      firstUserNameInput.value,
      lastUserName.value,
      userEmail.value,
      userPassword.value
   );

   const options = {
      method: "POST",
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify({
         name: `${firstUserNameInput} ${lastUserName}`,
         email: userEmail,
         password: userPassword,
      }),
   };
   fetch("http://127.0.0.1:8080/api/user", options)
      .then((response) => {
         console.log("before response.json");
         response.json();
      })
      .then((json) => console.log(json));
});
