import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Database, 
  Lightbulb, 
  FileText, 
  Settings, 
  RotateCw, 
  Calendar,
  Activity,
  Flame,
  Footprints,
  Timer,
  Heart,
  TrendingUp,
  TrendingDown,
  Sparkles,
  Search,
  ChevronRight,
  Trophy,
  Moon,
  Signal,
  Menu,
  X
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const data = [
  { name: 'MON', value: 400 },
  { name: 'TUE', value: 600 },
  { name: 'WED', value: 800 },
  { name: 'THU', value: 500 },
  { name: 'FRI', value: 700 },
  { name: 'SAT', value: 300 },
  { name: 'SUN', value: 900 },
];

export const DashboardScreen: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex bg-[#F8FAFB] min-h-screen text-slate-800 font-body relative">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-[#0F172A]/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-100 flex flex-col p-6 z-50 transition-transform duration-300 transform
        lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between lg:block mb-10">
          <NavLink to="/" className="block hover:opacity-80 transition-opacity">
            <h2 className="text-xl font-display font-extrabold text-vitality-accent">HealthyLife</h2>
            <div className="mt-4 hidden lg:block">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Vitality API</p>
              <p className="text-[10px] text-slate-300">PREMIUM SAAS EDITION</p>
            </div>
          </NavLink>
          <button 
            className="lg:hidden p-2 text-slate-400 hover:text-slate-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-grow space-y-1">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: Database, label: 'API Data' },
            { icon: Lightbulb, label: 'Insights' },
            { icon: FileText, label: 'Reports' },
            { icon: Settings, label: 'Settings' },
          ].map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                item.active 
                  ? 'bg-[#F0FDF4] text-vitality-accent shadow-sm' 
                  : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Pro Plan Card - Only visible on larger sidebars or full screen mobile */}
        <div className="mt-auto pt-6">
          <div className="p-6 rounded-2xl bg-[#006B54] text-white space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">PRO PLAN</p>
            <p className="text-sm font-bold leading-snug">Unlock advanced real-time predictive analytics.</p>
            <button className="w-full bg-white text-[#006B54] py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 space-y-6 md:space-y-8 min-w-0 overflow-hidden">
        {/* Mobile Top Bar */}
        <div className="flex lg:hidden items-center justify-between mb-2">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-500"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
              <img src="https://i.pravatar.cc/100?img=12" alt="Profile" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold">Health API Dashboard</h1>
            <p className="text-slate-400 text-sm mt-1">Real-time biometrics and telemetry processing.</p>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-lg border border-slate-100 text-xs md:text-sm font-semibold text-slate-500 shadow-sm">
              <Calendar size={14} className="md:w-4 md:h-4" />
              <span>Oct 24, 2023</span>
            </div>
            <button className="flex-shrink-0 flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2 bg-[#006B54] text-white rounded-lg text-xs md:text-sm font-bold shadow-lg shadow-green-900/10 hover:bg-[#005a47] transition-all group">
              <RotateCw size={14} className="md:w-4 md:h-4 group-hover:rotate-180 transition-transform duration-500" />
              Sync Now
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Flame, color: 'bg-emerald-50 text-emerald-500', label: 'CALORIES TODAY', value: '2,482', unit: 'kcal', trend: '+12%', trendUp: true },
            { icon: Footprints, color: 'bg-blue-50 text-blue-500', label: 'STEPS', value: '11,204', unit: 'steps', trend: '+8%', trendUp: true, progress: 80 },
            { icon: Timer, color: 'bg-slate-50 text-slate-500', label: 'ACTIVE MINUTES', value: '54', unit: 'mins', trend: '-3%', trendUp: false },
            { icon: Heart, color: 'bg-red-50 text-red-500', label: 'HEALTH SCORE', value: '94', unit: '/ 100', status: 'Optimum', statusColor: 'text-emerald-500 bg-emerald-50' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`p-3 rounded-2xl ${stat.color}`}>
                  <stat.icon size={20} />
                </div>
                {stat.trend && (
                  <div className={`flex items-center gap-1 text-[10px] font-bold px-3 py-1 rounded-full ${stat.trendUp ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-500'}`}>
                    {stat.trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {stat.trend}
                  </div>
                )}
                {stat.status && (
                  <div className={`flex items-center gap-1 text-[10px] font-bold px-3 py-1 rounded-full ${stat.statusColor}`}>
                    <Heart size={10} fill="currentColor" />
                    {stat.status}
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 tracking-widest">{stat.label}</p>
                <div className="flex items-baseline gap-1">
                  <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
                  <span className="text-xs text-slate-300 font-bold">{stat.unit}</span>
                </div>
              </div>
              {/* Simple progress indicator */}
              <div className="mt-4 h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: stat.progress ? `${stat.progress}%` : i === 0 ? '60%' : i === 1 ? '70%' : i === 2 ? '40%' : '94%' }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`h-full ${i === 0 ? 'bg-emerald-400' : i === 1 ? 'bg-blue-400' : i === 2 ? 'bg-slate-300' : 'bg-emerald-400'}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Middle Section: Chart + Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Card */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h4 className="text-xl font-bold italic">Activity Over Time</h4>
                <p className="text-xs text-slate-400 font-medium">Caloric expenditure vs Intake trends</p>
              </div>
              <div className="flex bg-slate-50 p-1 rounded-xl">
                <button className="px-5 py-1.5 rounded-lg text-xs font-bold bg-white shadow-sm">Daily</button>
                <button className="px-5 py-1.5 rounded-lg text-xs font-bold text-slate-400">Weekly</button>
              </div>
            </div>
            
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }} 
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }} 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[12, 12, 12, 12]} barSize={40}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 6 ? '#D1FAE5' : index === 2 ? '#065F46' : '#F1F5F9'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Smart Insights Card */}
          <div className="bg-[#0A2688] p-8 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between">
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles size={120} />
            </div>

            <div className="relative z-10 space-y-8 text-center pt-4">
              <div className="flex items-center justify-center gap-2">
                <Sparkles size={20} className="text-blue-300" />
                <h4 className="text-xl font-display font-bold tracking-tight">Smart Insights</h4>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-sm leading-relaxed text-blue-50">
                  <p>Your metabolic rate is peaking! You burned <span className="font-extrabold text-white underline underline-offset-4 decoration-emerald-400">20% more calories</span> today than yesterday.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-sm leading-relaxed text-blue-50">
                  <p>Recommended: Increase your water intake by <span className="font-extrabold text-white">500ml</span> to optimize recovery after that jog.</p>
                </div>
              </div>
            </div>

            <button className="relative z-10 w-full mt-10 bg-emerald-300 text-teal-900 py-4 rounded-2xl font-extrabold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-900/20 active:scale-95">
              Ask Health AI
            </button>
          </div>
        </div>

        {/* Bottom Section: Challenges + Vitality Goal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Challenges Card */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold italic">Active Challenges</h4>
              <Trophy size={20} className="text-emerald-500" />
            </div>

            <div className="space-y-6">
              {[
                { label: '10k Steps Daily', current: '8,200', target: '10,000', progress: 82, sub: 'DAILY PROGRESS', icon: Footprints, color: 'bg-teal-50 text-teal-600' },
                { label: 'Morning Meditation', current: '2', target: '5 days', progress: 40, sub: 'WEEKLY GOAL', icon: Timer, color: 'bg-emerald-50 text-emerald-600' },
                { label: 'Hydration Hero', current: '1.8L', target: '3L', progress: 60, sub: '3L TARGET', icon: Activity, color: 'bg-sky-50 text-sky-600' },
              ].map((challenge, i) => (
                <div key={i} className="p-6 bg-slate-50/50 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl ${challenge.color}`}>
                        <challenge.icon size={20} />
                      </div>
                      <span className="font-bold">{challenge.label}</span>
                    </div>
                    <span className="text-sm font-extrabold text-emerald-600">{challenge.progress}%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${challenge.progress}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-[#006B54]"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>{challenge.sub}</span>
                      <span>{challenge.current} / {challenge.target}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vitality Goal Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-between space-y-8">
            <h4 className="text-xl font-bold italic w-full text-left">Your Vitality Goal</h4>
            
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  fill="transparent"
                  stroke="#F1F5F9"
                  strokeWidth="12"
                />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="80"
                  fill="transparent"
                  stroke="#006B54"
                  strokeWidth="12"
                  strokeDasharray={2 * Math.PI * 80}
                  initial={{ strokeDashoffset: 2 * Math.PI * 80 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 80 * (1 - 0.7) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-display font-extrabold italic tracking-tighter">70%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">WEIGHT LOSS</span>
              </div>
            </div>

            <div className="w-full space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Daily Target</span>
                <span className="font-bold">2,100 kcal</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Intake</span>
                <span className="font-bold">1,480 kcal</span>
              </div>
            </div>

            <button className="w-full border-2 border-[#006B54] text-[#006B54] py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors">
              Update Target
            </button>
          </div>
        </div>

        {/* Macros Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
          {[
            { label: 'PROTEIN', percent: 45, value: '112g / 250g', color: 'text-emerald-500', stroke: '#10B981', bg: '#065F46' },
            { label: 'CARBOHYDRATES', percent: 30, value: '185g / 600g', color: 'text-blue-500', stroke: '#3B82F6', bg: '#1E40AF' },
            { label: 'HEALTHY FATS', percent: 25, value: '42g / 180g', color: 'text-slate-500', stroke: '#64748B', bg: '#1E293B' },
          ].map((macro, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="32" cy="32" r="28" fill="transparent" stroke="#F1F5F9" strokeWidth="6" />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="transparent"
                    stroke={macro.stroke}
                    strokeWidth="6"
                    strokeDasharray={2 * Math.PI * 28}
                    initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - macro.percent / 100) }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-xs font-extrabold">{macro.percent}%</span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{macro.label}</p>
                <p className="text-lg font-bold">{macro.value}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Top Navbar elements moved to main for layout styling */}
      <div className="hidden lg:flex fixed top-6 right-8 items-center gap-6 z-50 pointer-events-none">
        <div className="pointer-events-auto bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 shadow-sm">
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-xs font-bold text-emerald-800">Live Status</span>
        </div>
        <button className="pointer-events-auto w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm text-slate-400 hover:text-slate-600 transition-colors">
          <Signal size={18} />
        </button>
        <button className="pointer-events-auto w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm text-slate-400 hover:text-slate-600 transition-colors">
          <Moon size={18} />
        </button>
        <div className="pointer-events-auto w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform">
          <img src="https://i.pravatar.cc/100?img=12" alt="Profile" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  );
};
