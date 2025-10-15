import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import RecipePage from './Pages/RecipePage'
import Footer from './Components/Footer/footer'
import MaterialManagement from './Pages/MaterialManagement'
import AddRecipe from './Pages/AddRecipe'
import DeleteRecipe from './Pages/DeleteRecipe'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecipePage />} />
        <Route path="/Material-management" element={<MaterialManagement />} />
        <Route path="/add-edit-recipe" element={<AddRecipe />} />
        <Route path="/delete-recipe" element={<DeleteRecipe />} />
        
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
