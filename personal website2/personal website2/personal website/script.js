// script.js

// Get all the review cards
const reviewCards = document.querySelectorAll('.review-card');

// Add event listeners to each review card
reviewCards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle the 'active' class on the clicked card
        card.classList.toggle('active');

        // Remove the 'active' class from all other cards
        reviewCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
            }
        });
    });
});
