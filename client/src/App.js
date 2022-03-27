import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Search from "./Search";
import Bookmarks from "./Bookmarks";
import Contact from "./Contact";
import Login from "./Login";

function App() {
  function handleLogin() {
    console.log("Add function for login");
    // if (user) {
    //   return <WelcomePage user={user} />
    // } else {
    //   return <Login onLogin={setUser} user={user} />;
    // }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Header user={user} onLogout={handleLogout}/> */}
        <Switch>
          {/* <Route path="/search">
            <Search />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route> */}
          <Route exact path="/">
            <Home />
            {/* <h1>Page Count: {count}</h1> */}
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
