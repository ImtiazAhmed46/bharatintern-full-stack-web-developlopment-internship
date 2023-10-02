document.addEventListener("DOMContentLoaded", function () {
    const projectForm = document.getElementById("projectForm");
    const projectList = document.getElementById("projectList");

    projectForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get project name from the form
        const projectName = document.getElementById("projectName").value;

        // Create a new project item
        const li = document.createElement("li");
        li.textContent = projectName;
        projectList.appendChild(li);

        // Clear the input field
        document.getElementById("projectName").value = "";
    });
});
