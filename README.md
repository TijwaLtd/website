# FiveWell Africa

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

FiveWell Africa is a modern, responsive website built with Next.js, TypeScript, and Tailwind CSS. This platform showcases our mission to transform food systems in Africa through innovative solutions and sustainable practices.

## 🚀 Features

- **Modern UI/UX**: Built with Tailwind CSS for a responsive and accessible design
- **Contact Form**: Integrated with Nodemailer for reliable email communication
- **Performance Optimized**: Fast page loads and smooth animations with Framer Motion
- **SEO Friendly**: Built-in Next.js optimizations for better search engine visibility
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: Lucide React Icons
- **Type Safety**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fivewell-africa.git
   cd fivewell-africa
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   CPANEL_SMTP_HOST=mail.fivewellafrica.org
   CPANEL_SMTP_PORT=465
   CPANEL_EMAIL=noreply@fivewellafrica.org
   CPANEL_EMAIL_PASSWORD=your-email-password
   ADMIN_EMAIL=admin@fivewellafrica.org
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### cPanel

1. Build the application:
   ```bash
   npm run build
   ```

2. The `out` directory will be created. Upload the contents to your cPanel's public_html directory.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues) if you would like to contribute.

## 📧 Contact

For any inquiries, please contact us at [info@fivewellafrica.org](mailto:info@fivewellafrica.org)

---

Built with ❤️ by FiveWell Africa Team
