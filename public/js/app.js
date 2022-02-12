const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messagetwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  if (!location) {
    alert("You must provide an address");
  } else {
    fetch(`http://localhost:3000/weather?address=${location}`).then(
      (response) => {
        response.json().then((data) => {
          if (data.error) {
            messageOne.textContent = data.error;
            messagetwo.textContent = "";
          } else {
            messageOne.textContent = data.location;
            messagetwo.textContent = data.forecast;
          }
        });
      }
    );
  }
});
