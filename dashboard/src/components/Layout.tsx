import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import { Container } from 'react-bootstrap';

export default function Layout() {
    return (
        <>
            <Router>
                {/* <div className="d-flex vh-100 border">
                    <div className='col-2 border'>
                        <Sidebar />
                    </div>
                    <div className="col-10 d-flex flex-column border px-3 LayoutBackground">
                      
                        <div className='py-3 border-bottom'>
                            <Navbar />
                        </div>


             
                        <div className="flex-grow-1 pt-3">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
                        </div>
                    </div>
                </div> */}

                <div className="d-flex vh-100">
                    {/* Sidebar Component */}
                    <Sidebar />

                    <div className="flex-grow-1 bg-light">
                        {/* Navbar Component */}
                        <Navbar />

                        {/* Dashboard Content */}
                        <Container fluid className="py-3 px-4" >
                            <Dashboard />
                        </Container>
                    </div>
                </div>
            </Router>

        </>
    )
}
