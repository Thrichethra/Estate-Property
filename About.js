import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Story' subtitle='Check out our company story and work process' />

            <p>Welcome to DreamKey, your one-stop destination for finding the perfect property. Whether you are looking to buy, rent, or invest, our platform is designed to make your property search easier and more efficient.</p>
            <p>Our mission is to connect property seekers with their dream homes through a user-friendly, intuitive platform. We aim to provide reliable, up-to-date property listings and advanced tools to help you make informed decisions.</p>
            <button className='btn2'>More</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About