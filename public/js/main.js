window.addEventListener("load", () => {
    const deleteBtns = document.querySelectorAll(".delete-btn");

    deleteBtns.forEach(button => {
        const { id } = button.dataset;
        const url = `http://localhost:3000/courses/${id}`;
        const courseContainer = button.parentElement.parentElement

        const deleteCourse = (url, courseContainer) => {
            axios.delete(url)
            .then(response => {
                courseContainer.remove();
            })
            .catch(err => console.error(err))
        }

        button.addEventListener("click", () => deleteCourse(url, courseContainer))
    })
})