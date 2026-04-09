/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomeScreen } from './components/pages/Home';
import { WorkoutsScreen } from './components/pages/Workouts';
import { DietScreen } from './components/pages/Diet';
import { MindfulnessScreen } from './components/pages/Mindfulness';
import { BMICalculatorScreen } from './components/pages/BMICalculator';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/workouts" element={<WorkoutsScreen />} />
          <Route path="/diet" element={<DietScreen />} />
          <Route path="/mindfulness" element={<MindfulnessScreen />} />
          <Route path="/bmi-calculator" element={<BMICalculatorScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
}
