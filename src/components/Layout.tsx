import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import HeaderContainer from '../containers/HeaderBeforeLogin';
import SidebarAfterLogin from '../containers/SidebarAfterLogin';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen">
      {isLoggedIn ? (
        <div className="flex">
          <SidebarAfterLogin />
          <main className="flex-grow ml-64 p-4">
            {children}
          </main>
        </div>
      ) : (
        <div>
          <HeaderContainer />
          <main>
            {children}
          </main>
        </div>
      )}
    </div>
  );
};

export default Layout;
