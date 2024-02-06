import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomeScreen from './screens/HomeScreen'
import MyWorkScreen from './screens/MyWorkScreen'
import BlogScreen from './screens/BlogScreen'
import StoreScreen from './screens/StoreScreen'
import AffRefScreen from './screens/AffRefScreen'

function App() {
  return (
    <div className="min-h-screen w-full bg-sm-primary font-arial text-primary md:bg-primary">
      <div>
        <Router>
          <NavBar />

          <div className="md:px-12 md:py-6">
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/my-work" element={<MyWorkScreen />} />
              <Route path="/blogs" element={<BlogScreen />} />
              <Route path="/aff-ref" element={<AffRefScreen />} />
              <Route path="/store" element={<StoreScreen />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App
