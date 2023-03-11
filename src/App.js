import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ProjectsScreen } from "./screens/ProjectsScreen";
import { AboutScreen}  from "./screens/AboutScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { EucalcScreen } from "./screens/projects/EucalcScreen";
import { PortfolioScreen } from "./screens/projects/PortfolioScreen";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const root = document.documentElement;

  useEffect(()=>{
    root.style.setProperty("--VW", `${window.innerWidth*0.01}px`);
    root.style.setProperty("--VH", `${window.innerHeight*0.01}px`);
  }, [root.style])

  return (
    <div className="App">
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route exact path="/projects/portfolio" element={<PortfolioScreen/>}/>
          <Route exact path="/projects/eucalc" element={<EucalcScreen/>}/>
          <Route exact path="/projects" element={<ProjectsScreen/>}/>
          <Route exact path="/about" element={<AboutScreen/>}/>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
