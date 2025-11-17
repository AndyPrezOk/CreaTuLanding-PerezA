import "./formCheckout.css";

const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  return (
    <form onSubmit={sendOrder} className="checkout-form card shadow p-4">

      <h4 className="mb-3 text-center">Finalizar compra</h4>

      <div className="mb-3">
        <input
          type="text"
          name="fullname"
          value={dataForm.fullname}
          onChange={handleChangeInput}
          className="form-control"
          placeholder="Nombre completo"
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="tel"
          name="phone"
          value={dataForm.phone}
          onChange={handleChangeInput}
          className="form-control"
          placeholder="Teléfono"
          pattern="[0-9]{7,15}"
          maxLength="15"
          required
        />

      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
          className="form-control"
          placeholder="Email"
          required
        />
      </div>

      <button type="submit" className="btn btn-dark w-100 mt-2">
        Enviar orden de compra
      </button>

    </form>
  );
};

export default FormCheckout;
