document.addEventListener('DOMContentLoaded', function() {

    const search = document.querySelector("#search");
    if (search) {
        search.addEventListener("click", (event) => {
            event.preventDefault();

            const queryParams = { emotion: document.querySelector("#emotion").value, character: document.querySelector("#character").value };
            const queryString = new URLSearchParams(queryParams).toString();
            const baseUrl = window.location.origin + window.location.pathname;
            const newUrl = `${baseUrl}?${queryString}`;

            window.location.href = newUrl;
        });
    }
});