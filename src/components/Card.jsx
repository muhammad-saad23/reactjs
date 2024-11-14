import reactLogo from '../assets/react.svg'
import React, { Component } from 'react'
// import Home from "./Home";

export default function Card (props) {
  
    // let img="http://www.madshrimps.be/news/item/234239"
    let { title, des, img, newurl } = props;

    return (
      <>

        <div>
          <div classNames="card" style={{ width: "18rem;" }}>
            <img src={`https://image.tmdb.org/t/p/w500/${img}`} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{des}...</p>
              <a href={newurl} target='_black' className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        
      </>
    )
  
}
