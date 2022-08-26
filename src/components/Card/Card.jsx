import React from "react";
import icon_favorite from "../../assets/icon_favorite.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../redux/favorites";

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
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleAddFavorite = () => {
    if (favorites.length === 5) {
      alert("No puedes tener mas de 5 favoritos");
    } else {
      dispatch(addFavorite({ name, image }));
    }
  };

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
          <button
            onClick={() => handleAddFavorite()}
            className="card-content--conditions--icon"
          >
            <img src={icon_favorite} alt="Favorite" />
          </button>
        </div>
        <div>
          <p className="card-content--name">
            {!alive && <span>+</span>}
            {name}
          </p>
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
