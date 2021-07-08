import Appointment from "./Appointment.js";
import React, { useState } from 'react';

function Tile(props) {
    const [view, setView] = useState(true);
    if (view) {
        return (

            <div className='tile'>

                <div class="banner"></div>

                <div class='property-info'>
                    <h2>Location: {props.area}</h2>
                    <h2>Type: {props.type}</h2>
                    <h2>Price: £{props.price}</h2>
                </div>
                <img class='image' alt='' src={props.image} />
                <Appointment id={props.id} />
                <button class='button' onClick={() => { setView(false); }}>Hide</button>
            </div>

        );
    }
    return (
        <button onClick={() => { setView(true) }}>Show</button>
    )
}
export default Tile;