import { initUtils } from "./utils.js";
import {
    renderFeaturedProject,
    renderCertificates,
    renderMiniProjects,
} from "./render-ui.js";

document.addEventListener("DOMContentLoaded", () => {
    // เปิดใช้งานระบบย่อยทั้งหมด (Theme, Menu, Lightbox)
    initUtils();

    // สั่งเรนเดอน์ UI ทั้งหมดลงหน้าเว็บ
    renderFeaturedProject();
    renderCertificates();
    renderMiniProjects();
});
