# MCalC+ | Portail Étudiant & Student OS

**MCalC+** has evolved from a simple grade simulator into a comprehensive **Student Operating System (SmartST)**. Designed for the **BUT Information-Communication** at **IUT Toulouse III - Paul Sabatier**, it now bridges the gap between academic simulation and daily student life management via a unified, cloud-connected interface.

> **Current Version:** v2.4.1 (Gemini Liquid Update)  
> **Status:** 🚀 **SmartST (Public Beta)** | ✅ **Calculator (Live)**

## 🚧 DEVELOPMENT STATUS / STATUT
* 🚀 **SmartST OS (Dashboard & Calendar):** **Public Beta**. Now accessible to all authorized students (C1/C2).
* ✅ **Calculator (BUT 1, BUT 2, BUT 3):** **Live**. S1 & S2 coefficients are active.

## 📅 PROJECT ROADMAP 2026
* **JAN 2026:** ✅ Launch of MCalC+ Base (Calculator).
* **FEB 2026:** 🚀 **Official Public Beta:** SmartST Student OS & Live Calendar integration.
* **MAR 2026:** 🎨 **UI Overhaul:** Global redesign & Light/Dark Mode toggle.
* **MAY 2026:** 📱 **Mobile Native:** PWA Version & Global Dashboard.

---

## 🚀 NEW: SmartST Ecosystem (Cloud)
*Powered by Google Firebase & Google Cloud*

### 1. Smart Calendar (Live Schedule)
* **IUT Rhythm:** A specialized grid adapted to the 4-block daily structure (09h00 - 18h00).
* **Dual-Week Logic:** Seamless toggling between **Semaine A** and **Semaine B**.
* **Real-Time Sync:** Admin updates (room changes, cancellations) are pushed instantly to all users.
* **Targeting:** Classes can be assigned to specific groups (`C1`, `C2`) or the entire cohort (`PROMO`).

### 2. Admin Module
* **In-App Editing:** Authorized admins can click any calendar slot to add, edit, or delete classes.
* **Status Indicators:** Visual cues for **CANCELLED** (Red) or **POSTPONED** (Striped) sessions.
* **Exam Alerts:** High-priority warning badges for upcoming evaluations.

---

## 📊 CORE: Grade Simulator (Legacy MCalC)
The original robust calculator remains the heart of the academic projection tool.

* **3-Step Workflow:** Identity → Data Entry → Analysis.
* **Dynamic Radar Chart:** Visualizes competence balance (SAÉ vs. Ressource) using `Chart.js`.
* **Professional PDF Export:** Generates official-looking reports with `html2pdf.js`.
* **RND Mode:** Handling for "Résultat Non Disponible" (N/A grades).

---

## 🛠️ Tech Stack & Architecture
The project has shifted to a **Serverless JAMstack** architecture.

* **Frontend:** HTML5, CSS3 (Gemini Liquid Design System), Vanilla JS (ES6 Modules).
* **Backend (DB):** **Google Firebase (Firestore)** for real-time NoSQL data storage.
* **Hosting:** **Cloudflare Pages** (Edge Network).
* **Design:** Vector-only UI (SVG), Glassmorphism, Dark Mode native.

## 📥 How to Access
**No installation required.** The platform is a Progressive Web App (PWA).

🔗 **Official Deployment:** [https://alexelzx.github.io/MCalC-/index.html](https://alexelzx.github.io/MCalC-/index.html)  
*(Note: SmartST features require an Alpha Key).*

## Quick Preview
https://github.com/user-attachments/assets/8b20eb6f-cf21-4703-9275-07213d6f4498

## Screenshots

### Main Menu
<img width="1919" height="968" alt="image" src="https://github.com/user-attachments/assets/bdb15f2a-3f7d-4435-ab44-dada99c90f0c" />

### Year Selection Screen (for grade calculation)
<img width="1919" height="969" alt="image" src="https://github.com/user-attachments/assets/d1a94090-38ac-4d57-a6fe-e8e05f89eba0" />

### Grade Input Screen
<img width="1919" height="965" alt="image" src="https://github.com/user-attachments/assets/0a85e66b-ad7f-41d5-845a-46682a1fbef0" />

### Grade Results Screen
<img width="1904" height="968" alt="image" src="https://github.com/user-attachments/assets/83779779-62c3-43e7-beb4-c67d4e761eee" />

### SmartST Login Screen
<img width="1919" height="965" alt="image" src="https://github.com/user-attachments/assets/bcdb7948-78a9-4781-b905-4acaa3b953df" />

### SmartST Student View
<img width="1919" height="969" alt="image" src="https://github.com/user-attachments/assets/25b72e93-eaa5-4616-9f79-b7de0b4dabab" />

### Student Calendar View
<img width="1919" height="970" alt="image" src="https://github.com/user-attachments/assets/de8f7570-68f8-4192-822f-dca947d6b98d" />


## ⚖️ Disclaimer
**Unofficial Tool.** This project is not affiliated with IUT Paul Sabatier or Université Toulouse III. It is a student-led initiative for simulation and organization purposes. Official grades and schedules are provided exclusively by the IUT administration.

## 👤 Author
**Alexios ELIZALDE XIROKOSTA** 
* *CEO, EFPRP | Representative at the IUT Council (2026-2028)* 
* **BUT Info-Com Student | IUT Paul Sabatier**
* 📧 Contact: `alexios.elizalde-xirokosta@etu.iut-tlse3.fr`
