# https://www.yosong.dev

## Mini Project #1 | One File One Page Portfolio

### 1 File 1 Page Portfolio นี่คือ มินิโปรเจคท์เล็ก ๆ โปรเจคท์แรก เป็นเว็บเพจ portfolio หน้าเดียวและถูกสร้างขึ้นด้วย ไฟล์ html ไฟล์เดียว ด้วย VanillaJS และ TailwindCSS

## จุดประสงค์

ต้องการนำความรู้ที่ได้เรียนรู้จาก 4 สัปดาห์แรก นำมาประยุกต์เป็นโปรเจคท์ เล็ก ๆ ง่าย ๆ ใช้เวลาสั้น ๆ สร้างขึ้นมาเป็นเว็บพอร์ทโฟลิโออย่างง่าย ๆ ไว้แสดงลิงค์ผลงาน โดยมีเงื่อนไขปัญหาเริ่มต้นไว้ข้อเดียวเดียวเลยในตอนแรก คือ ต้องเป็น Responsive Design เพราะช่วงที่เริ่มต้นพัฒนาเว็บนี้ ตัวผู้สร้างเองส่วนใหญ่อยู่ข้างนอกสถานที่ และมีเวลาว่างที่น้อยมาก ๆ จึงต้องโค้ดผ่านมือถือด้วย Code App และสร้างเว็บเป็นแบบ Mobile first ผู้สร้างจึงเลือกใช้ TailwindCSS ผ่าน CDN มาใช้ช่วยขึ้นเลย์เอาท์ จนเป็นรูปเป็นร่าง หลังจากแก้ปัญหาแรกได้ feature อื่นมันก็งอกผุดมาเรื่อย จนเป็นเว็บเพจในเวอร์ชั่นปัจจุบัน

โดยใช้ความรู้ที่เรียนจาก Junior Software Developer Program ซึ่งเป็น Bootcamp ที่ทาง Generation Thailand ได้จัดขึ้น
ตัวเว็บทั้งหมดใช้เพียงบทเรียน ที่สอนภายใน 1 เดือนแรกของบูทแคมป์เท่านั้น คือเรื่องพื้นฐานคอมทั่วไป HPPT/IP DNS Response Request รวมไปถึง การพัฒนาเว็บไซต์ด้วย HTML CSS JS.

**สิ่งที่นำมาใช้ ก็จะมีประมาณนี้:**

- **Document Architecture**
    - The source code utilizes a single-file architecture, consolidating document structure, formatting, and operational logic into one HTML file.
    - Semantic HTML tags, including `<nav>`, `<section>`, and `<footer>`, are employed to establish a meaningful document structure.
    - Viewport metadata is configured to ensure responsive rendering and scale adjustments across varying device screen dimensions.

- **Stylesheet and Presentation Management**
    - The Tailwind CSS framework is integrated via a Content Delivery Network (CDN).
    - Framework configuration is customized through a `tailwind.config` object within an inline script, defining system-level `primary` and `secondary` color codes.
    - Internal Cascading Style Sheets (CSS) rules are defined to control specific visual behaviors, including scrollbar concealment (`.no-scrollbar`) and overlay image positioning (`.card-overlay-img`).
    - Responsive design principles are applied using framework utility classes to dynamically adjust proportions, typography, and grid layouts based on screen width parameters.
    - Vector graphical icons from the Font Awesome library are incorporated via CDN.

- **Client-Side Processing and DOM Manipulation**
    - Vanilla JavaScript is utilized for Document Object Model (DOM) manipulation, specifically managing the toggle functionality and visibility state of the mobile navigation interface.
    - Array data structures (`projectsData` and `certsData`) are implemented to store structured information arrays, which are subsequently iterated over for the dynamic generation of HTML elements.
    - Pagination logic is engineered for desktop viewport rendering, regulating data display intervals via `currentPage` and `itemsPerPageDesktop` variables.
    - A horizontal scrolling mechanism is developed for mobile viewports, integrated with scroll ratio calculation logic to scale a visual progress bar dynamically.
    - The Fetch API is deployed to execute asynchronous HTTP requests to an external endpoint (`https://dog.ceo/api/breeds/image/random`), dynamically allocating the resolved response URLs to the source attributes of the generated project image elements.

- **Dark Mode Implementation ◽️/◾️**

    The theme control for this website is built using Vanilla JavaScript, without relying on any external libraries. It operates on 4 main principles:
    - **Theme Toggling (Class Strategy):** When the user clicks the toggle button, the function adds or removes (toggles) the `dark` class on the `<html>` tag. Tailwind CSS then immediately applies the corresponding dark variant styles.
    - **Local Storage Persistence:** The system saves the current theme state (`dark` or `light`) into the browser's `localStorage`. This ensures that the user's preferred theme remains active even after refreshing the page or closing the browser.
    - **UI Synchronization:** The script automatically updates all theme toggle buttons across the interface (both on the Desktop Navbar and the Mobile Menu) to synchronously switch their icons to match the active theme.
    - **System Preference Detection (Smart Default):** On the initial load, the system checks `localStorage` first. If no user preference is found, it uses `window.matchMedia` to detect the operating system's default preference (Dark or Light mode) and applies it automatically.
