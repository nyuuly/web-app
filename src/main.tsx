import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import i18n from './i18n/i18n.ts'

function Root() {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    i18n.on('initialized', () => {
      setIsI18nInitialized(true);
    });
  }, []);

  if (!isI18nInitialized) {
    return <div>Loading Nyuuly with your preferred language...</div>;
  }

  return (
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);