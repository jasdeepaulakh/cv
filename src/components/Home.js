import React from 'react';
import { Button } from 'reactstrap';

export default class Home extends React.Component {
    render() {
        return (
            <div class="jumbotron">
                <h1 class="display-3">Welcome</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p><a class="btn btn-primary btn-lg" href="#">Learn more</a></p>
            </div>
        )
    }
}