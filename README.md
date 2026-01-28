# McalC+ | Simulateur de Résultats BUT Info-Com

**McalC+** is a polished, web-based grade simulator specifically designed for students in the **BUT Information-Communication (Semester 1)** at **IUT Toulouse III - Paul Sabatier**. It provides a clear, three-step interface to help students project their academic performance and visualize their competence profile.

## 🚀 Key Features

* **Guided 3-Step Workflow:** A seamless transition from identity input to grade entry, ending with a detailed analysis.
* **Dynamic Radar Chart:** Visualizes student performance across different poles (SAÉ, Tech, SIC, etc.) using **Chart.js**.
* **Professional PDF Export:** Generates a multi-page PDF report with smart page-break handling for long module lists.
* **RND Mode (Résultat Non Disponible):** Allows students to skip modules that are not yet graded or not applicable to their specific path.
* **Integrated Help System:** Clear documentation on module codes (Ressources vs. SAÉ) and manual calculation methods.

## 📊 Logic & Calculation

The simulator calculates the weighted average based on the official coefficients:

$$Moyenne = \frac{\sum (Note \times Coefficient)}{\sum Coefficient}$$

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Glassmorphism UI), Vanilla JavaScript.
* **Libraries:** * [Chart.js](https://www.chartjs.org/) for data visualization.
    * [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) for high-fidelity PDF generation.
* **Fonts:** Plus Jakarta Sans via Google Fonts.

## 📂 Project Structure

* `index.html` - Contains the logic, styling, and structure of the application.
* `assets/` - (Optional) Store logos or background images here.

## ⚖️ Disclaimer

**Document Non Officiel.** This tool is intended for simulation purposes only. Official results are provided exclusively by the IUT administration.

## 👤 Author

**Alexios ELIZALDE XIROKOSTA**
* BUT Info-Com Student | IUT Paul Sabatier
* Representative at the IUT Council (2026-2028)
* Contact: alexios.elizalde-xirokosta@etu.iut-tlse3.fr
