import React, { Component } from "react";
import Header from '../common/Header';
import image from '../assets/services.jpg';

//Reusable components
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import Team from '../common/Team';
import TimeLine from '../common/TimeLine';
class Home extends Component {
    render() {
        return(
            <div>
               <Header
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
               />
               <Services />
               <Portfolio />
               <TimeLine />
               <Team />
            </div>
        )
    }
}

export default Home;