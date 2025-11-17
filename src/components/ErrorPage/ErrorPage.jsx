import error from "../../assets/img/error.png"
import "./errorPage.css"

const ErrorPage = () => {
  return (
    <div className="first-container">
      <div className="error-container">
      <h1>PAGE NOT FOUND</h1>
      <img className="error-img" src={error} alt="Página no encontrada" />
      <p>Lo sentimos, el producto que buscas no existe.</p>
    </div> 
    </div>
  )
}

export default ErrorPage


