document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from local storage on page load
    const savedFormData = JSON.parse(localStorage.getItem("formData")) || {};

    // Set saved values to form fields if they exist
    if (savedFormData.Q1) {
        const inputQ1 = document.getElementById("inputQ1");
        if (inputQ1) inputQ1.value = savedFormData.Q1;
    }
    if (savedFormData.Q2) {
        const inputQ2 = document.getElementById("inputQ2");
        if (inputQ2) inputQ2.value = savedFormData.Q2;
    }
    if (savedFormData.Q3) {
        const supervisor = document.getElementById("supervisor");
        if (supervisor) supervisor.value = savedFormData.Q3;
    }
});

const commentForm2 = document.getElementById("commentForm2");
if (commentForm2) {
    commentForm2.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            Q1: document.getElementById("inputQ1")?.value || '',
            Q2: document.getElementById("inputQ2")?.value || '',
            Q3: document.getElementById("supervisor")?.value || '',
        };

        // Save data to local storage
        localStorage.setItem("formData", JSON.stringify(formData));

        // Redirect to the next page of the form
        window.location.href = "kyc3.html"; 
    });
}
