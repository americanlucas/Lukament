import { Home } from "@/pages/Home"
import { Features } from "@/pages/Features";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="features" element={<Features />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
