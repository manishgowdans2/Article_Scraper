import React from 'react'
import "./home.css"
import search from "../assets/search.svg"
import scrap2 from "../assets/scrap2.png"
import news2 from "../assets/news2.png"
import Slide from 'react-reveal/Slide'
import Paper from "../assets/paper.jpg"
import news from "../assets/news.svg"



const Home = () => {
    return (
    
        <div className='full'>
            <div className='one'>
                <div className='a'>
                    <p className='text2'>All news articles at your fingertips</p>
                </div>
                <div className='b'>
                    <img className='search' src={search} />
                </div>
                <div className='c'>
                    <p className='text1'>Search for any news with a keyword</p>
                </div>




            </div>


            <div className='two'>
            

                    <img className='scrap2' src={news2} />
                    <img className='scrap3' src={scrap2} />
          

            </div>
            <div className='three'>
                <button className='btn'>Explore More</button>
            </div>

           
    

        </div>

       

    )
}

export default Home