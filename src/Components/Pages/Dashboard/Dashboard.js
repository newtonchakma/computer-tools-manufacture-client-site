import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content text-center pt-5 mt-4">
        <h2 className=" font-medium text-4xl font-bold  mb-4 text-blue-600 uppercase">wellcome to your dashboard</h2>
          <Outlet></Outlet>
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-44 bg-base-100 text-base-content">
         
            <li><Link to='/dashboard'>My Order</Link></li>
            <li><Link to='/dashboard/review'>Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;