import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/about.jpg'

class About extends Component {
    render() {
        return(
            <div>
                <Header
                    title="About Us"
                    subtitle="It's really a great story"
                    showButton={false}
                    image={image}
               />

            </div>
        )
    }
}

export default About;