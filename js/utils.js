export function initUtils() {
    // 1. Footer Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // 2. Mobile Menu
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            if (mobileMenu.classList.contains("hidden")) {
                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");
            } else {
                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-times");
            }
        });

        document.querySelectorAll("#mobile-menu a").forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");
            });
        });
    }

    // 3. Theme Toggle
    function toggleTheme() {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        document.querySelectorAll(".theme-icon").forEach((icon) => {
            icon.textContent = isDark ? "◽️" : "◾️";
        });
    }

    const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");
    if (themeToggleDesktop)
        themeToggleDesktop.addEventListener("click", toggleTheme);
    if (themeToggleMobile)
        themeToggleMobile.addEventListener("click", toggleTheme);

    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
        document
            .querySelectorAll(".theme-icon")
            .forEach((icon) => (icon.textContent = "◽️"));
    } else {
        document.documentElement.classList.remove("dark");
        document
            .querySelectorAll(".theme-icon")
            .forEach((icon) => (icon.textContent = "◾️"));
    }

    // 4. Lightboxes (ชั่วคราว ผูกกับ window เพื่อให้ทำงานกับ onclick ใน HTML ได้เหมือนเดิม)
    // --- Simple Lightbox ---
    const lightbox = document.getElementById("simple-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCloseBtn = document.getElementById("lightbox-close");

    window.openLightbox = function (imgSrc) {
        if (!lightboxImg || !lightbox) return;
        lightboxImg.src = imgSrc;
        lightbox.classList.remove("opacity-0", "pointer-events-none");
        lightboxImg.classList.add("scale-100");
        document.body.style.overflow = "hidden";
    };

    window.closeLightbox = function () {
        if (!lightbox) return;
        lightbox.classList.add("opacity-0", "pointer-events-none");
        if (lightboxImg) lightboxImg.classList.remove("scale-100");
        document.body.style.overflow = "";
        setTimeout(() => {
            if (lightboxImg) lightboxImg.src = "";
        }, 300);
    };

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) window.closeLightbox();
        });
    }
    if (lightboxCloseBtn)
        lightboxCloseBtn.addEventListener("click", window.closeLightbox);

    // --- Video Lightbox ---
    const videoLightbox = document.getElementById("video-lightbox");
    const lightboxVideo = document.getElementById("lightbox-video");
    const videoLightboxCloseBtn = document.getElementById(
        "video-lightbox-close",
    );

    window.openVideoLightbox = function (videoSrc) {
        if (!lightboxVideo || !videoLightbox) return;
        lightboxVideo.src = videoSrc;
        videoLightbox.classList.remove("opacity-0", "pointer-events-none");
        lightboxVideo.classList.add("scale-100");
        document.body.style.overflow = "hidden";
        lightboxVideo.currentTime = 0;
        lightboxVideo.muted = false;
        lightboxVideo.play();
    };

    window.closeVideoLightbox = function () {
        if (!videoLightbox) return;
        videoLightbox.classList.add("opacity-0", "pointer-events-none");
        if (lightboxVideo) lightboxVideo.classList.remove("scale-100");
        document.body.style.overflow = "";
        setTimeout(() => {
            if (lightboxVideo) {
                lightboxVideo.pause();
                lightboxVideo.src = "";
            }
        }, 500);
    };

    if (videoLightbox) {
        videoLightbox.addEventListener("click", (e) => {
            if (e.target === videoLightbox || e.target === lightboxVideo)
                window.closeVideoLightbox();
        });
    }
    if (videoLightboxCloseBtn)
        videoLightboxCloseBtn.addEventListener(
            "click",
            window.closeVideoLightbox,
        );

    // --- Profile Sub Lightbox ---
    const profileSubLightbox = document.getElementById(
        "profileSubImageLightbox",
    );

    window.openProfileSubLightbox = function () {
        if (profileSubLightbox) {
            profileSubLightbox.showModal();
            document.body.style.overflow = "hidden";
        }
    };

    window.closeProfileSubLightbox = function (event) {
        if (
            profileSubLightbox &&
            event &&
            event.target === profileSubLightbox
        ) {
            profileSubLightbox.close();
        }
    };

    if (profileSubLightbox) {
        profileSubLightbox.addEventListener("close", () => {
            document.body.style.overflow = "";
        });
    }

    // Escape Key Handler for all lightboxes
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (lightbox && !lightbox.classList.contains("pointer-events-none"))
                window.closeLightbox();
            if (
                videoLightbox &&
                !videoLightbox.classList.contains("pointer-events-none")
            )
                window.closeVideoLightbox();
        }
    });
}
