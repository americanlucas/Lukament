import { Home } from "@/pages/Home"
import { Features } from "@/pages/Features";
import { Savings } from "@/pages/Savings";
import { Plans } from "@/pages/Plans";
import { About } from "@/pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="features" element={<Features />}/>
          <Route path="savings" element={<Savings />}/>
          <Route path="plans" element={<Plans />}/>
          <Route path="about" element={<About />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
