import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.css"
import App from './pages/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import { ProjectLayout, ProjectList, ProjectOne, Projects } from './pages/projects'
import Serveics from './pages/services'
import Book from './pages/book'
import About from './pages/about'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Serveics />} />
          <Route path='/book' element={<Book />} />
          <Route path='/project' element={<ProjectLayout />} >
            <Route index element={<ProjectList/>}/>
            <Route path='/project/:project' element={<Projects />} />
            <Route path='/project/:project/:id' element={<ProjectOne/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
