import './App.css'
import CareersBlog from './components/Careers'
import CyberSecurityBlog from './components/CyberSecurity'
import DataScienceBlog from './components/DataScienceBlog'
import FullStackBlog from './components/FullStackBlog'
import LandingPage from './components/LandingPage'
import { Routes,Route } from 'react-router-dom'


function App() {
  // All pages warpped under the routes of react router dom
  // Default page component added using exact path
  return (
    <Routes>
     <Route exact path='/' element={<LandingPage></LandingPage>}></Route>
     <Route exact path='/FullStackBlog' element={<FullStackBlog></FullStackBlog>}></Route>
     <Route exact path='/DataScienceBlog' element={<DataScienceBlog></DataScienceBlog>}></Route>
     <Route exact path='/CyberSecurityBlog' element={<CyberSecurityBlog></CyberSecurityBlog>}></Route>
     <Route exact path='/CareersBlog' element={<CareersBlog></CareersBlog>}></Route>
    </Routes>
  )
}

export default App
