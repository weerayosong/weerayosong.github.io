import { initUtils } from "./utils.js";
import {
    renderFeaturedProject,
    renderCertificates,
    renderMiniProjects,
} from "./render-ui.js";

document.addEventListener("DOMContentLoaded", () => {
    // 1. เปิดใช้งานระบบย่อยทั้งหมด (Theme, Menu, Lightbox)
    initUtils();

    // 2. สั่งเรนเดอร์ UI ทั้งหมดลงหน้าเว็บ
    renderFeaturedProject();
    renderCertificates();
    renderMiniProjects();

    // 3. Smart Lazy Autoplay Videos (Intersection Observer)
    const lazyVideos = document.querySelectorAll("video.lazy-video");

    if ("IntersectionObserver" in window) {
        // สร้าง Observer เพื่อจับตาดูว่าวิดีโอเข้ามาในหน้าจอหรือยัง
        const videoObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    // ถ้าวิดีโอเลื่อนเข้ามาในหน้าจอแล้ว (isIntersecting)
                    if (entry.isIntersecting) {
                        const video = entry.target;

                        // สั่งให้เริ่มโหลดวิดีโอ
                        video.src = video.dataset.src;
                        video.load();

                        // เมื่อโหลดพร้อม ให้แสดงผลและเล่น แล้วเลิกติดตาม (unobserve)
                        video.addEventListener("loadeddata", () => {
                            video.classList.remove("opacity-0");
                            video.play();
                        });

                        observer.unobserve(video);
                    }
                });
            },
            {
                // โหลดล่วงหน้าก่อนที่วิดีโอจะโผล่พ้นขอบจอด้านล่าง 200px (เพื่อให้เนียนตา)
                rootMargin: "0px 0px 200px 0px",
            },
        );

        // สั่งให้ Observer เริ่มจับตาวิดีโอทุกตัวที่ติดคลาส lazy-video
        lazyVideos.forEach((video) => {
            videoObserver.observe(video);
        });
    }
});
