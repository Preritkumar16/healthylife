import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Dumbbell, 
  Leaf, 
  Brain, 
  Calculator, 
  LayoutDashboard, 
  Bell, 
  Settings, 
  Menu,
  X
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/diet', label: 'Diet', icon: Leaf },
  { path: '/workouts', label: 'Exercise', icon: Dumbbell },
  { path: '/mindfulness', label: 'Mental Health', icon: Brain },
  { path: '/bmi-calculator', label: 'BMI Calculator', icon: Calculator },
];

export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const isDashboard = location.pathname === '/dashboard';

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-display font-extrabold tracking-tight text-vitality-accent">HealthyLife</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  text-sm font-semibold transition-all relative py-2
                  ${isActive ? 'text-vitality-accent' : 'text-on-surface/60 hover:text-vitality-accent'}
                `}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-vitality-accent rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2.5 rounded-full hover:bg-surface-container-low transition-colors text-on-surface/60">
              <Bell size={20} />
            </button>
            <button className="p-2.5 rounded-full hover:bg-surface-container-low transition-colors text-on-surface/60">
              <Settings size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-white shadow-sm overflow-hidden cursor-pointer hover:scale-105 transition-transform">
              <img src="https://i.pravatar.cc/100?img=12" alt="Profile" referrerPolicy="no-referrer" />
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2.5 rounded-xl bg-surface-container-low text-on-surface/60"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-0 top-20 z-40 bg-white border-t border-slate-100 p-6 space-y-4 shadow-xl"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-4 p-4 rounded-2xl transition-all
                  ${isActive ? 'bg-vitality-accent-light text-vitality-accent font-bold' : 'text-on-surface/60 hover:bg-surface-container-low'}
                `}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <span className="text-2xl font-display font-extrabold tracking-tight text-vitality-accent">HealthyLife</span>
            <p className="text-sm text-on-surface/50 leading-relaxed max-w-xs">
              Dedicated to fostering a world where vitality and health are accessible to everyone through technology and empathy.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-on-surface">Resources</h4>
            <ul className="space-y-4 text-sm text-on-surface/50">
              <li><NavLink to="/diet" className="hover:text-vitality-accent transition-colors">Diet Guides</NavLink></li>
              <li><NavLink to="/workouts" className="hover:text-vitality-accent transition-colors">Workout Plans</NavLink></li>
              <li><NavLink to="/mindfulness" className="hover:text-vitality-accent transition-colors">Mental Health</NavLink></li>
              <li><NavLink to="/bmi-calculator" className="hover:text-vitality-accent transition-colors">BMI Calculator</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-on-surface">Company</h4>
            <ul className="space-y-4 text-sm text-on-surface/50">
              <li><a href="#" className="hover:text-vitality-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-vitality-accent transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-vitality-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-on-surface">Newsletter</h4>
            <div className="space-y-4">
              <p className="text-xs text-on-surface/50 leading-relaxed">
                Join our weekly sanctuary digest for exclusive wellness protocols.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-grow bg-surface-container-low rounded-xl px-4 py-2 text-xs outline-none focus:ring-2 focus:ring-vitality-accent/20 transition-all shadow-sm"
                />
                <button className="bg-vitality-accent text-white px-4 py-2 rounded-xl text-xs font-bold hover:scale-105 transition-transform shadow-md">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-on-surface/30 uppercase tracking-widest font-bold">
            © 2024 HealthyLife Sanctuary. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-on-surface/30 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-vitality-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-vitality-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
