import { ThemeProvider, useTheme } from 'contexts/ThemeContext';
import Header from 'components/Header'
import { AppRoutes } from 'routes'
import SkillsSection from 'components/skills-section/SkillsSection';
import ProjectsSection from 'components/projects-section/ProjectsSection';
import ExperienceSection from 'components/experience-section/ExperienceSection';

function App() {

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App

const AppContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <AppRoutes />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
    </div>
  )
}
