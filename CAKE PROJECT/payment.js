console.log("testing..");
const userEmail = document.getElementById("userEmail");
const userWantEmailCheckBok = document.getElementById("userWantEmailsCheckBox");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const userAdresss = document.getElementById("userAddress");
const city = document.getElementById("city");
const pinCode = document.getElementById("pinCode");
const userPhone = document.getElementById("userPhone");

const cardNumber = document.getElementById("cardNumber");
const expireDate = document.getElementById("expireDate");
const expireYear = document.getElementById("expireYear");
const holderName = document.getElementById("holderName");

const shopBtn = document.getElementById("shopBtn");
const popup = document.getElementById("popup");

const closePopupIcons = document.getElementById("closePopupIcon");

const congirOrderBtn = document.getElementById("confirmOrderBtn");
congirOrderBtn.addEventListener("click", () => {
   console.log(
      userEmail.value,
      userWantEmailCheckBok.value,
      firstName.value,
      lastName.value,
      userAdresss.value,
      city.value,
      pinCode.value,
      cardNumber.value,
      expireDate.value,
      expireYear.value,
      userPhone.value
   );
});

shopBtn.addEventListener("click", () => {
   popup.classList.toggle("hide");
});

closePopupIcons.addEventListener("click", () => {
   popup.classList.toggle("hide");
});
