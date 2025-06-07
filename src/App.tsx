import { ThemeProvider, useTheme } from 'contexts/ThemeContext';
import Header from 'components/Header'
import { AppRoutes } from 'routes'
import SkillsSection from 'components/SkillsSection';
import ProjectsSection from 'components/ProjectsSection';

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
      </main>
    </div>
  )
}
