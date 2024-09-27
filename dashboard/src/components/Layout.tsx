import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

export default function Layout() {
    return (
        <>
            <Router>
                <div className="d-flex vh-100 border">
                    <div className='col-2 p-3 border'>
                        <Sidebar />
                    </div>
                    <div className="col-10 d-flex flex-column border px-3">
                      
                        <div className='py-3 border'>
                            <Navbar />
                        </div>


             
                        <div className="flex-grow-1 pt-3 border">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>

        </>
    )
}
