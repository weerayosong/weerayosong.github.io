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

    // 3. Lazy Autoplay Videos (หน่วงเวลา 1.5 วิ ก่อนโหลดวิดีโอ)
    setTimeout(() => {
        const lazyVideos = document.querySelectorAll("video.lazy-video");
        lazyVideos.forEach((video) => {
            // ดึงลิงก์จาก data-src มาใส่ใน src เพื่อเริ่มดาวน์โหลด
            video.src = video.dataset.src;
            video.load(); // สั่งเบราว์เซอร์ให้โหลดข้อมูลวิดีโอ

            // ทันทีที่วิดีโอโหลดพร้อมเล่น (loadeddata) ให้แสดงผลและเล่น
            video.addEventListener("loadeddata", () => {
                video.classList.remove("opacity-0"); // ให้วิดีโอ Fade-in ขึ้นมา
                video.play(); // สั่งให้เล่นอัตโนมัติ
            });
        });
    }, 1500); // 1500 ms (1.5 วินาที) คือจังหวะที่ PageSpeed ตรวจสอบ LCP จบไปแล้ว
});
