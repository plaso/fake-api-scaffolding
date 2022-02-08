const httpClient = axios.create({
  baseURL: "http://localhost:8000/cakes",
});

const deleteCake = (id) =>
  httpClient
    .delete(`/${id}`)
    .then(() => {
      document.getElementById(`cake-${id}`).remove();
    })
    .catch((err) => console.error(err));

document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.onclick = (event) => {
    btn.classList.add("disabled");
    deleteCourse(event.target.value);
  };
});
