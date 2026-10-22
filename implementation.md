# Implementation Specification & Architecture Plan: Akshatha Padmashali Portfolio

## 1. Project Overview & Objective
Build an elite, modern, responsive personal portfolio website for **Akshatha Padmashali**, an Artificial Intelligence and Machine Learning engineering student based in Mangaluru, Karnataka, India.

The portfolio is designed with a dark navy aesthetic (`#070b14` / `#0b1329`), teal and cyan luminous accents (`#14b8a6`, `#06b6d4`, `#38bdf8`), clean typography, accessible keyboard navigation, responsive layouts for all device sizes, and strict fidelity to the verified resume without inventing unverified credentials.

---

## 2. Verified Resume Data (Truth Source)
* **Full Name:** Akshatha Padmashali
* **Role / Status:** B.E. Student in Artificial Intelligence and Machine Learning
* **Location:** Mangaluru, Karnataka, India
* **Email:** akshathapadmashali19@gmail.com
* **Phone:** +91-7338143157
* **Career Objective:** Motivated Artificial Intelligence and Machine Learning engineering student seeking an opportunity to apply technical knowledge, strengthen practical skills, learn from experienced professionals, and contribute effectively to the growth of the organization.
* **Education:**
  1. *Bachelor of Engineering (B.E.) – Artificial Intelligence and Machine Learning*, AJ Institute of Engineering & Technology — **CGPA: 8.53**
  2. *Pre-University*, Sarojini Madhusudhan Kushe P U College — **Percentage: 92.66%**
  3. *SSLC*, Sarojini Madhusudhan Kushe P U College — **Percentage: 96.64%**
* **Technical Skills:** Python, Java, SQL, DBMS, Data Structures and Algorithms, Machine Learning
* **Soft Skills:** Communication, Teamwork, Problem Solving, Time Management, Presentation Skills
* **Certificate Courses:**
  1. Python Fundamentals
  2. Python Data Structures and Algorithms
  3. HTML – Advanced
  4. Artificial Intelligence for All
  5. Introduction to MS Excel
  6. Introduction to Gen AI Studio
  7. Data Essentials with Python
* **Internship:**
  * *Thiranex Internship – Data Analysis / Machine Learning* (Aug 2026 – Sep 2026)
  * Responsibilities & Work:
    - Completed internship tasks involving data cleaning, exploratory data analysis, visualization, and machine learning.
    - Used Python, Pandas, NumPy, Matplotlib, and Google Colab for practical project work.
* **Projects:**
  1. *Student Attendance Database Management System – DBMS*
     - Worked with database tables, relationships, and SQL queries for storing and retrieving attendance information.
     - Tech highlights: SQL, Relational Schema Design, Database Management System, Query Optimization.
  2. *Heart Disease Prediction / Analysis*
     - Performed data cleaning, data preprocessing, visualization, and machine learning techniques to analyze heart disease data and build a predictive analysis workflow.
     - Tech highlights: Python, Machine Learning, Data Preprocessing, Exploratory Data Analysis, Predictive Modeling.
* **Languages Known:** English, Kannada, Tulu, Hindi

---

## 3. Tech Stack & Architectural Decisions
- **Framework:** React 18+ with Vite
- **Styling Architecture:** Modern pure CSS3 with CSS custom properties (variables), CSS Grid & Flexbox, Glassmorphism backdrop-blur effects, responsive clamp typography, and accessible high-contrast ratios (WCAG AAA/AA).
- **Icons:** `lucide-react` for clean, professional vector iconography.
- **Navigation & Scrolling:** Smooth native scrolling with active link tracking via `IntersectionObserver`.
- **Assets:** Original `Akshatha_Padmashali_Resume.pdf` bundled into public assets for direct viewing and downloading.
- **Copy & Contact Actions:** Direct `mailto:` and `tel:` links, along with 1-click clipboard copy with feedback toasts.

---

## 4. Section Structure & UI Layout
1. **Header / Navbar:** Sticky floating navigation bar with blur effect, brand initials emblem, section links (Home, About, Education, Skills, Experience, Projects, Certifications, Languages, Contact), and a direct "Resume" download button. Includes a mobile responsive drawer menu.
2. **Hero (Home):** Dynamic greeting badge ("AI & ML Engineer"), bold headline, clear summary, quick contact badges (email, phone, location), and dual primary call-to-action buttons ("View Projects", "Contact Me", "Download Resume").
3. **About Section:** Career objective card, quick stat cards (B.E. AIML candidate, 8.53 CGPA, 7 Certifications, 4 Languages), and core domains of interest.
4. **Education Section:** Timeline/card display showcasing AJ Institute of Engineering & Technology (B.E. AIML with 8.53 CGPA), Sarojini Madhusudhan Kushe PU College (92.66%), and SSLC (96.64%).
5. **Skills Section:**
   - Technical skills cards with categorizations, toolchips, and context (no arbitrary 0-100% bars).
   - Soft skills cards with communicative and problem-solving badges.
6. **Internship Section (Thiranex):** Feature card showcasing the Data Analysis / Machine Learning internship at Thiranex, duration (Aug 2026 – Sep 2026), applied technologies (Python, Pandas, NumPy, Matplotlib, Google Colab), and key contributions.
7. **Projects Section:**
   - Project 1: Student Attendance Database Management System (DBMS, SQL, Relational Architecture).
   - Project 2: Heart Disease Prediction / Analysis (ML, Data Cleaning, EDA, Predictive Workflow).
   - Tags, architecture breakdown, and key execution points.
8. **Certifications Section:** Interactive grid of 7 verified certificate courses with credential icons and topics.
9. **Languages Section:** Visual multilingual badges representing English, Kannada, Tulu, and Hindi.
10. **Contact Section:** Working email link, phone link, location card, interactive copy buttons, and a clean contact form interface (with browser mail client integration).
11. **Footer:** Copyright, credits, smooth back-to-top button, and quick anchor shortcuts.

---

## 5. Implementation Roadmap & Steps
- [x] Step 1: Inspect environment, locate resume, and extract all verified details.
- [x] Step 2: Create project directory and copy resume PDF into `public/`.
- [x] Step 3: Write specification (`implementation.md`).
- [ ] Step 4: Scaffold Vite React project configuration and install dependencies (`lucide-react`).
- [ ] Step 5: Implement centralized portfolio data model (`src/data/portfolioData.js`).
- [ ] Step 6: Create comprehensive CSS design system (`src/index.css`) with dark navy theme, teal accents, and animations.
- [ ] Step 7: Build all UI components (`Navbar`, `Hero`, `About`, `Education`, `Skills`, `Internship`, `Projects`, `Certifications`, `Languages`, `Contact`, `Footer`).
- [ ] Step 8: Assemble in `App.jsx`, add metadata in `index.html`.
- [ ] Step 9: Build and test with Vite (`npm run build`).
- [ ] Step 10: Verify responsiveness, links, keyboard accessibility, and production readiness.
- [ ] Step 11: Write `README.md` with complete installation and run instructions.
