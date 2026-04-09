import React from 'react';
import { motion } from 'motion/react';
import { Apple, Leaf, Coffee, Moon, Plus, Flame, Clock, Lightbulb, ArrowRight } from 'lucide-react';

const mealPlans = [
  { 
    id: 1, 
    title: 'Avocado & Poached Egg', 
    calories: '450 kcal', 
    time: '15 min', 
    category: 'BREAKFAST',
    desc: 'Sourdough base with chili flakes and seeds.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 2, 
    title: 'Mediterranean Quinoa', 
    calories: '620 kcal', 
    time: '25 min', 
    category: 'LUNCH',
    desc: 'Roasted chickpeas, kale, and lemon-tahini dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop'
  },
];

export const DietScreen: React.FC = () => {
  const [activePlan, setActivePlan] = React.useState('Vegetarian');

  return (
    <div className="space-y-16 pb-20 px-6">
      <div className="space-y-4">
        <h1 className="text-6xl font-display font-extrabold tracking-tight">Nutritional <span className="text-vitality-accent">Harmony.</span></h1>
        <p className="text-on-surface/50 max-w-2xl leading-relaxed">
          Fuel your body with intention. Our science-backed diet plans are designed to nourish your cells and elevate your energy levels through balanced, whole-food nutrition.
        </p>
      </div>

      {/* Plan Toggle */}
      <div className="flex justify-center">
        <div className="bg-surface-container-low p-1.5 rounded-full flex gap-2">
          {['Vegetarian Plan', 'Non-Vegetarian Plan'].map((plan) => (
            <button
              key={plan}
              onClick={() => setActivePlan(plan.split(' ')[0])}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activePlan === plan.split(' ')[0] 
                  ? 'bg-vitality-accent text-white shadow-md' 
                  : 'text-on-surface/40 hover:text-on-surface'
              }`}
            >
              {plan}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Macro Balance Card */}
        <div className="lg:col-span-4">
          <div className="tonal-card p-10 space-y-10 h-full">
            <h3 className="text-2xl font-display font-bold">Macro Balance</h3>
            <p className="text-sm text-on-surface/40 font-medium">Daily target distribution for optimal metabolic health.</p>
            
            <div className="space-y-8">
              {[
                { label: 'Complex Carbs', value: 45, color: 'bg-green-500' },
                { label: 'Lean Proteins', value: 30, color: 'bg-blue-500' },
                { label: 'Healthy Fats', value: 25, color: 'bg-on-surface' },
              ].map((macro) => (
                <div key={macro.label} className="space-y-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-on-surface/60">{macro.label}</span>
                    <span>{macro.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${macro.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${macro.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-slate-100 flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                <Flame size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface/30">Daily Target</p>
                <p className="text-2xl font-display font-bold">2,200 <span className="text-sm font-medium text-on-surface/40">kcal</span></p>
              </div>
            </div>

            {/* Hydration Tracker */}
            <div className="pt-10 border-t border-slate-100 space-y-6">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">Daily Hydration</h4>
                <span className="text-xs font-bold text-vitality-accent">1.8 / 3.0L</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((glass) => (
                  <div 
                    key={glass}
                    className={`h-10 flex-1 rounded-lg transition-all ${
                      glass <= 5 ? 'bg-vitality-accent shadow-sm' : 'bg-surface-container-low'
                    }`}
                  />
                ))}
              </div>
              <p className="text-[10px] text-on-surface/30 uppercase font-bold tracking-widest text-center">8 glasses recommended for your activity level</p>
            </div>
          </div>
        </div>

        {/* Meal Cards Grid */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mealPlans.map((meal) => (
              <div key={meal.id} className="relative h-[400px] rounded-[2.5rem] overflow-hidden group">
                <img 
                  src={meal.image} 
                  alt={meal.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 space-y-3">
                  <span className="bg-vitality-accent/20 backdrop-blur-md text-vitality-accent px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {meal.category}
                  </span>
                  <h4 className="text-2xl font-display font-bold text-white">{meal.title}</h4>
                  <p className="text-white/60 text-sm font-medium">{meal.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dinner - Wide Card */}
          <div className="relative h-[350px] rounded-[2.5rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop" 
              alt="Dinner" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  DINNER
                </span>
                <h4 className="text-4xl font-display font-extrabold text-white">Roasted Squash Velouté</h4>
                <p className="text-white/60 max-w-md font-medium">A light, nutrient-dense soup with toasted pumpkin seeds and artisan herbs.</p>
              </div>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-all border border-white/10">
                View Recipe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Nutritionist's Insight */}
      <div className="bg-surface-container-low rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-vitality-accent">
        <div className="flex items-center gap-8">
          <div className="w-16 h-16 rounded-full bg-vitality-accent flex items-center justify-center text-white shadow-lg">
            <Lightbulb size={32} />
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-display font-bold">Nutritionist's Insight</h4>
            <p className="text-on-surface/50 max-w-2xl leading-relaxed">
              Consistency is superior to perfection. Start with one balanced meal per day and gradually transition your habits. Focus on the colors of your plate; variety ensures a broad spectrum of micronutrients.
            </p>
          </div>
        </div>
        <button className="btn-primary flex items-center gap-3 px-10">
          Consult Expert <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
