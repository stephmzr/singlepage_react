import React, { Component } from 'react';
import TeamMember from './TeamMember';

import photo1 from '../assets/2.jpg';

const members = [
    {name:'Stephan Mazur', job:'Web Developer', photo: photo1},
    {name:'Stephan Mazur', job:'Web Developer', photo: photo1},
    {name:'Stephan Mazur', job:'Web Developer', photo: photo1}
];

class Team extends Component {
    render() {
        return(
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div class="row">
                        {members.map((member, index) => {
                            return <TeamMember {...member} key={index} />
                        })}
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;