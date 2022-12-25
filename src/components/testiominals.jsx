import { Star, StarBorder } from '@mui/icons-material';
import React from 'react'

const Testiominals = (props) => {
    const star = new Array;
    for (let index = 0; index < 5; index++) {
        if (index < props.rating) {
            star.push(<Star />)
        } else {
            star.push(<StarBorder />)
        }

    }
    return (
        <div className='testiominalCard' >
            <img src={require(`../images/clients/${props.image}.png`)} />
            <div className="info">
                <p className='title'>{props.name}</p>
                <p className='role'>{props.role}</p>
            </div>
            <div className="rates">
                {star.map((data, index) => (
                    <i key={index}>{data}</i>
                ))}
            </div>
            <p className='description'><q>{props.description}</q></p>
        </div>
    )
}

export default Testiominals