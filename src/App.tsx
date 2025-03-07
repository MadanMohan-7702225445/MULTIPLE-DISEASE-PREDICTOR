import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './pages/home';
import HeartDiseasePrediction from './pages/heart-disease';
import DiabetesPrediction from './pages/diabetes';
import LiverDiseasePrediction from './pages/liver-disease';
import KidneyDiseasePrediction from './pages/kidney-disease';
import HistoryPage from './pages/history';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict/heart" element={<HeartDiseasePrediction />} />
          <Route path="/predict/diabetes" element={<DiabetesPrediction />} />
          <Route path="/predict/liver" element={<LiverDiseasePrediction />} />
          <Route path="/predict/kidney" element={<KidneyDiseasePrediction />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;