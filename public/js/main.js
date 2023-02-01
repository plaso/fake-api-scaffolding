window.addEventListener("load", () => {
  const deleteButtons = document.querySelectorAll(".delete-btn");

  const deleteTask = (url, taskContainer) => {
    axios.delete(url)
    .then(res => {
      taskContainer.remove()
    })
    .catch(next)
  }

  deleteButtons.forEach(button => {
    const { id } = button.dataset;
    const url = `http://localhost:3000/task/${id}`;
    const taskContainer = button.parentElement;
    
    button.addEventListener('click', () => deleteTask(url, taskContainer))
  })
});
