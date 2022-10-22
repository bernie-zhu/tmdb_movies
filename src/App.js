import { Route, Routes, HashRouter } from "react-router-dom"
import './App.css'
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import Gallery from "./components/Gallery/Gallery"
import List from "./components/List/List"
import Details from "./components/Details/Details"

function App() {
  return (
    <HashRouter>
      <Header/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Gallery/>} exact />
        <Route path="/list" element={<List/>} />
        <Route path="/details/:passedId" element={<Details/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
