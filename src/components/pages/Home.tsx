import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Heart, 
  Zap, 
  Shield, 
  Play, 
  CheckCircle2, 
  BarChart3, 
  Users2,
  Dumbbell,
  Wind,
  Moon
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const HomeScreen: React.FC = () => {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] rounded-[3rem] overflow-hidden flex items-center justify-center text-center px-6">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop" 
          alt="Forest" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 max-w-4xl space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-extrabold text-white leading-[1.1] tracking-tight text-balance"
          >
            Your Health, <br />
            <span className="text-vitality-accent">Your Responsibility</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium"
          >
            Elevate your lifestyle with personalized insights, professional wellness guides, and a community built on the pillars of vital living.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4"
          >
            <NavLink to="/dashboard" className="btn-primary text-lg px-10 py-4">Start Your Journey</NavLink>
            <button className="btn-secondary bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20 text-lg px-10 py-4">Explore Features</button>
          </motion.div>
        </div>
      </section>

      {/* Pillars of Vitality */}
      <section className="space-y-16 px-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-1 bg-vitality-accent rounded-full" />
          <h2 className="text-4xl font-display font-extrabold tracking-tight">The Pillars of Vitality</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Nutritional Balance */}
          <div className="lg:col-span-2 relative h-[450px] rounded-[2.5rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop" 
              alt="Salad" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 space-y-4">
              <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                <Heart size={16} /> Precision Nutrition
              </div>
              <h3 className="text-4xl font-display font-extrabold text-white">Nutritional Balance</h3>
              <p className="text-white/70 max-w-md font-medium">Personalized meal plans designed by experts to fuel your body with clean, organic energy for peak performance.</p>
            </div>
          </div>

          {/* Functional Exercise */}
          <div className="tonal-card flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl signature-gradient flex items-center justify-center text-white shadow-lg">
                <Dumbbell size={28} />
              </div>
              <h3 className="text-3xl font-display font-extrabold">Functional Exercise</h3>
              <p className="text-on-surface/50 leading-relaxed">Science-backed workout routines adapted to your goals, from strength training to mobility flows.</p>
            </div>
            <NavLink to="/workouts" className="flex items-center gap-2 text-vitality-primary font-bold hover:gap-4 transition-all mt-8">
              View Workouts <ArrowRight size={20} />
            </NavLink>
          </div>

          {/* Mental Clarity */}
          <div className="tonal-card flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                <Wind size={28} />
              </div>
              <h3 className="text-3xl font-display font-extrabold">Mental Clarity</h3>
              <p className="text-on-surface/50 leading-relaxed">Guided meditations and cognitive exercises to reduce stress and improve daily focus.</p>
            </div>
            <NavLink to="/mindfulness" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all mt-8">
              Start Journal <ArrowRight size={20} />
            </NavLink>
          </div>

          {/* Optimized Recovery */}
          <div className="lg:col-span-2 relative h-[450px] rounded-[2.5rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=1200&auto=format&fit=crop" 
              alt="Bedroom" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 space-y-4">
              <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                <Moon size={16} /> Restorative Sleep
              </div>
              <h3 className="text-4xl font-display font-extrabold text-white">Optimized Recovery</h3>
              <p className="text-white/70 max-w-md font-medium">Track your circadian rhythms and unlock insights for deeper, more restorative rest cycles every night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HealthyLife Sanctuary? */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
        <div className="space-y-12">
          <h2 className="text-5xl font-display font-extrabold tracking-tight">
            Why <span className="text-vitality-accent">HealthyLife</span> <br /> Sanctuary?
          </h2>
          
          <div className="space-y-10">
            {[
              { icon: CheckCircle2, title: 'Evidence-Based Approach', desc: 'Our protocols are designed by medical professionals and wellness experts using clinical research data.', color: 'bg-green-100 text-green-600' },
              { icon: BarChart3, title: 'Real-Time Biometrics', desc: 'Seamlessly sync with your wearable devices for a 360-degree view of your vital health metrics.', color: 'bg-blue-100 text-blue-600' },
              { icon: Users2, title: 'Empathetic Community', desc: 'Join thousands of others on the same path, sharing progress and motivating one another daily.', color: 'bg-teal-100 text-teal-600' },
            ].map((feature, i) => (
              <div key={i} className="flex gap-6">
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex-shrink-0 flex items-center justify-center`}>
                  <feature.icon size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">{feature.title}</h4>
                  <p className="text-on-surface/50 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop" 
            alt="Person using phone" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Featured Experts */}
      <section className="space-y-16 px-6">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-display font-extrabold tracking-tight">Guided by <span className="serif italic font-light text-vitality-primary">World-Class</span> Experts</h2>
          <p className="text-on-surface/50 max-w-2xl mx-auto font-medium">Our protocols are curated by the industry's leading minds in physiology, nutrition, and mental performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'Dr. Julian Vance', role: 'Chief Medical Officer', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop', bio: 'Specializing in metabolic health and longevity protocols.' },
            { name: 'Sarah Jenkins', role: 'Head of Nutrition', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop', bio: 'Expert in plant-based performance and gut microbiome health.' },
            { name: 'Marcus Thorne', role: 'Performance Coach', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop', bio: 'Former Olympic trainer focused on functional strength and mobility.' },
          ].map((expert, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="tonal-card p-0 overflow-hidden group"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8 space-y-2">
                <h4 className="text-2xl font-display font-bold">{expert.name}</h4>
                <p className="text-vitality-accent text-xs font-bold uppercase tracking-widest">{expert.role}</p>
                <p className="text-on-surface/40 text-sm leading-relaxed pt-2">{expert.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6">
        <div className="bg-surface-container-low rounded-[4rem] p-16 md:p-24 flex flex-col lg:flex-row items-center gap-16 border border-outline-variant">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-5xl font-display font-extrabold tracking-tight">The <span className="serif italic font-light">Weekly</span> Sanctuary</h2>
            <p className="text-on-surface/50 max-w-lg font-medium">Join 50,000+ subscribers receiving science-backed wellness protocols and exclusive sanctuary updates every Sunday.</p>
          </div>
          <div className="flex-1 w-full max-w-md">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white rounded-2xl px-8 py-5 outline-none focus:ring-2 focus:ring-vitality-accent/20 transition-all font-medium shadow-sm"
              />
              <button className="btn-primary whitespace-nowrap px-10">Subscribe</button>
            </form>
            <p className="text-[10px] text-on-surface/30 mt-4 text-center lg:text-left uppercase font-bold tracking-widest">No spam. Only vitality. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-6 signature-gradient rounded-[4rem] p-16 md:p-24 text-center text-white space-y-10">
        <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight">Ready to transform your life?</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">Join HealthyLife today and get your first 30 days of premium access completely free.</p>
        <NavLink to="/dashboard" className="inline-block bg-white text-vitality-primary px-12 py-5 rounded-full font-extrabold text-xl hover:scale-105 transition-transform shadow-xl">
          Get Started Now
        </NavLink>
      </section>
    </div>
  );
};
