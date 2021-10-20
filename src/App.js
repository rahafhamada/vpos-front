import { Switch, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/us">About Us</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/products" render={() => <ProductsPage />} />
        <Route
          exact
          path="/products/:productId"
          render={() => <ProductDetails />}
        />
        <Route exact path="/about" render={() => <AboutPage />} />
        <Route exact path="/about/us" render={() => <AboutUsPage />} />
        {/*  404 page Must be at the bottom  */}
        <Route path="*" render={() => <PageNotFound />} />
      </Switch>
    </>
  );
};

export default App;
