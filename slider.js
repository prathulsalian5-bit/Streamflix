// ======== UNIVERSAL SLIDER ========
class UniversalSlider {
    constructor(sliderName, autoPlayDuration = 5000) {
        this.sliderName = sliderName;
        this.autoPlayDuration = autoPlayDuration;
        this.currentSlide = 0;
        this.init();
    }

    init() {
        const slides = document.querySelectorAll(`input[name="${this.sliderName}"]`);
        const dots = document.querySelectorAll(`[data-slider="${this.sliderName}"] .slider-dot`);

        if (slides.length === 0) return;

        // Auto-play functionality
        this.autoPlay(slides);

        // Manual dot click control
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                slides[index].checked = true;
                this.currentSlide = index;
                this.resetAutoPlay(slides);
            });
        });
    }

    autoPlay(slides) {
        setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % slides.length;
            slides[this.currentSlide].checked = true;
        }, this.autoPlayDuration);
    }

    resetAutoPlay(slides) {
        // Optional: Reset timer when user clicks manually
        setTimeout(() => {
            this.autoPlay(slides);
        }, this.autoPlayDuration);
    }
}

// Initialize all sliders on page load
document.addEventListener('DOMContentLoaded', function() {
    new UniversalSlider('slide', 5000);        // Home page slider
    new UniversalSlider('anime-slide', 5000);  // Anime page slider
    new UniversalSlider('movies-slide', 5000); // Movies page slider
    new UniversalSlider('tvshows-slide', 5000); // TV Shows page slider
});