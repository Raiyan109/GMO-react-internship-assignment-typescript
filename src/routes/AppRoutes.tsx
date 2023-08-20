// routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SecondPage from '../components/SecondPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second-page" element={<SecondPage />} />

    </Routes>
  );
};

export default AppRoutes;
