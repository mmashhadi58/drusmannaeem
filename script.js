document.addEventListener("DOMContentLoaded", function () {
    gsap.to("section", { opacity: 1, translateY: 0, duration: 1 });

    gsap.to(".about-image", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
    });

    gsap.to(".text-box", {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.7,
        ease: "power2.out",
    });

    gsap.to(".text-box h1, .text-box p", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.9,
        ease: "power2.out",
        stagger: 0.2,
    });

    gsap.to(".publication", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
        stagger: 0.3,
    });

    gsap.to(".publication img, .publication .text-content h3, .publication .text-content p", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.7,
        ease: "power2.out",
        stagger: 0.2,
    });

    // Timeline animations
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.fromTo(item, { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                scrub: true,
            }
        });
    });

    // Popup functionality for publication and news images
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const close = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".publication-image, .news-image").forEach(image => {
        image.addEventListener("click", function() {
            popup.style.display = "block";
            popupImg.src = this.src;
        });
    });

    close.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    // Google Maps
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 31.47628, lng: 74.35331 }, // Coordinates for Aadil Hospital, Lahore
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        position: { lat: 31.47628, lng: 74.35331 },
        map: map,
        title: "Aadil Hospital, Lahore",
    });
});
