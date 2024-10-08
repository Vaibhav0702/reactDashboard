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
        }, 1500)
    }


    return (
        <>

                <div className="d-flex vh-100">              
                    <Sidebar />
                    <div className="flex-grow-1 bg-light d-flex flex-column" style={{ overflowY: "auto" }}>
                        <div className='navBarContainer'>
                            <Navbar />
                        </div>
                        <Container fluid className="p-3 flex-grow-1">
                            { isLoading ? <Loader /> : <AllRoutes/> }
                        </Container>
                    </div>

                    
                </div>
        </>
    )
}
