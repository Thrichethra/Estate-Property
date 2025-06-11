import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Pages from "./components/pages/Pages";
import PropertyPage from "./components/propertyPage/PropertyPage";
 // Import the component that will show individual property details

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages Component */}
        <Route exact path="/" component={Pages} />
        
        {/* Property Pages */}
        <Route path="/properties/prop1" component={PropertyPage} />
        <Route path="/properties/prop2" component={PropertyPage} />
        <Route path="/properties/prop3" component={PropertyPage} />
        <Route path="/properties/prop4" component={PropertyPage} />
        <Route path="/properties/prop5" component={PropertyPage} />
        <Route path="/properties/prop6" component={PropertyPage} />
        <Route path="/properties/prop7" component={PropertyPage} />
        <Route path="/properties/prop8" component={PropertyPage} />
      </Routes>
    </Router>
  );
}

export default App;
