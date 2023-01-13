import { Phone, Place } from '@mui/icons-material'
import React from 'react'
import ContactCard from '../components/contactCard'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Contact = () => {
    return (
        <div className='contact'>
            <Navbar />

            <div className="showcase">
                <div className="left">
                    <div className="pagination">home / <span>contact</span></div>
                    <h1>Contact</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing  elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
                </div>

            </div>


            <div className="contactCards">
                <ContactCard icon={<Place />} title={"Location"} info={"Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. "} />
                <ContactCard icon={<Phone />} title={"Contact"} info={`T-shirt12@gmail.com \n (021) 12345678`} />
            </div>


            <div className="contact_Form">
                <p className="title">Send a Message</p>

                <input type="text" className='half' placeholder='Firs Name' />
                <input type="text" className='half' placeholder='Last Name' />
                <input type="text" className='match' placeholder='Your Email' />
                <textarea name="" id="" className='match' cols="30" rows="10" placeholder='Description'></textarea>
            <div className="match">
                <button>send</button>
            </div>



            </div>

            <Footer/>
        </div>
    )
}

export default Contact