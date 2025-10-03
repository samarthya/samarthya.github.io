document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.github-nav .nav-item');
    const sections = document.querySelectorAll('.content-section');
    const indicator = document.querySelector('.nav-indicator');

    function updateIndicator(element) {
        indicator.style.width = `${element.offsetWidth}px`;
        indicator.style.left = `${element.offsetLeft}px`;
    }

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // Update active states
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Update indicator
            updateIndicator(this);

            // Show correct section
            const targetId = this.getAttribute('data-target');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Initialize indicator position
    const activeItem = document.querySelector('.github-nav .nav-item.active');
    if (activeItem) {
        updateIndicator(activeItem);
    }
});
