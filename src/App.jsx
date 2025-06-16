import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/Create";
import EditPost from "./pages/EditPost";
import './App.css'

function App() {
  
  return (
  <Router>
   <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/create" element={<CreatePost />} />
    <Route path="/edit/:id" element={<EditPost />} /> 
   </Routes>
  </Router>
  );
}

export default App;
