import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  const activeMenu=true;
  return (
    <div>
      <BrowserRouter>
        <div className='main'>
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



          <div>
            <Routes>
             {/* Admin dashboard */}
              <Route path="/admindash" element="Ecommerce" />
              <Route path="/invetors" element="Investors" />
              <Route path="/projects" element="Projects" />
              <Route path="/aggregators" element="Aggregators" />
              <Route path='/farmers' element='Farmers' />
              <Route path="/lands" element="Lands" />
              <Route path="/chats" element="Chat" />

              {/* Pages */}
              <Route path='/' element='LandingPage' />
              <Route path="/oderbook" element="OrderBook" />
              <Route path='/charts' element="Chart" />
              <Route path='/features' element="Features" />

              {/* Aggregator dashboard */}
              <Route path='/aggregatorDash' element='AggregatorDash' />
              <Route path='/farmers' element='Farmers' />
              <Route path="/lands" element="Lands" />
              <Route path='/projects' element='Projects' />
              <Route path="/chats" element="Chat" />
              
              {/* Investors */}
              <Route path='/investor' element='HomePage' />
              <Route path='/projects' element='Projects' />
              <Route path='/investments' element='Investments' />
              <Route path='/lands' element='Lands' />
              <Route path='/landlease' element='LandLease' />
              <Route path='/chats' element='Chats' />

            </Routes>
          </div>



        </div>
      </BrowserRouter>
    </div>
  )
}

export default App