import React from 'react'
import Sidebar from './Sidebar'
import Center from './Center'
import Orders from './Orders'

const Container = () => {
  
  return (
    <div>
      <div className="container flex">
        <Sidebar />
        <div className='flex gap-20'>
          <Center />
          <Orders />
          
        </div>
      </div>
    </div>
  );
}

export default Container