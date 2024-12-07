import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Interventions } from './pages/Interventions';
import { Clients } from './pages/Clients';
import { Maps } from './pages/Maps';
import { Reports } from './pages/Reports';
import { Statistics } from './pages/Statistics';
import { Notifications } from './pages/Notifications';
import { Settings } from './pages/Settings';
import { useThemeStore } from './store/themeStore';

function App() {
  const { theme } = useThemeStore();

  return (
    <Router>
      <div className={theme}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Sidebar />
          <Header />
          <main className="ml-64 pt-16">
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/interventions" element={<Interventions />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;