import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { LemonCocktails } from "./pages/LemonCocktails";
import { CocktailDetail } from "./pages/CocktailDetail";

const App = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <Link to="/" className="nav-brand">
            <span>Cocktails 🍸</span>
          </Link>
          <Link to="/lemon-cocktails" className="nav-link">
            <span>Lemon Cocktails</span>
          </Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lemon-cocktails" element={<LemonCocktails />} />
          <Route path="/:id/:slug" element={<CocktailDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
