import { Route, Routes } from 'react-router-dom'
import CreateNewCase from './screens/AdminScreens/CreateNewCase.jsx'
import Navbar from './components/AdminScreen/Navbar.jsx'
import AddNewBlog from './screens/AdminScreens/AddNewBlog.jsx'
import AddNewProduct from './screens/AdminScreens/AddNewProduct.jsx'
import AdminLogin from './screens/AdminScreens/AdminLogin.jsx'
import Topbar from './components/AdminScreen/Topbar.jsx'
import AddReviewForm from './screens/AdminScreens/AddReviewForm.jsx'
import MyCaseStudies from './screens/AdminScreens/MyBlogs.jsx'
import MyBlogs from './screens/AdminScreens/MyBlogs.jsx'

const AdminScreen = () => {
  return (
    <div
      className={
        'flex h-screen w-full max-w-full items-start justify-start overflow-y-hidden overflow-x-clip scroll-smooth bg-primary font-arial tracking-wider text-primary md:bg-primary'
      }
    >
      <Navbar />

      {/* content */}
      <div className={'h-full w-4/5'}>
        <Topbar />

        <div
          className={'overflow-y-auto px-4 py-6'}
          style={{ height: 'calc(100vh - 87px)' }}
        >
          <Routes>
            <Route path={''} element={<>Dashboard</>} />
            {/* Maybe case studies admin pannel and Blogs admin pannel would be of same style*/}
            <Route path="/case" element={<> Case Studies </>} /> 
            <Route path="/case/add" element={<CreateNewCase />} />
            {/*  */}
            <Route path="/blog" element={<MyBlogs />} />
            <Route path="/blog/add" element={<AddNewBlog />} />
            <Route path="/ecommerce" element={<> Ecommerce Products </>} />
            <Route path="/ecommerce/add" element={<AddNewProduct />} />
            <Route path={'refer'} element={<> Refer Funds </>} />
            <Route path={'/review/add'} element={<AddReviewForm />} />
            <Route path="/login" element={<AdminLogin />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AdminScreen
