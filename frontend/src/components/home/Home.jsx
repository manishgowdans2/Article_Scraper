import React from 'react'
import "./home.css"
import search from "../assets/search.svg"
import news from "../assets/news.svg"
import scrap2 from "../assets/scrap2.png"
import news2 from "../assets/news2.png"
import { Slide } from 'react-reveal'

const Home = () => {
    return (
        <div className='full'>
            <div className='one'>
          <div className='a'>
                    <img className='news' src={news} />

</div><div className='b'>
                    <p className='text2'>All news articles at your fingertips</p>
                    </div>
                    <div className='c'>
              
              
                    <img className='search' src={search} />
                    </div>
                    <div className='d'>
                    <p className='text1'>Search for any news with a keyword</p>
                    </div>
                 
                   

                    
                    </div>
   
            
            <div className='two'>
                <div className='two1'>

                    <img className='scrap2' src={news2} />
                    <img className='scrap3' src={scrap2} />
                </div>
                
            </div>
            <div className='three'>
            <button className='btn'>Explore More</button>
            </div>
            
        </div>
    )
}

export default Home