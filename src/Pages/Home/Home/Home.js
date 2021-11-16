import React from 'react'
import Banner from '../Banner/Banner'
import Doctors from '../Doctors/Doctors'
import Services from '../Services/Services'
import UnderBanner from '../UnderBanner/UnderBanner'

const Home = () => {
    return (
        <div>
            <Banner />
            <UnderBanner/>
            <Services />
            <Doctors />
        </div>
    )
}

export default Home
