<div align="center">
  <h1>🌟 Welcome to SkillUp Africa PWD Project 🌟</h1>
  <p>Empowering persons with disabilities through accessible vocational training, mentorship and job opportunities</p>
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="Waving Hand" width="25px" height="25px">
</div>

## 📋 Project Description

SkillUp Africa PWD is a comprehensive platform designed to provide accessible vocational training, mentorship, and job opportunities for persons with disabilities across Africa. The platform bridges the gap between skilled individuals and employment opportunities in various trades.

## 🚀 Key Features

- **Vocational Courses**: Hands-on training in various trades
  - Electrical Works
  - Automotive Mechanics
  - Pottery & Ceramics
  - Plumbing
  - Jewelry Making
  - Tailoring & Fashion Design

- **Job Recommendations**: Personalized job matching based on skills
- **Mentorship Program**: Connect with industry professionals
- **Responsive Design**: Fully accessible on all devices
- **Interactive Learning**: Engaging course materials and resources

## 🛠 Tech Stack

- **Frontend**: 
  - React 18 with TypeScript
  - Vite for fast development and building
  - React Router v6 for navigation

- **UI/UX**:
  - Tailwind CSS for utility-first styling
  - Material-UI (MUI) components
  - Framer Motion for animations
  - React Icons for iconography

- **State Management**:
  - React Context API
  - React Query for server state

- **Development Tools**:
  - ESLint + Prettier for code quality
  - TypeScript for type safety
  - pnpm for package management
  - Git for version control

## 📁 Project Structure

```
src/
├── assets/                 # Static assets
│   ├── Icons/             # SVG icons and illustrations
│   └── Images/            # Image assets
│
├── components/            # Reusable UI components
│   ├── CoursesCards/      # Course listing components
│   ├── Navbar/           # Navigation components
│   ├── Footer/           # Footer components
│   └── common/           # Shared UI components
│
├── pages/                 # Page components
│   ├── CoursePage/       # Course details and lessons
│   │   └── sections/     # Course-specific sections
│   │
│   ├── HomePage/         # Main dashboard
│   │   └── sections/     # Dashboard sections
│   │
│   ├── JobRecommendationsPage/  # Job listings
│   ├── LandingPage/      # Welcome and about pages
│   │   └── sections/     # Landing page sections
│   │
│   └── MentorshipPage/   # Mentorship program
│       └── sections/     # Mentorship sections
│
├── router/               # Application routes
├── App.tsx               # Root component
└── main.tsx              # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/SkillUp-Africa-PWD.git
   cd SkillUp-Africa-PWD
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   The application will be available at [http://localhost:5173](http://localhost:5173)

## 🏗 Build for Production

To create a production build:

```bash
pnpm build
# or
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

To run the linter:

```bash
pnpm lint
# or
npm run lint
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) for details.

## 🙏 Acknowledgments

- [Figma Design](https://www.figma.com/design/uuteWJTAgFY8d3ZO3ZUAsW/SkillUP-Africa?node-id=0-1&node-type=canvas&t=BPny5E650xPtHPIh-0)
- All contributors who have helped shape this project
