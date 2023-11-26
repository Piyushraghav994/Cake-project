console.log("checking..");

const submitBtn = document.getElementById("submit");
const firstUserNameInpur = document.getElementById("firstName");
const lastUserName = document.getElementById("lastName");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

submitBtn.addEventListener("click", () => {
   if (!firstUserNameInpur || !lastUserName || !userEmail) {
      alert("Oops!! something went wrong");
   } else {
      console.log(
         firstUserNameInpur.value,
         lastUserName.value,
         userEmail.value,
         userPassword.value
      );

      fetch("http://127.0.0.1:8080/api/user/", {
         method: "POST",
         body: JSON.stringify({
            name: `${firstUserNameInpur.value} ${lastUserName.value}`,
            email: userEmail.value,
            password: userPassword.value,
         }),
         headers: {
            "Content-type": "application/json; charset=UTF-8",
         },
      })
         .then((response) => response.json())
         .then((json) => console.log(json));
   }
});
