import Page1 from './components/pages/Page1';
import Page4 from './components/pages/Page4';
import Page5 from './components/pages/Page5';
import Page6 from './components/pages/Page6';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <div class="topnav">
        <a href="/">Home</a>
        <a href="/page2">Installation</a>
        <a href="/page3">Explanation</a>
        <a href="/page4">Register Form</a>
        <a href="/page5">Conclusion</a>
        <a href="/page6">References</a>
      </div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Page1 />} />
          <Route exact path='/page2' element={<Page2 />} />
          <Route exact path='/page3' element={<Page3 />} />

          <Route exact path='/page4' element={<Page4 />} />
          <Route exact path='/page5' element={<Page5 />} />
          <Route exact path='/page6' element={<Page6 />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
