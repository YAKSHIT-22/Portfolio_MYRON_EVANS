import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import createNewCase from './adminScreens/createNewCase'
import NavbarAdmin from '../components/NavbarAdmin'


const AdminScreen = () => {
    return (
        <div>
            <NavbarAdmin />
            {/* content */}
            <div className='flex-1'>

                <Routes>
                    <Route path='/createNewCase' Component={createNewCase} />
                </Routes>


            </div>
        </div>
    )
}

export default AdminScreen