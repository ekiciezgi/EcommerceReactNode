import "./App.css";
import Products from "./pages/Products/products.jsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import signIn from "./pages/Auth/SignIn/signIn";
import SignUp from "./pages/Auth/SignUp/signUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx"
function App() {
	return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Products}/>
                <Route path="/signIn" component={signIn}/>
                <Route path="/signUp" component={SignUp}/>
                <Route path="/product/:product_id" component={ProductDetail}/>
                <Route path="/SignUp" component={SignUp}/>
            </Switch>
        </Router>
    )
}

export default App;
