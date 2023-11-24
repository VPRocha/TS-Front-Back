import http from "./helpers/http";

const buttonCreate = document.querySelector("#create") as HTMLButtonElement;
const userName = document.querySelector("#userName") as HTMLInputElement;
const userEmail = document.querySelector("#userEmail") as HTMLInputElement;
const userPassword = document.querySelector("#userPassword") as HTMLInputElement;
const userNameError = document.querySelector("#userNameError") as HTMLSpanElement;
const userEmailError = document.querySelector("#userEmailError") as HTMLSpanElement;
const userPasswordError = document.querySelector("#userPasswordError") as HTMLSpanElement;

if (buttonCreate && userName && userEmail && userPassword && userNameError && userEmailError && userPasswordError) {
  buttonCreate.addEventListener("click", async (event) => {
    event.preventDefault();

    const user = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };

    userNameError.textContent = "";
    userEmailError.textContent = "";
    userPasswordError.textContent = "";

    try {
      const response = await http.post('/user/create', user);
      console.log(response);
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errorData = error.response.data.errors;

        errorData.forEach((element: any) => {
          // Exibe a mensagem de erro específica para cada campo
          if (element.path === "name") {
            userNameError.textContent = element.msg;
          }
          if (element.path === "email") {
            userEmailError.textContent = element.msg;
          }
          if (element.path === "password") {
            userPasswordError.textContent = element.msg;
          }
        });
      } else {
        console.log('Erro desconhecido:', error);
      }
    }
  });
} else {
  console.log('Alguns elementos não foram encontrados no documento.');
}
