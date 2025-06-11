// Simple function to scroll to a section
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// You can add more JavaScript for dynamic content, animations, etc.
// For example, a simple console log when the page loads:
document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome page loaded!');
});