import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import BlogsPage from './components/BlogsPage'
import ProjectsPage from './components/ProjectsPage'

function App() {
  return (
    <div>
      <div className='w-[100vw] bg-black relative'>
        <div className='fixed'>
          <Header></Header>
        </div>
        <div className='pt-14'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/blogs' element={<BlogsPage />} />
              <Route path='/projects' element={<ProjectsPage />} />
              <Route path='*' element={<h1>404 not found</h1>} />
            </Routes>
        </div>
      </div>
      <div className='w-screen flex bottom-4 justify-center fixed'>
        <NavBar></NavBar>
      </div>
    </div>
  )
}

export default App
