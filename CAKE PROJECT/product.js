console.log("testing..");
const singleProductCart = document.getElementsByClassName("singleProductCart");
for (let i = 0; i < singleProductCart.length; i++) {
   const element = singleProductCart[i];
   element.addEventListener("click", () => {
      console.log("clicking... the Cart", element);
   });
}
