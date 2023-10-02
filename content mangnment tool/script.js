document.addEventListener("DOMContentLoaded", function () {
    const articleForm = document.getElementById("articleForm");
    const articleList = document.getElementById("articleList");

    articleForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Get form values
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // Create a new article item
        const li = document.createElement("li");
        li.innerHTML = `<strong>${title}</strong><br>${content}`;
        articleList.appendChild(li);

        // Clear form inputs
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
    });
});
