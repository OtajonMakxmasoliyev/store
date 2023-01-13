import React from 'react'

const ContactCard = (props) => {
  return (
    <div className='contactCard'>
        <div className="contactCard_icon">
            {props.icon}
        </div>
        {props.title&&<p className='title'>{props.title}</p>}
        {props.info&&<p className='info'>{props.info}</p>}
    </div>
  )
}

export default ContactCard