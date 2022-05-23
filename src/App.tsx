import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  RegularSeason,
  CountdownCup,
  KickoffClash,
  MidseasonMadness,
  SummerShowdown
} from './components';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RegularSeason />}></Route>{' '}
        <Route path='kickoff-clash' element={<KickoffClash />}></Route>
        <Route path='midseason-madness' element={<MidseasonMadness />}></Route>
        <Route path='summer-showdown' element={<SummerShowdown />}></Route>
        <Route path='countdown-cup' element={<CountdownCup />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
