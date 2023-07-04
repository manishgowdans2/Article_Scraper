import React from 'react'
import scrap2 from "../assets/scrap2.png"
import "./about.css"
import Slide from 'react-reveal/Slide'
import { Button, TextField, Link } from "@material-ui/core";
import Paper from "../assets/paper.jpg"
import news from "../assets/news.svg"
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div>
        <div className='about'>

          <Slide right duration={1600}>
            <div className='text3'>
              What is Article Scraping?

            </div>
          </Slide>

          <Slide right duration={1700}>
            <div className='text4'>
              Article scraping, also known as web scraping or content scraping, refers to the automated process of extracting information or content from websites. It involves using software tools or scripts to crawl through web pages, collect data, and store it for further analysis or use.
              <div className='text5'>

                Article scraping typically involves extracting specific pieces of information from web pages, such as article titles, authors, dates, text content, images, or other relevant data. This data can be collected from various sources, including news websites, blogs, online forums, or any website that contains publicly accessible information.
              </div>

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






      <div className='full'>
        <div className='about'>

          <Slide right duration={1500}>
            <div className='animate'>
              <img className='slide' src={news} />
            </div>
          </Slide>

        </div>
        <div className='about1'>
          <Slide left duration={1600}>
            <div className='text3'>
             Write Article as an Author

            </div>
          </Slide>

          <Slide left duration={1700}>
            <div className='text6'>

           
            As an author, creating a news article offers several benefits. Firstly, it allows you to express your thoughts and ideas on a particular topic, giving you a platform to share your insights and expertise.
            <div className='text7'>
            In order to write an article register your self to become an author:

            
            </div>

            <NavLink to='/login' className='btn'>Become an Author</NavLink>
           
            </div>
          
          </Slide>
        </div>

      </div>

    </>
  )
}

export default About