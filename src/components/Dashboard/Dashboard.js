import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile ">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle " />
          

      <div class="drawer-content px-4 ">
              <div className="flex justify-between">
                  <h1 className="text-3xl text-primary">Dashboard</h1>

     <label
            htmlFor="my-drawer-2"
            tabIndex="0"
            className="btn btn-ghost lg:hidden text-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
       

     
              </div>
              <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class=" menu p-4 overflow-y-auto w-60 bg-[#fafdfdd8] text-base-content font-semibold">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Analysis</Link>
          </li>
          <li>
            <Link to="/dashboard/booking">My Bookings</Link>
          </li>
          <li>
            <Link to="/dashboard/addImages">Upload Images</Link>
          </li>
          <li>
            <Link to="/dashboard/addEvents">Create Events</Link>
          </li>
          <li>
            <Link to="/dashboard/manageUser">Manage Users</Link>
          </li>
          <li>
            <Link to="/dashboard/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
