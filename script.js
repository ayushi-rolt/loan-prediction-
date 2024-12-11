document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loanForm");
    const resultDiv = document.getElementById("result");

    // Form submission
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Show loading animation
        resultDiv.innerHTML = `<div class="text-blue-500 animate-pulse">Processing your request...</div>`;

        const formData = new FormData(form);
        try {
            const response = await fetch("/predict", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            resultDiv.innerHTML = `<div class="text-green-600">${result.result || result.error}</div>`;
        } catch (error) {
            resultDiv.innerHTML = `<div class="text-red-600">Error: ${error.message}</div>`;
        }
    });

    // Input field animations
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.classList.add("ring-2", "ring-teal-400");
        });
        input.addEventListener("blur", () => {
            input.classList.remove("ring-2", "ring-teal-400");
        });
    });
});
