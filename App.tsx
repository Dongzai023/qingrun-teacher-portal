import React, { useState } from 'react';
import { ViewState, TabState, OverlayState } from './types';
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import StatsScreen from './components/screens/StatsScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import LeaveApplicationScreen from './components/screens/LeaveApplicationScreen';
import LeaveProgressScreen from './components/screens/LeaveProgressScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('login');
  const [activeTab, setActiveTab] = useState<TabState>('home');
  const [overlay, setOverlay] = useState<OverlayState>('none');

  const handleLogin = () => setView('dashboard');
  
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen 
          onOpenStats={() => setActiveTab('stats')} 
          onOpenLeave={() => setOverlay('leave-application')} 
        />;
      case 'stats':
        return <StatsScreen 
          onOpenLeave={() => setOverlay('leave-application')} 
        />;
      case 'profile':
        return <ProfileScreen 
          onOpenProgress={() => setOverlay('leave-progress')} 
          onLogout={() => setView('login')}
        />;
      default:
        return <HomeScreen 
          onOpenStats={() => setActiveTab('stats')} 
          onOpenLeave={() => setOverlay('leave-application')}
        />;
    }
  };

  if (view === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#fefce8] flex justify-center overflow-hidden">
      <div className="w-full max-w-[428px] h-full min-h-screen relative flex flex-col bg-transparent">
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto pb-24 hide-scrollbar">
          {renderContent()}
        </div>

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Overlays (Simulating Stack Navigation) */}
        {overlay === 'leave-application' && (
          <div className="absolute inset-0 z-50 bg-bg-light animate-in slide-in-from-right duration-300">
            <LeaveApplicationScreen onBack={() => setOverlay('none')} />
          </div>
        )}
        
        {overlay === 'leave-progress' && (
          <div className="absolute inset-0 z-50 bg-bg-light animate-in slide-in-from-right duration-300">
            <LeaveProgressScreen onBack={() => setOverlay('none')} />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default App;