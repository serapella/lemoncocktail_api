import React from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <nav>
        <div className="container">
          <Link to="/" className="nav-brand">
            <span>Cocktail Explorer</span>
          </Link>
          <Link to="/lemon-cocktails" className="nav-link">
            <span>Lemon Cocktails</span>
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
