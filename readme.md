# AI-Powered Code Reviewer 🚀

A full-stack application that provides automated code review using Google's Gemini AI model. The application consists of a React frontend for code input and displaying reviews, and a Node.js/Express backend that integrates with the Gemini AI API.

## Features ✨

- Real-time code editing with syntax highlighting
- AI-powered code analysis and review
- Markdown rendering of review results
- Responsive design for both desktop and mobile
- Beautiful dark theme UI

## Tech Stack 🛠️

### Frontend
- React ([`react`](frontend/package.json), [`react-dom`](frontend/package.json))
- Vite for build tooling ([`vite`](frontend/package.json))
- TailwindCSS for styling ([`tailwindcss`](frontend/package.json))
- Code editor with syntax highlighting ([`react-simple-code-editor`](frontend/package.json), [`prismjs`](frontend/package.json))
- Markdown rendering ([`react-markdown`](frontend/package.json))
- Axios for API calls ([`axios`](frontend/package.json))

### Backend
- Node.js with Express ([`express`](backend/package.json))
- Google Generative AI ([`@google/generative-ai`](backend/package.json))
- CORS support ([`cors`](backend/package.json))
- Environment variable management ([`dotenv`](backend/package.json))

## Getting Started 🚦

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-powered-code-reviewer