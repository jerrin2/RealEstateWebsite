import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex'>
            <div className='box'>
              
              <input type='text' placeholder='Search Location' />
            </div>
           
             
             <button className='btn1' >
              <a href="Blog">
              <i className='fa fa-search'></i>
              </a>
            </button> 
      



          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
