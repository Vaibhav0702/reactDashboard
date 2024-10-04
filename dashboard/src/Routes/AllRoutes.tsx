import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Support from '../pages/Support';
import Logout from '../pages/Logout';
import Resource from '../pages/Resource';
import Patient from '../pages/Patient';

export default function AllRoutes() {
  return (
    <>
        
  
                                    <Routes>
                                        <Route path="/" element={<Dashboard />} />
                                        <Route path="/profile" element={<Profile />} />
                                        <Route path="/settings" element={<Settings />} />
                                        <Route path="/support" element={<Support />} />
                                        <Route path="/logout" element={<Logout />} />
                                        <Route path="/resource" element={<Resource />} />
                                        <Route path="/patient" element={<Patient />} />
                                    </Routes>
        
    </>
  )
}
