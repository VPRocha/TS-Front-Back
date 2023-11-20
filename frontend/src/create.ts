import http from './helpers/http';

const buttonCreate = document.querySelector("#create");

buttonCreate?.addEventListener("click", async () => {
  try {
    const response = await http.post('/user/create');
  } catch (error) {
    console.log("error", error);
  }
});