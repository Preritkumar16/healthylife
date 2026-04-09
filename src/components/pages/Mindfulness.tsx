import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Moon, Sun, Play, Clock, Sparkles, Heart, ArrowRight, Volume2 } from 'lucide-react';

const sessions = [
  { id: 1, title: 'Deep Focus', duration: '10 min', type: 'Meditation', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Stress Release', duration: '15 min', type: 'Breathing', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Good Sleep', duration: '20 min', type: 'Sleep', image: 'https://images.unsplash.com/photo-1511295742364-917e703b5ce0?q=80&w=800&auto=format&fit=crop' },
];

export const MindfulnessScreen: React.FC = () => {
  const [isBreathing, setIsBreathing] = React.useState(false);
  const [breathPhase, setBreathPhase] = React.useState('Inhale');

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBreathing) {
      interval = setInterval(() => {
        setBreathPhase(prev => prev === 'Inhale' ? 'Exhale' : 'Inhale');
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isBreathing]);

  return (
    <div className="space-y-16 pb-20 px-6">
      <div className="space-y-4">
        <h1 className="text-6xl font-display font-extrabold tracking-tight">Mental <span className="text-vitality-accent">Clarity.</span></h1>
        <p className="text-on-surface/50 max-w-2xl leading-relaxed">
          Cultivate presence in a world of noise. Our mindfulness protocols are designed to regulate your nervous system and restore cognitive focus through intentional stillness.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Breathing Widget */}
        <div className="lg:col-span-5">
          <div className="tonal-card p-12 flex flex-col items-center justify-center text-center space-y-10 h-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-vitality-accent/20" />
            
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold">Resonance Breathing</h3>
              <p className="text-sm text-on-surface/40 font-medium">Synchronize your breath to lower cortisol levels.</p>
            </div>

            <div className="relative w-64 h-64 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={breathPhase}
                  initial={{ scale: breathPhase === 'Inhale' ? 0.8 : 1.2, opacity: 0 }}
                  animate={{ scale: breathPhase === 'Inhale' ? 1.2 : 0.8, opacity: 1 }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-vitality-accent/10 border-2 border-vitality-accent/20"
                />
              </AnimatePresence>
              <div className="relative z-10 space-y-2">
                <Wind className="mx-auto text-vitality-accent" size={48} />
                <p className="text-2xl font-display font-extrabold tracking-widest uppercase">{isBreathing ? breathPhase : 'Ready?'}</p>
              </div>
            </div>

            <button 
              onClick={() => setIsBreathing(!isBreathing)}
              className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${
                isBreathing ? 'bg-surface-container-highest text-on-surface' : 'btn-primary'
              }`}
            >
              {isBreathing ? 'End Session' : 'Start Breathing'}
            </button>
          </div>
        </div>

        {/* Featured Audio Session */}
        <div className="lg:col-span-7 space-y-8">
          <div className="relative h-[450px] rounded-[3rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200&auto=format&fit=crop" 
              alt="Meditation" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  FEATURED AUDIO
                </span>
                <span className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                  <Volume2 size={16} /> 128 KBPS HD
                </span>
              </div>
              <h2 className="text-5xl font-display font-extrabold text-white">The Architecture of Silence</h2>
              <p className="text-white/70 text-lg font-medium max-w-md">A guided journey through spatial awareness and deep neural relaxation.</p>
              <div className="flex items-center gap-6">
                <button className="btn-primary px-10 py-4 flex items-center gap-3">
                  Play Now <Play size={20} fill="currentColor" />
                </button>
                <div className="flex items-center gap-2 text-white/50 text-sm font-bold">
                  <Clock size={16} /> 25 MIN
                </div>
              </div>
            </div>
          </div>

          {/* Session Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <div key={session.id} className="tonal-card p-6 space-y-4 group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src={session.image} 
                    alt={session.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={24} fill="currentColor" className="text-white" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-vitality-accent uppercase tracking-widest">{session.type}</p>
                  <h4 className="text-lg font-bold">{session.title}</h4>
                  <p className="text-xs text-on-surface/40 font-medium">{session.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Reflection */}
      <div className="signature-gradient rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Sparkles size={24} />
            <h3 className="text-3xl font-display font-bold">Daily Reflection</h3>
          </div>
          <p className="text-white/70 max-w-xl font-medium">"Quiet the mind, and the soul will speak. Your clarity is your greatest competitive advantage."</p>
        </div>
        <button className="bg-white text-vitality-primary px-10 py-4 rounded-full font-extrabold hover:scale-105 transition-transform shadow-xl flex items-center gap-3">
          Log Journal <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
