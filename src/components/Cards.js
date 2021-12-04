import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out your epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <Carditem src='images/img-9.jpg' text='Explore the waterfall deep inside the Amazon' label='Adventure' path='/services'/>
                    <Carditem src='images/img-2.jpg' text='Travel through the islands of Bali' label='Luxury' path='/services'/>
                    <Carditem src='images/img-4.jpg' text='Explore the amazing natural entertainment ' label='Entertainment' path='/services'/>
                    </ul>
                    <ul className="cards__items">
                    <Carditem src='images/img-8.jpg' text='Enjoy Arabian Safari in the north-east' label='Adventure' path='/services'/>
                    <Carditem src='images/img-6.jpg' text='Visit the unbelievable planet of Japan' label='Luxury' path='/services'/>
                    <Carditem src='images/img-7.jpg' text='Enhance your photographing skills through the amazing views' label='Entertainment' path='/services'/>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Cards
