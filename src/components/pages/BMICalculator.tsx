import React from 'react';
import { motion } from 'motion/react';
import { Info, Lightbulb, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const BMICalculatorScreen: React.FC = () => {
  const [height, setHeight] = React.useState<string>('170');
  const [weight, setWeight] = React.useState<string>('70');
  const [bmi, setBmi] = React.useState<number | null>(22.4);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(parseFloat((w / (h * h)).toFixed(1)));
    }
  };

  const getBMICategory = (val: number) => {
    if (val < 18.5) return { label: 'Underweight', color: 'text-blue-500', bg: 'bg-blue-500' };
    if (val < 25) return { label: 'Normal Range', color: 'text-vitality-accent', bg: 'bg-vitality-accent' };
    if (val < 30) return { label: 'Overweight', color: 'text-yellow-500', bg: 'bg-yellow-500' };
    return { label: 'Obese', color: 'text-red-500', bg: 'bg-red-500' };
  };

  const category = bmi ? getBMICategory(bmi) : null;

  return (
    <div className="space-y-16 pb-20 px-6">
      <div className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-vitality-accent">Vital Statistics</span>
        <h1 className="text-6xl font-display font-extrabold tracking-tight">Measure Your <br /> <span className="text-vitality-accent">Vitality</span></h1>
        <p className="text-on-surface/50 max-w-xl leading-relaxed">
          Body Mass Index (BMI) is a starting point for understanding your physical composition. Use it as a guide in your sanctuary of health.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Calculator Card */}
        <div className="lg:col-span-7 space-y-8">
          <div className="tonal-card p-12 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-sm font-bold text-on-surface/60">Height (cm)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-xl font-bold outline-none focus:ring-2 focus:ring-vitality-accent/20 transition-all"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface/30 font-bold">CM</span>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-on-surface/60">Weight (kg)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-xl font-bold outline-none focus:ring-2 focus:ring-vitality-accent/20 transition-all"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface/30 font-bold">KG</span>
                </div>
              </div>
            </div>

            <button 
              onClick={calculateBMI}
              className="w-full btn-primary py-5 text-xl"
            >
              Calculate My BMI
            </button>

            {bmi && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8"
              >
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface/30 mb-1">Your BMI</p>
                    <p className="text-6xl font-display font-extrabold text-vitality-primary">{bmi}</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className={`text-2xl font-display font-bold ${category?.color}`}>{category?.label}</h3>
                    <p className="text-sm text-on-surface/50 max-w-[250px]">
                      Great job! Your weight is in the healthy range for your height. Maintain this with balanced nutrition and movement.
                    </p>
                  </div>
                </div>
                <div className={`w-16 h-16 rounded-full ${category?.bg} flex items-center justify-center text-white shadow-lg`}>
                  <CheckCircle2 size={32} />
                </div>
              </motion.div>
            )}

            {/* Classification Bar */}
            <div className="space-y-6 pt-6">
              <h4 className="font-bold text-on-surface/60">BMI Classifications</h4>
              <div className="h-3 w-full rounded-full overflow-hidden flex">
                <div className="h-full bg-blue-400" style={{ width: '18.5%' }} />
                <div className="h-full bg-vitality-accent" style={{ width: '25%' }} />
                <div className="h-full bg-yellow-400" style={{ width: '25%' }} />
                <div className="h-full bg-red-400" style={{ width: '31.5%' }} />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-on-surface/30 uppercase tracking-widest">
                <span>&lt; 18.5 Underweight</span>
                <span>18.5 - 24.9 Normal</span>
                <span>25 - 29.9 Overweight</span>
                <span>30+ Obese</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-video lg:aspect-square group">
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop" 
              alt="Workout" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-vitality-primary/60 flex items-center justify-center p-12 text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-white italic leading-relaxed">
                "The first wealth is health. It is the foundation of every dream you carry."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="tonal-card p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
                <Info size={20} />
              </div>
              <h4 className="text-lg font-bold">What is BMI?</h4>
              <p className="text-sm text-on-surface/50 leading-relaxed">
                BMI is a person's weight in kilograms divided by the square of height in meters. It provides an assessment of body fatness.
              </p>
            </div>
            <div className="tonal-card p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <Lightbulb size={20} />
              </div>
              <h4 className="text-lg font-bold">Did you know?</h4>
              <p className="text-sm text-on-surface/50 leading-relaxed">
                BMI doesn't distinguish between muscle and fat. Athletes often have higher BMIs due to muscle mass rather than excess body fat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Path */}
      {bmi && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="signature-gradient rounded-[3rem] p-12 text-white"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Sparkles size={24} />
                <h3 className="text-3xl font-display font-extrabold">Your Recommended Path</h3>
              </div>
              <p className="text-white/70 max-w-2xl font-medium text-lg">
                Based on your BMI of {bmi}, we recommend a focus on {bmi < 25 ? 'Strength Building' : 'Metabolic Conditioning'} to optimize your body composition and long-term vitality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <NavLink 
                to={bmi < 25 ? "/workouts" : "/diet"} 
                className="bg-white text-vitality-primary px-10 py-4 rounded-full font-extrabold hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-3"
              >
                Start {bmi < 25 ? 'Strength' : 'Nutrition'} Plan <ArrowRight size={20} />
              </NavLink>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-extrabold hover:bg-white/20 transition-all">
                Consult Specialist
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
