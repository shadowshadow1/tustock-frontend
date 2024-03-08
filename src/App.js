import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Ecommerce, Investors, AdminProjects, Aggregators, Farmers, Lands, AdminLandLease, AdminChats } from './components';

import { AggregatorHome, AggregatorFarmers, AggregatorLands, AggregatorLandLease, AggregatorProjects, AggregatorChats } from './components';

import { HomePage, InvestorProjects, Investments, InvestorLands, InvestorLandLease, InvestorChats } from './components';

import { LandingPage, OrderBook, Charts, Features } from './components';

import { Button, Footer, Header, Navbar, NavChat, Notification, Sidebar, UserProfile } from './components';

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
              <Route path="/admindash" element={<Ecommerce />}/>
              <Route path="/invetors" element={<Investors />}/>
              <Route path="/projects" element={<AdminProjects />} />
              <Route path="/aggregators" element={<Aggregators />} />
              <Route path='/farmers' element={<Farmers />} />
              <Route path="/lands" element={<Lands />} />
              <Route path="/landlease" element={<AdminLandLease />} />
              <Route path="/chats" element={<AdminChats />} />

              {/* Pages */}
              <Route path='/' element={<LandingPage />} />
              <Route path="/oderbook" element={<OrderBook />} />
              <Route path='/charts' element={<Charts />} />
              <Route path='/features' element={<Features />} />

              {/* Aggregator dashboard */}
              <Route path='/aggregatorHome' element={<AggregatorHome />} />
              <Route path='/farmers' element={<AggregatorFarmers />} />
              <Route path="/lands" element={<AggregatorLands />} />
              <Route path='/projects' element={<AggregatorProjects />} />
              <Route path="/chats" element={<AggregatorChats />} />
              
              {/* Investors */}
              <Route path='/investor' element={<HomePage />} />
              <Route path='/projects' element={<InvestorProjects />} />
              <Route path='/investments' element={<Investments />} />
              <Route path='/lands' element={<InvestorLands />} />
              <Route path='/landlease' element={<InvestorLandLease />} />
              <Route path='/chats' element={<InvestorChats />}/>

            </Routes>
          </div>



        </div>
      </BrowserRouter>
    </div>
  )
}

export default App