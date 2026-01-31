# MCalC+ | Portail Étudiant & Student OS

**MCalC+** has evolved from a simple grade simulator into a comprehensive **Student Operating System (SmartST)**. Designed for the **BUT Information-Communication** at **IUT Toulouse III - Paul Sabatier**, it now bridges the gap between academic simulation and daily student life management via a unified, cloud-connected interface.

> **Current Version:** v2.4.1 (Gemini Liquid Update)  
> **Status:** 🔒 SmartST (Closed Alpha) | ✅ Calculator (Public Beta)

## 🚧 DEVELOPMENT STATUS / STATUT
* **SmartST OS (Dashboard & Calendar):** **Closed Alpha**. Requires an access key to enter.
* **Calculator (BUT 1):** **Live**. S1 & S2 coefficients are active.
* **Calculator (BUT 2 & 3):** **In Development**. Modules are being integrated.

## 📅 PROJECT ROADMAP 2026
* **Jan 2026:** Launch of MCalC+ Base (Calculator).
* **Early Feb:** Release of **SmartST** (Student OS) & **Smart Calendar**. *(*Only for BUT 1 C1 and C2*)
* **Early/Mid-Feb** Expansion of Calculator support to BUT 2 & BUT 3.
* **Early March:** New features to the SmartST system and global redesign. Possibility to switch between dark/white theme.
* **May:** Mobile Native PWA & Global Dashboard.

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

## ⚖️ Disclaimer
**Unofficial Tool.** This project is not affiliated with IUT Paul Sabatier or Université Toulouse III. It is a student-led initiative for simulation and organization purposes. Official grades and schedules are provided exclusively by the IUT administration.

## 👤 Author
**Alexios ELIZALDE XIROKOSTA** 
* *CEO, EFPRP | Representative at the IUT Council (2026-2028)* 
* **BUT Info-Com Student | IUT Paul Sabatier**
* 📧 Contact: `alexios.elizalde-xirokosta@etu.iut-tlse3.fr`
