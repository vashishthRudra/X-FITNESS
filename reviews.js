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
