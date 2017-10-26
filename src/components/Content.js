import React from 'react';
import Home from './Home';
import About from './About';
import Work from './Work';
import Education from './Education';
import Skills from './Skills';
import Portfolio from './Portfolio';
import References from './References';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

export default class Content extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="page-header" id="banner">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/education" component={Education}/>
                    <Route path="/skills" component={Skills}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/references" component={References}/>
                </div>
            </div>
        )
    }
}