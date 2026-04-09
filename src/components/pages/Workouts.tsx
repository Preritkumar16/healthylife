import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Play, Clock, Flame, Dumbbell, Zap, ArrowRight, Star } from 'lucide-react';

const workoutCategories = ['All Workouts', 'Strength', 'Yoga', 'HIIT', 'Mobility'];

const workouts = [
  { 
    id: 1, 
    title: 'Full Body Power', 
    duration: '45 min', 
    intensity: 'High', 
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    rating: 4.9
  },
  { 
    id: 2, 
    title: 'Morning Vinyasa', 
    duration: '30 min', 
    intensity: 'Medium', 
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    rating: 4.8
  },
  { 
    id: 3, 
    title: 'Core Stability', 
    duration: '20 min', 
    intensity: 'Medium', 
    category: 'Mobility',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
    rating: 4.7
  },
  { 
    id: 4, 
    title: 'HIIT Burnout', 
    duration: '25 min', 
    intensity: 'High', 
    category: 'HIIT',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    rating: 5.0
  },
];

export const WorkoutsScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('All Workouts');

  return (
    <div className="space-y-16 pb-20 px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-display font-extrabold tracking-tight">Movement <span className="text-vitality-accent">Library.</span></h1>
          <p className="text-on-surface/50 max-w-xl leading-relaxed">
            Discover professional-grade workout protocols tailored to your anatomy. From high-intensity power sessions to restorative mobility flows.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30" size={20} />
            <input 
              type="text" 
              placeholder="Search protocols..." 
              className="bg-surface-container-low rounded-2xl pl-12 pr-6 py-4 outline-none focus:ring-2 focus:ring-vitality-accent/20 transition-all w-full md:w-64 font-medium"
            />
          </div>
          <button className="p-4 bg-surface-container-low rounded-2xl text-on-surface/60 hover:bg-surface-container-highest transition-all">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {workoutCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              activeCategory === cat 
                ? 'bg-vitality-accent text-white shadow-md' 
                : 'bg-surface-container-low text-on-surface/40 hover:text-on-surface'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Workout */}
      <section className="relative h-[500px] rounded-[3rem] overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop" 
          alt="Featured Workout" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-2xl space-y-8">
          <div className="flex items-center gap-3">
            <span className="bg-vitality-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              FEATURED SESSION
            </span>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={14} fill="currentColor" />
              <span className="text-xs font-bold text-white">5.0</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-extrabold text-white leading-tight">Elite Strength <br /> Conditioning</h2>
          <p className="text-white/70 text-lg font-medium leading-relaxed">
            A comprehensive 60-minute protocol focusing on compound movements and metabolic conditioning for total body transformation.
          </p>
          <div className="flex items-center gap-10 text-white/80 font-bold uppercase tracking-widest text-xs">
            <span className="flex items-center gap-3"><Clock size={18} /> 60 MIN</span>
            <span className="flex items-center gap-3"><Flame size={18} /> 550 KCAL</span>
            <span className="flex items-center gap-3"><Zap size={18} /> ADVANCED</span>
          </div>
          <button className="btn-primary w-fit px-12 py-5 text-lg flex items-center gap-4">
            Start Session <Play size={20} fill="currentColor" />
          </button>
        </div>
      </section>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {workouts.map((workout) => (
          <motion.div 
            key={workout.id}
            whileHover={{ y: -10 }}
            className="tonal-card group cursor-pointer overflow-hidden rounded-[2.5rem]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={workout.image} 
                alt={workout.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                <Star size={12} fill="currentColor" className="text-yellow-400" />
                {workout.rating}
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="text-xl font-display font-bold group-hover:text-vitality-primary transition-colors">{workout.title}</h4>
                <span className="text-[10px] font-bold text-on-surface/30 uppercase tracking-widest">{workout.category}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-on-surface/40 uppercase tracking-widest">
                <span className="flex items-center gap-2"><Clock size={14} /> {workout.duration}</span>
                <span className="flex items-center gap-2"><Zap size={14} /> {workout.intensity}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Motivation Banner */}
      <div className="signature-gradient rounded-[3rem] p-12 flex flex-col lg:flex-row items-center justify-between gap-10 text-white">
        <div className="space-y-4 text-center lg:text-left">
          <h3 className="text-4xl font-display font-extrabold">Personalized Training</h3>
          <p className="text-white/70 max-w-xl font-medium">Get a custom workout plan generated by our AI based on your goals, equipment, and schedule.</p>
        </div>
        <button className="bg-white text-vitality-primary px-10 py-4 rounded-full font-extrabold hover:scale-105 transition-transform shadow-xl flex items-center gap-3">
          Generate My Plan <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
