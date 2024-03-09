import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import MyWorkScreen from './screens/MyWorkScreen.jsx'
import BlogScreen from './screens/BlogScreen.jsx'
import StoreScreen from './screens/StoreScreen.jsx'
import AffRefScreen from './screens/AffRefScreen.jsx'
import ProductDetailScreen from './screens/ProductDetailScreen.jsx'
import CartScreen from './screens/CartScreen.jsx'
import AdminScreen from './screens/AdminScreen.jsx'
import { AddNewBlog } from './screens/adminScreens/AddNewBlog.jsx'
import BentoGrid1 from './components/GridComps/BentoGrid1.jsx'
import BentoGrid2 from './components/GridComps/BentoGrid2.jsx'
import BentoGrid3 from './components/GridComps/BentoGrid3.jsx'
import BentoGrid4 from './components/GridComps/BentoGrid4.jsx'


function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip scroll-smooth bg-sm-primary font-arial tracking-wider text-primary md:bg-primary">
      <Router>
        <NavBar />

        <div className="w-full font-medium md:pt-6">
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/my-work" element={<MyWorkScreen />} />
            <Route path="/blogs" element={<BlogScreen />} />
            <Route path="/aff-ref" element={<AffRefScreen />} />
            <Route path="/store" element={<StoreScreen />} />
            <Route path="/store/product" element={<ProductDetailScreen />} />
            <Route path="/store/cart" element={<CartScreen />} />
            <Route path="/admin" element={<AdminScreen />} />
            <Route path="/addNewBlog" element={<AddNewBlog />} />

            {/* <Route path='/demo' element={<BentoGrid4 />} /> */}


          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
