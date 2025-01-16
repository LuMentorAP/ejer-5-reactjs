/* eslint-disable react/prop-types */
import "./../styles/ProductList.css";
import "../styles/productCarousel.css"
// import { useEffect } from "react";
export default function ProductList({ productos, addToCart }) {
  const getVisibleProducts = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) return 6; // Escritorio grande
    if (screenWidth >= 768) return 4; // Tablet
    return 1; // Móvil
  };

  const productosVisibles = getVisibleProducts();
  const groupedProducts = productos.reduce((acc, producto, index) => {
    const groupIndex = Math.floor(index / productosVisibles);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(producto);
    return acc;
  }, []);


  return (
    <>
    <div
    id="productCarousel"
    className="carousel slide"
    data-bs-ride="false" // Control manual
  >
    <div className="carousel-inner">
      {groupedProducts.map((group, index) => (
        <div
          key={index}
          className={`carousel-item ${index === 0 ? "active" : ""}`}
        >
          <div className="d-flex justify-content-center">
            {group.map((producto) => (
              <div key={producto.id} className="card product-card mx-2">
                <img
                  src={producto.img}
                  className="card-img-top"
                  alt={producto.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{producto.name}</h5>
                  <p className="card-text">${producto.price}</p>
                  <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#productCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#productCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  </div>
    <button type="button" className="btn align-center bg-dark text-white">Ver más +</button>
    </>
  )
}
