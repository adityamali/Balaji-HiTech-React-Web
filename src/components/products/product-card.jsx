import React from 'react'
import './product.css'

const Card = ({ item }) => {
  return (
    <>
      <div className="card-cage">
          {item.map((Val) => {
            return (
              <div className="card" key={Val.id} >
                <div className="card-img">
                  <img src={Val.img} alt={Val.title} className="photo w-75" />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    {Val.title}
                     {/* &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp; */}
                    {/* {Val.price} */}
                  </div>
                  <div className="card-text">{Val.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
    </>
  );
}

export default Card