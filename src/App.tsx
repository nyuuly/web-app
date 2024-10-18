import React, { Suspense } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes isLoggedIn={!!user} />
      </Suspense>
      {!user && <Footer />}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
