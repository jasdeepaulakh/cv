import React from 'react';
import { Button } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

export default class Home extends React.Component {
    render() {

        var urls = [
            'http://www.jasdeepaulakh.co.uk',
            'http://linkedin.com/in/jasdeepaulakh',
          ];
         
        return (
            <div>
            <div class="row h-100 justify-content-center align-items-center">
              <h1>Jasdeep Aulakh</h1>
            </div>  
            <div class="row justify-content-center align-items-center">
            <SocialIcon color="black" url='http://linkedin.com/in/jasdeepaulakh'/>
          </div>  
        </div>
        )
    }
}