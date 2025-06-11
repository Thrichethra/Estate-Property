import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Explore more Property for sale and rent' subtitle='Explore a Wide Selection of Homes, Villas, Apartments, and Commercial Spaces, All Available for Sale or Rent at Competitive Prices.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent