

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../Pages/LandslidesMainPage/Main';

const Approute: React.FC = () => {
  return (
    <Router>
       <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default Approute