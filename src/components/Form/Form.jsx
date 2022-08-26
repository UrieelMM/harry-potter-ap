import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { initialValues } from "../../../validation/initialValues";
import { validationSchema } from "../../../validation/validationSchema";
import registerCharacter from "../../../api/registerCharacter";

const Form = () => {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formData, { resetForm }) => {
      const response = await registerCharacter(formData);
      if (response === 200 || response === 201) {
        setSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    },
  });

  return (
    <div className="form">
      <h3>Agrega un personaje</h3>
      {success && (
        <div className="form-success">
          <p>Se agregó correctamente</p>
        </div>
      )}
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="name" onChange={formik.handleChange} />
          {formik.errors.name && (
            <p className="error-message">El nombre es obligatorio</p>
          )}
        </div>
        <div className="form-group">
          <label>Cumpleaños</label>
          <input type="date" name="birthday" onChange={formik.handleChange} />
          {formik.errors.birthday && (
            <p className="error-message">El cumpleaños es obligatorio</p>
          )}
        </div>
        <div className="form-group">
          <label>Color de ojos</label>
          <input type="text" name="eyes" onChange={formik.handleChange} />
          {formik.errors.eyes && (
            <p className="error-message">El color de ojos es obligatorio</p>
          )}
        </div>
        <div className="form-group">
          <label>Color de pelo</label>
          <input type="text" name="hair" onChange={formik.handleChange} />
          {formik.errors.hair && (
            <p className="error-message">El color de pelo es obligatorio</p>
          )}
        </div>
        <div className="form-group">
          <label>Género</label>
          <div className="form-group--options">
            <div className="form-group--option">
              <input
                type="radio"
                name="gender"
                value="Mujer"
                onChange={formik.handleChange}
              />{" "}
              <span>Mujer</span>
            </div>
            <div className="form-group--option">
              <input
                type="radio"
                name="gender"
                value="Hombre"
                onChange={formik.handleChange}
              />{" "}
              <span>Hombre</span>
            </div>
          </div>
          {formik.errors.name && (
            <p className="error-message">El género es obligatorio</p>
          )}
        </div>
        <div className="form-group">
          <label>Posición</label>
          <div className="form-group--options">
            <div className="form-group--option">
              <input
                type="radio"
                name="position"
                value="Estudiante"
                onChange={formik.handleChange}
              />{" "}
              <span>Estudiante</span>
            </div>
            <div className="form-group--option">
              <input
                type="radio"
                name="position"
                value="Staff"
                onChange={formik.handleChange}
              />{" "}
              <span>Staff</span>
            </div>
          </div>
          {formik.errors.position && (
            <p className="error-message">La posición es obligatoria</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="">Fotografía</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={formik.handleChange}
          />
          {formik.errors.photo && (
            <p className="error-message">La foto es obligatoria</p>
          )}
        </div>
        <div className="form-button">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
