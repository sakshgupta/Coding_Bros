import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../sections/title';
import About from '../sections/about';
import Form1 from '../components/shelter_form';
import Form2 from '../components/info_form';
import Article from '../sections/article';
import Shop from '../sections/shop';
import Footer from '../sections/footer';
import Healthcare from '../sections/healthcare';
function routes() {
    return <div>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/form1" exact component={Form1} />
                <Route path="/form2" exact component={Form2} />
                <Route path="/article" exact component={Article} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/footer" exact component={Footer} />
                <Route path="/healthcare" exact component={Healthcare} />
            </Switch>
        </Router>
    </div>;
}

export default routes