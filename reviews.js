// ========== MAIN SCRIPT ==========
document.addEventListener('DOMContentLoaded', function() {
    /**
     * Review data with photos (using placeholder images)
     * Each review contains:
     * - text: The testimonial content
     * - author: Name of the reviewer
     * - role: Their role or membership duration
     * - rating: Star rating (1-5)
     * - photo: URL of reviewer image
     * - date: When the review was submitted
     */
    const reviews = [
        {
            text: "Joining X-FITNESS was the best decision I ever made! The trainers are incredibly knowledgeable and helped me achieve results I never thought possible. The community here is so supportive and motivating. I've lost 20 pounds and gained so much confidence in just 3 months! The nutrition counseling was especially helpful in keeping me on track.",
            author: "Michael Johnson",
            role: "Member for 2 years",
            rating: 5,
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
            date: "March 15, 2023"
        },
         {
            text: "The facilities at X-FITNESS are top-notch. Clean, modern equipment and plenty of space. I especially love the group classes - the energy is electric! The yoga sessions have improved my flexibility tremendously, and the HIIT classes push me to my limits in the best way possible. The trainers modify exercises for all fitness levels, making everyone feel included.",
            author: "Sarah Williams",
            role: "Fitness Enthusiast",
            rating: 5,
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            date: "February 28, 2023"
        },
        {
            text: "As a busy professional, I appreciate the flexible hours. The 24/7 access means I can workout whenever my schedule allows. The staff is always friendly and helpful. The locker rooms are spotless, and I love that they provide towels and toiletries. It's these little details that make all the difference! The app makes it easy to track my workouts and progress too.",
            author: "David Chen",
            role: "Business Executive",
            rating: 4,
            photo: "https://randomuser.me/api/portraits/men/22.jpg",
            date: "April 2, 2023"
        },
        {
            text: "I've tried many gyms before, but X-FITNESS stands out. The personal training program transformed my body in just 3 months. Worth every penny! My trainer understood my goals and customized workouts that were challenging yet achievable. The nutrition advice was also spot on - I've never felt better! The recovery area with massage chairs is a game-changer after tough workouts.",
            author: "Emily Rodriguez",
            role: "Former Athlete",
            rating: 5,
            photo: "https://randomuser.me/api/portraits/women/63.jpg",
            date: "January 10, 2023"
        },
          {
            text: "The nutrition guidance combined with the workout plans helped me lose 25 pounds and keep it off. This isn't just a gym, it's a lifestyle changer! The community challenges are so fun and keep me motivated. I've made friends here who push me to be my best self. The smoothie bar is an added bonus - delicious and healthy post-workout options! The child care service makes it possible for me to workout regularly.",
            author: "James Wilson",
            role: "Weight Loss Success",
            rating: 5,
            photo: "https://randomuser.me/api/portraits/men/75.jpg",
            date: "December 5, 2022"
        },
        {
            text: "I was nervous about joining a gym, but the team at X-FITNESS made me feel welcome from day one. The beginner programs are perfect for someone just starting out. The staff took time to show me how to use all the equipment properly, and I never feel judged. After 6 months, I'm stronger and more confident than I've ever been! The monthly progress assessments keep me accountable and motivated to keep improving.",
            author: "Jennifer Lee",
            role: "New Member",
            rating: 4,
            photo: "https://randomuser.me/api/portraits/women/28.jpg",
            date: "May 20, 2023"
        }
    ];

    // DOM elements
    const reviewSquare = document.querySelector('.review-square');
    const dotsContainer = document.getElementById('dotsContainer');
    let currentIndex = 0;
    let intervalId;
    let isAutoRotating = true;
    
    // ========== INITIALIZE REVIEWS ==========
    /**
     * Creates review elements and navigation dots
     * based on the reviews array
     */
    function initReviews() {
        reviews.forEach((review, index) => {
            // Create review div element
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';
            if (index === 0) reviewDiv.classList.add('active');
            
            // Generate star rating HTML
            let stars = '';
            for (let i = 0; i < 5; i++) {
                stars += i < review.rating ? '★' : '☆';
            }
            
            // Create review HTML structure
            reviewDiv.innerHTML = `
                <div class="customer-img-container">
                    <div class="customer-img-bg"></div>
                    <img src="${review.photo}" alt="${review.author}" class="customer-img">
                </div>
                <p class="review-text">${review.text}</p>
                <p class="review-author">${review.author}</p>
                <p class="review-role">${review.role}</p>
                <div class="rating">${stars}</div>
                <span class="review-date">${review.date}</span>
            `;
