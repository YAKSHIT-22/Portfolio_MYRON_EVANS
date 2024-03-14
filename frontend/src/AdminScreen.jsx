import { Route, Routes } from 'react-router-dom'
import CreateNewCase from './screens/AdminScreens/CreateNewCase.jsx'
import NavbarAdmin from './components/NavbarAdmin.jsx'
import AddNewBlog from './screens/AdminScreens/AddNewBlog.jsx'
import AddNewProduct from './screens/AdminScreens/AddNewProduct.jsx'
import AdminLogin from './screens/AdminScreens/AdminLogin.jsx'

const AdminScreen = () => {
  return (
    <div
      className={
        'flex min-h-screen w-full max-w-full items-center justify-start overflow-x-clip scroll-smooth bg-sm-primary font-arial tracking-wider text-primary md:bg-primary'
      }
    >
      <NavbarAdmin />
      {/* content */}
      <div className="flex-1">
        <Routes>
          <Route path="/case" Component={<CreateNewCase />} />
          <Route path="/blog" Component={<AddNewBlog />} />
          <Route path="/demo" element={<AddNewProduct />} />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
      </div>
    </div>
  )
}

export default AdminScreen
