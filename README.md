# Akshatha Padmashali - Portfolio Website

A modern, responsive, high-performance personal portfolio website built for **Akshatha Padmashali**, an Artificial Intelligence and Machine Learning engineering student at AJ Institute of Engineering & Technology, Mangaluru, Karnataka.

Designed with a dark navy aesthetic (`#070b16`), luminous teal and cyan accents (`#14b8a6`, `#06b6d4`, `#38bdf8`), clean typography, accessible keyboard navigation, responsive layouts for all device sizes, and strict fidelity to verified resume credentials.

---

## 🌟 Key Highlights & Features

- **Strict Resume Fidelity:** 100% aligned with verified credentials—no arbitrary percentage meters, fabricated links, or assumed metrics.
- **Modern Aesthetic:** Dark navy background with luminous teal/cyan accents, glassmorphic surfaces, and responsive card layouts.
- **Comprehensive Sections:**
  - **Home (Hero):** Introduction, specialization badges, verified contact details, quick metrics, and resume access.
  - **About:** Career objective, engineering mindset, academic background, and core pillars.
  - **Education:** Prominent score displays for B.E. (8.53 CGPA), Pre-University (92.66%), and SSLC (96.64%).
  - **Skills:** Categorized technical competencies and soft skills using attractive cards without arbitrary percentages.
  - **Internship:** Spotlight feature for the Thiranex Data Analysis & Machine Learning Internship (Aug 2026 – Sep 2026).
  - **Projects:** Detailed showcases for:
    1. *Student Attendance Database Management System (DBMS)*
    2. *Heart Disease Prediction / Analysis (AI/ML)*
  - **Certifications:** Interactive grid featuring all 7 completed certificate courses.
  - **Languages Known:** Multilingual communication cards for English, Kannada, Tulu, and Hindi.
  - **Contact:** Functional direct email and phone links, 1-click clipboard copy with toast feedback, and an interactive message form.
  - **Resume Access:** Bundled PDF resume download and viewable in 1-click.
- **Accessibility & UX:** Keyboard accessible, WCAG-compliant contrast ratios, smooth section scrolling, and active link indicator on scroll.

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Bundler & Dev Server:** Vite
- **Icons:** Lucide React
- **Styles:** Custom Modern CSS3 with CSS variables, Grid & Flexbox, and Glassmorphic effects
- **Fonts:** Outfit & Plus Jakarta Sans

---

## 📁 Project Structure

```
akshatha-portfolio/
├── implementation.md          # Implementation requirements & architectural roadmap
├── README.md                  # Project overview & running instructions
├── package.json               # NPM scripts and dependencies
├── vite.config.js             # Vite configuration
├── index.html                 # HTML entry with SEO metadata and Google Fonts
├── public/
│   ├── favicon.svg            # Custom vector monogram favicon
│   └── Akshatha_Padmashali_Resume.pdf # Bundled verified resume
└── src/
    ├── main.jsx               # Application entry point
    ├── App.jsx                # Core component tree & state
    ├── index.css              # Global design system & responsive styling
    ├── data/
    │   └── portfolioData.js   # Centralized verified data model
    └── components/
        ├── Navbar.jsx         # Sticky header with mobile drawer & active tracking
        ├── Hero.jsx           # Hero banner with quick stats & actions
        ├── About.jsx          # Career objective & engineering pillars
        ├── Education.jsx      # High-contrast academic score cards
        ├── Skills.jsx         # Tabbed technical & soft skills cards
        ├── Internship.jsx     # Thiranex internship feature showcase
        ├── Projects.jsx       # Student Attendance DBMS & Heart Disease Prediction
        ├── Certifications.jsx # 7 course certifications grid
        ├── Languages.jsx      # 4 languages with communicative contexts
        ├── Contact.jsx        # Direct contact actions, copy buttons & form
        ├── Footer.jsx         # Navigation shortcuts, metadata & back-to-top
        └── UI/
            ├── SectionTitle.jsx # Reusable section title component
            └── Badge.jsx        # Reusable styled badge component
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended; tested on Node v22.18.0)
- npm (tested on npm 10.9.3)

### Installation

1. Navigate to the project directory:
   ```bash
   cd "C:\Users\Acer\.gemini\antigravity\scratch\akshatha-portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

To launch the local development server with hot module replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to the displayed URL (typically `http://localhost:3000` or `http://localhost:5173`).

### Production Build

To build the optimized production assets:
```bash
npm run build
```
The compiled files will be output to the `dist/` directory.

### Preview Production Build

To test the production build locally:
```bash
npm run preview
```

---

## 📄 License & Ownership

Created for **Akshatha Padmashali**. All credentials and educational details are verified and sourced from the candidate's resume.

# My-first-protfolio
