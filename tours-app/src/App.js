import Header from './layout/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './layout/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import Packages from './pages/Packages';
import PackageDetails from './pages/PackageDetails';
import SignIn from './pages/SignIn';
import React from 'react';
import Profile from './pages/Profile';
import Categories from './pages/Categories';

export let UserContext = React.createContext()

export default function App(props) {

  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog-details/:id" component={BlogDetails} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/membership" component={Membership} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/package-details/:id" component={PackageDetails} />
          <Route exact path="/your-profile" component={Profile} />
          <Route exact path="/category" component={Categories} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
  );
}
