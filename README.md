# Resume-as-Code

As a Web Developer, I believe a resume should be treated like any other software product: it needs to be maintainable, accessible, type-safe, and visually pixel-perfect. Instead of wrestling with MS Word or Figma (trust me, I've been there), I built this resume generator.

## Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Using modern `@theme` variables and print modifiers)
- **Icons:** Lucide React & React Icons

## Key Features

- **Strictly ATS-Optimized:** Built with semantic HTML (`<header>`, `<section>`, `<ul>`) to ensure AI parsers and Applicant Tracking Systems can read the text layer perfectly.
- **Separation of Concerns:** The UI components are completely decoupled from the data. All resume content lives in a structured `resume.ts` object, making updates trivial.
- **Privacy-First Architecture:** Personal Identifiable Information (PII) like my phone number and email are injected at build time using Vite Environment Variables (`.env`), keeping my public repository safe from scrapers.
- **Print-Perfect CSS:** Utilizes custom `@media print` queries and Tailwind's `print:` modifiers to strip out backgrounds, fix margins, and ensure a flawless PDF export via the browser's native print engine.

## Using the template

In case you wanted to use my template, these are the steps to follow.

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/vanreagan/resume.git](https://github.com/vanreagan/resume.git)
   cd resume
   ```

2. Set up environment variables:
   Copy the example file to create your own local .env.

   ```bash
   cp .env.example .env
   ```

   Fill in your personal details in the .env file. These are injected into resume.ts to keep your contact info out of version control. Some of these are optional, so feel free to skip the non-essentials.

3. Install dependencies and run:

   ```bash
   npm install
   npm run dev
   ```

## Exporting to PDF

To generate the final document:

1. Run the app locally (npm run dev).

2. Press Ctrl + P (or Cmd + P on Mac) or use the `Download PDF` button.

3. Important Print Settings:
   - Destination: Save as PDF

   - Margins: Default

   - Headers and Footers: Unchecked

   - Background Graphics: Checked
