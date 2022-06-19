
import React from 'react';
import './main-style.css';

export default function Main(props) {
    return (
        <section className='main-intro'>
            <main className='main'>
                <div>
                    <img src={props.imageUrl} />
                </div>
                <div>
                    <img src={props.markImg} />
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                    <h1>{props.title}</h1>
                    <p>{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </main>
            <hr />
        </section>
    )
}



