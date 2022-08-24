import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-container">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="form">
                <h3>Agrega un personaje</h3>
                <form className="form-container">
                  <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Cumpleaños</label>
                    <input type="text" name="birthday" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Color de ojos</label>
                    <input type="text" name="eyes" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Color de pelo</label>
                    <input type="text" name="hair" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Género</label>
                    <div className="form-group--options">
                      <div className="form-group--option">
                        <input type="radio" name="gender" /> <span>Mujer</span>
                      </div>
                      <div className="form-group--option">
                        <input type="radio" name="gender" /> <span>Hombre</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Posición</label>
                    <div className="form-group--options">
                      <div className="form-group--option">
                        <input type="radio" name="position" />{" "}
                        <span>Estudiante</span>
                      </div>
                      <div className="form-group--option">
                        <input type="radio" name="position" />{" "}
                        <span>Staff</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Fotografía</label>
                    <input type="file" name="photography" />
                  </div>
                </form>
                <div className="form-button">
                  <button type="submit">Guardar</button>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
