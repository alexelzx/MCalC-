# McalC+ | Simulateur de Résultats BUT Info-Com

**McalC+** is a polished, web-based grade simulator specifically designed for students in the **BUT Information-Communication (Semester 1)** at **IUT Toulouse III - Paul Sabatier**. It provides a clear, three-step interface to help students project their academic performance and visualize their competence profile.

> [!WARNING]
> **🚧 DEVELOPMENT STATUS / STATUT DE DÉVELOPPEMENT**
>
> Please note that **BUT 1 (Semester 2)**, **BUT 2 (All Semesters)**, and **BUT 3 (All Semesters)** are currently in active development.
>
> **📅 PROJECT ROADMAP 2026**
>
> * **Early February:** UI tweaks and visual improvements (animations, design).
> * **Mid-February:** Release of **BUT 1 S2** Calculator.
> * **Late February:** MCalC+ 360 Data Browser Module (Enhanced analytics, graphics, percentages).
> * **Early March:** Release of **BUT 2** (S1 & S2).
> * **Late March:** Release of **BUT 3** (S1 & S2).
> * **Early April:** "Save & Load" Profile System (Enabling grade tracking and cross-semester comparison).
> * **Late April:** Bulk Grade Import Consolidation (File upload support).
> * **Early May:** *Experimental/Early Access* — Digital IUT Calendar for BUT 1.
> * **Mid/Late May:** Global Dashboard Implementation.

## 🚀 Key Features

* **Guided 3-Step Workflow:** A seamless transition from identity input to grade entry, ending with a detailed analysis.
* **Dynamic Radar Chart:** Visualizes student performance across different poles (SAÉ, Tech, SIC, etc.) using **Chart.js**.
* **Professional PDF Export:** Generates a multi-page PDF report with smart page-break handling for long module lists.
* **RND Mode (Résultat Non Disponible):** Allows students to skip modules that are not yet graded or not applicable to their specific path.
* **Integrated Help System:** Clear documentation on module codes (Ressources vs. SAÉ) and manual calculation methods.

## 📥 How to Use

This tool is designed as a "Portable Web App." No installation or server is required.

1. **Download** the `index.html` file from this repository.
2. **Locate** the file on your computer.
3. **Double-click** the file to open it in your preferred web browser (Chrome, Firefox, Edge, etc.).

## 🖥️ System Requirements

* **Device:** **PC/Desktop highly recommended.** * **Note:** The visualization and PDF generation features are optimized for larger screens. Using this tool on a smartphone may result in display bugs or layout issues.
* **Direct use:** You can access https://alexelzx.github.io/MCalC-/index.html and directly use the app, on the web. ****PC Recommended.**

## 📊 Logic & Calculation

The simulator calculates the weighted average based on the official coefficients:

$$Moyenne = \frac{\sum (Note \times Coefficient)}{\sum Coefficient}$$

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Glassmorphism UI), Vanilla JavaScript.
* **Libraries:** * [Chart.js](https://www.chartjs.org/) for data visualization.
    * [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) for high-fidelity PDF generation.
* **Fonts:** Plus Jakarta Sans via Google Fonts.

## ⚖️ Disclaimer

**Not official affiliation to the IUT Paul Sabatier University** This tool is intended for simulation purposes only. Official results are provided exclusively by the IUT administration.

## 👤 Author

**Alexios ELIZALDE XIROKOSTA**
* BUT Info-Com Student | IUT Paul Sabatier
* Representative at the IUT Council (2026-2028)
* Contact: alexios.elizalde-xirokosta@etu.iut-tlse3.fr
