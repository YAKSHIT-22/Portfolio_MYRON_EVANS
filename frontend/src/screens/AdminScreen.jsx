import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import createNewCase from './adminScreens/CreateNewCase.jsx'
import NavbarAdmin from '../components/NavbarAdmin.jsx'
import { AddNewBlog } from './adminScreens/AddNewBlog.jsx'

const AdminScreen = () => {
  return (
    <div>
      <NavbarAdmin />
      {/* content */}
      <div className="flex-1">
        <Routes>
          <Route path="/createNewCase" Component={createNewCase} />
          <Route path="/newBlog" Component={AddNewBlog} />
        </Routes>
      </div>
    </div>
  )
}

export default AdminScreen
