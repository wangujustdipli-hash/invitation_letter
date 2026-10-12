
const rsvpButton = document.getElementById("rsvpButton");
const printButton = document.getElementById("printButton");

const rsvpModal = document.getElementById("rsvpModal");
const closeModal = document.getElementById("closeModal");
const rsvpForm = document.getElementById("rsvpForm");

const confirmationMessage = document.getElementById(
    "confirmationMessage"
);

// Open the RSVP popup
rsvpButton.addEventListener("click", function () {
    rsvpModal.classList.add("show");
});

// Close the popup
closeModal.addEventListener("click", function () {
    rsvpModal.classList.remove("show");
});

// Close popup when clicking outside it
rsvpModal.addEventListener("click", function (event) {
    if (event.target === rsvpModal) {
        rsvpModal.classList.remove("show");
    }
});

// Confirm attendance
rsvpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value.trim();
    const guestEmail = document.getElementById("guestEmail").value.trim();

    if (!guestName || !guestEmail) {
        confirmationMessage.textContent =
            "Please complete all the required fields.";
        return;
    }

    confirmationMessage.textContent =
        `Thank you, ${guestName}! Your details have been entered. ` +
        "Please contact the organizer to finalize your RSVP.";

    rsvpForm.reset();
});

// Print the invitation
printButton.addEventListener("click", function () {
    window.print();
});