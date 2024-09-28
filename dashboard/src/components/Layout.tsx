import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import Loader from './Loader';
import AllRoutes from '../Routes/AllRoutes';

export default function Layout() {


    const [isLoading, setLoading] = useState(true);


    useEffect(() => {

        setLoaderfalse()

    }, [])


    const setLoaderfalse = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }


    return (
        <>

                <div className="d-flex vh-100">              
                    <Sidebar />
                    <div className="flex-grow-1 bg-light" style={{ overflowY: "auto" }}>
                        <div className='navBarContainer'>
                            <Navbar />
                        </div>
                        <Container fluid className="py-3 px-4">
                            { isLoading ? <Loader /> : <AllRoutes/> }
                        </Container>
                    </div>

                    
                </div>
        </>
    )
}
