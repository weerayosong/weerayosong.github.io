# yosong.dev | My VanillaJS Portfolio Website

**Live Preview:** [https://www.yosong.dev](https://www.yosong.dev)

นี่คือโปรเจกต์เว็บพอร์ตโฟลิโอส่วนตัว ที่เริ่มต้นจากไอเดียเล็กๆ สู่การพัฒนาโครงสร้างโค้ดแบบเต็มรูปแบบ เพื่อแสดงเส้นทางการเรียนรู้และการเติบโตในสายงาน Full-Stack Developer

---

## จุดประสงค์เริ่มต้น (The Origin)

โปรเจกต์นี้เริ่มต้นขึ้นในฐานะ **"Mini Project #1"** โดยมีเป้าหมายเพื่อนำความรู้พื้นฐาน (HTML, CSS, JS) ที่เรียนรู้ในช่วง 1 เดือนแรกจาก Junior Software Developer Bootcamp ของ Generation Thailand มาประยุกต์ใช้ทันที

**โจทย์ท้าทายแรกสุด:**
เนื่องจากในช่วงเริ่มต้น ผมมักจะอยู่ข้างนอกและมีเวลาจำกัด จึงต้องเขียนโค้ดผ่านแอปฯ บนโทรศัพท์มือถือเป็นหลัก เว็บไซต์นี้จึงถูกตั้งใจสร้างขึ้นด้วยแนวคิด **Mobile First** และ **1 File 1 Page Architecture** คือรวมทุกอย่างทั้ง โครงสร้าง HTML, สไตล์ CSS (Tailwind ผ่าน CDN) และลอจิกการทำงาน (Vanilla JS) ไว้ในไฟล์ `index.html` ไฟล์เดียวเพื่อให้ง่ายต่อการจัดการผ่านมือถือ

## การพัฒนาและปรับโครงสร้างใหม่ (The Evolution)

เมื่อฟีเจอร์เริ่มงอกและโปรเจกต์เริ่มใหญ่ขึ้น การใช้สถาปัตยกรรมแบบไฟล์เดียวเริ่มไม่ตอบโจทย์เรื่องความเร็ว (PageSpeed) และความสะอาดของโค้ด (Clean Code)

ในเวอร์ชันปัจจุบัน เว็บไซต์นี้จึงได้รับการ **Refactor โครงสร้างครั้งใหญ่** โดยใช้หลักการ **Separation of Concerns (SoC)** แยกทุกส่วนออกจากกันอย่างชัดเจน เพื่อประสิทธิภาพสูงสุด และนี่คือโครงสร้างทางเทคนิคที่ใช้อยู่ในปัจจุบัน:

### 1. Document Architecture (โครงสร้างเอกสาร)

- **HTML Semantics:** ปรับเปลี่ยนโครงสร้างเอกสารโดยการแยก `UI`, `Data`, และ `Logic` ออกจากกันอย่างเด็ดขาด แต่ยังคงการใช้แท็กเชิงความหมาย (Semantic Tags) อย่าง `<nav>`, `<main>`, `<section>`, และ `<footer>` เพื่อรองรับ Accessibility (a11y) และ SEO

- **ES6 Modules:** เปลี่ยนรูปแบบการเขียนลอจิกเป็น Module (ใช้อิมพอร์ต `import`/`export`) เพื่อให้สามารถแบ่งไฟล์การทำงานออกเป็นสัดส่วน (เช่น `main.js`, `renderUI.js`, `utils.js`) ทำให้โค้ดอ่านง่ายและดูแลรักษาได้ในระยะยาว

### 2. Stylesheet & Presentation (การจัดการสไตล์)

- **Tailwind CSS v4:** ถอดการเรียกใช้ Tailwind ผ่าน CDN ออก และเปลี่ยนมาใช้การ Build ไฟล์ผ่าน Tailwind CLI (`output.css`) เพื่อลดขนาดไฟล์ CSS ที่ไม่จำเป็น (Purge/Minify) ช่วยแก้ปัญหา Render-blocking และเพิ่มคะแนน PageSpeed
- **Custom CSS Extraction:** สกัดคลาสแบบกำหนดเอง (เช่น เอฟเฟกต์การ Hover การ์ด, การซ่อน Scrollbar) ออกไปเขียนแยกในไฟล์ `style.css`
- **Font Optimization:** เปลี่ยนวิธีโหลด Font Awesome เป็นแบบ Asynchronous (`preload`) เพื่อไม่ให้กีดขวางการเรนเดอร์เนื้อหาหลักในหน้าแรก

### 3. Media & Assets Management (การจัดการไฟล์มีเดีย)

- **Cloudinary CDN:** ย้ายไฟล์รูปภาพ (PNG/JPG) และวิดีโอตัวอย่างโปรเจกต์ (.mp4) ทั้งหมดออกจาก GitHub Repository ไปฝากไว้บน **Cloudinary**
- **Auto-Optimization:** ใช้งาน URL parameters ของ Cloudinary (`q_auto, f_auto, f_webp`) เพื่อบีบอัดขนาดไฟล์และแปลงสกุลไฟล์เป็น WebP แบบอัตโนมัติ (On-the-fly) ช่วยลดภาระการโหลดของเบราว์เซอร์ไปได้กว่า 80%
- **Centralized Assets Data:** สร้างไฟล์ตัวแปรกลาง (`assets.js`) เพื่อเก็บ URL ของรูปภาพและวิดีโอทั้งหมด (Single Source of Truth) ทำให้แก้ไขลิงก์ได้ง่ายจากจุดเดียว

### 4. Client-Side Processing (การทำงานฝั่งไคลเอนต์)

- **Dynamic UI Rendering:** ข้อมูลโปรเจกต์, มินิโปรเจกต์ และใบรับรอง ถูกแยกไปเก็บในรูปแบบ Array of Objects (ในโฟลเดอร์ `/data`) จากนั้นใช้ Vanilla JS (`.map()`) สร้างโค้ด HTML (Template Literals) แล้วแทรกเข้าไปใน DOM ทันทีเมื่อหน้าเว็บโหลดเสร็จ

- **Horizontal Scroll Progress:** สร้างระบบแถบความคืบหน้า (Progress bar) สำหรับการเลื่อนดูมินิโปรเจกต์บนมือถือ โดยคำนวณจากเปอร์เซ็นต์การ Scroll (Scroll Ratio)

- **Global Error Protection:** ผูก Event Listener เข้ากับตัวแปรแม่แทนที่จะผูกทีละปุ่ม (Event Delegation) เพื่อลดการใช้ Memory และโค้ดที่ซ้ำซ้อน

### 5. Dark Mode Implementation ◽️/◾️ (ระบบจัดการธีม)

ระบบควบคุมธีมของเว็บไซต์สร้างขึ้นด้วย Vanilla JS เพียวๆ โดยไม่ต้องพึ่งพาไลบรารีภายนอก อาศัยหลักการ 4 ข้อคือ:

- **Theme Toggling (Class Strategy):** การสลับคลาส `dark` บนแท็ก `<html>` เพื่อให้ Tailwind ตอบสนอง

- **Local Storage Persistence:** บันทึกสถานะธีม (Dark/Light) ลงในเบราว์เซอร์ เพื่อให้ระบบจำค่าที่ผู้ใช้เลือกไว้

- **UI Synchronization:** ซิงค์ไอคอนปุ่มสลับธีมทั้งบน Desktop Navbar และ Mobile Menu ให้ตรงกันเสมอ

- **System Preference Detection (Smart Default):** หากไม่มีการตั้งค่าไว้ล่วงหน้า ระบบจะตรวจจับธีมมาตรฐานที่ผู้ใช้ตั้งไว้บนระบบปฏิบัติการ (OS) แล้วแสดงผลแบบนั้นเป็นค่าเริ่มต้น (ใช้ `window.matchMedia`)

---

✌️*V for Vanilla! Built with logic, continuously learning to lay a solid foundation for scalable applications in the future.*
