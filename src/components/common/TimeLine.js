import React, { Component } from 'react';
import TimelineItem from './TimelineItem';

import img1 from '../assets/about/1.jpg'

const experiences = [
    {date:'2017', title:'Willemse France', description:'', image: img1, pair: true},
    {date:'2018-2020', title:'Willemse France', description:'', image: img1, pair: false},
    {date:'2020', title:'Willemse France', description:'', image: img1, pair: true}
]
class TimeLine extends Component {
    render() {
        return(
            <section class="page-section" id="about">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">About</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <ul class="timeline">
                        {experiences.map((item, index )=> {
                            return <TimelineItem {...item} key={index} />
                        })}
                    </ul>
                </div>
            </section>
        )
    }
}

export default TimeLine;