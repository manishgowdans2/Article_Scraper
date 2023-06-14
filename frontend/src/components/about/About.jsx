import React from 'react'
import scrap2 from "../assets/scrap2.png"
import "./about.css"
import Slide from 'react-reveal/Slide'
import { Button, TextField, Link } from "@material-ui/core";
import Paper from "../assets/paper.jpg"

const About = () => {
  return (
    <div className='full'>
      <div className='about'>
        <Slide right duration={1600}>
          <div className='text3'>
            Hello

          </div>
        </Slide>

        <Slide right duration={1700}>
          <div className='text4'>
            We are very nice people
            we will not harm you

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </div>
        </Slide>
      </div>
      <div className='about1'>
        <Slide left duration={1500}>
          <div className='animate'>
            <img className='slide' src={Paper} />
          </div>
        </Slide>
      </div>

    </div>
  )
}

export default About