import React, { useState } from "react";

const Card = ({
  character: {
    image,
    name,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour,
    alive,
    hogwartsStaff,
    bgColor,
  },
}) => {
  return (
    <div className="card-container">
      <div className={`card-img ${bgColor}`}>
        <img
          src={
            image
              ? image
              : "https://res.cloudinary.com/dz5tntwl1/image/upload/v1661364748/proyectos-work/not-image_b6zgzm.webp"
          }
          alt={name}
        />
      </div>
      <div className="card-content">
        <p className="card-content--name">{name}</p>
        <p className="card-content--birth">
          Cumpleaños: <span>{dateOfBirth}</span>
        </p>
        <p className="card-content--gender">
          Género: <span>{gender}</span>
        </p>
        <p className="card-content--eye">
          Color de ojos: <span>{eyeColour}</span>
        </p>
        <p className="card-content--hair">
          Color de ojos: <span>{hairColour}</span>
        </p>
        <div className="card-content--conditions">
          {alive ? <p>Vivo</p> : <p>Muerto</p>}
          {hogwartsStaff ? <p>Staff</p> : <p>Estudiante</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
