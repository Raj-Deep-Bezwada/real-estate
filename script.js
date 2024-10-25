document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (!email || !message) {
        alert("Please fill in all fields.");
        return;  // Stop form submission if validation fails
    }

    // Create the mailto link with the form data
    const subject = "Inquiry from Real Estate Website";
    const mailtoLink = `mailto:rajdeepbezwada@gmail.com?subject=${encodeURIComponent(subject)}&body=From: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;

    // Open the user's email client with the pre-filled mailto link
    window.location.href = mailtoLink;
});


