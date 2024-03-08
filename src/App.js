import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  const activeMenu=true;
  return (
    <div>
      <BrowserRouter>
        {activeMenu ? (
          <div className='sidebar' >
            Sidebar
          </div>
        ): (
          <div className='sidebar-hidden' >
            Sidebar hidden
          </div>
        ) }

        <div className={`main-content ${activeMenu ? 'margin-left' : 'flex-2'}`}>
            <div className='navbar'>
                Navbar
            </div>
        </div>
        
      </BrowserRouter>
    </div>
  )
}

export default App