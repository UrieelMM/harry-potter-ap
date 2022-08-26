import React, { useState } from "react";
import icon_favorite from "../../assets/icon_favorite.svg";

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
      <div className={alive ? "card-content bgWhite" : "card-content bgGrey"}>
        <div className="card-content--conditions">
          <div>
            {alive ? <p>Vivo</p> : <p>Muerto</p>}
            {hogwartsStaff ? <p>Staff</p> : <p>Estudiante</p>}
          </div>
          <button className="card-content--conditions--icon">
            <img src={icon_favorite} alt="Favorite" />
          </button>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Card;
