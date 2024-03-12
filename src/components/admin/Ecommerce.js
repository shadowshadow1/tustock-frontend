import React from 'react'
import './adminStyles/Ecommerce.css'

const Ecommerce = () => {
  const activeMenu=true;

  return (
   
    
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


    </div>
  )
}

export default Ecommerce