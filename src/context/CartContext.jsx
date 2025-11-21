import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
    const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : []);

    useEffect(() => {
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
    }, [cart])

    const addProduct = (newProduct) => {
        const indexProduct = cart.findIndex((productCart) => productCart.id === newProduct.id);

        if (indexProduct === -1) {
            if (newProduct.quantity <= newProduct.stock) {
                setCart([...cart, newProduct]);

                return;
            }
        }
        const newCart = [...cart];
        const currentQuantity = newCart[indexProduct].quantity;

        if (currentQuantity + newProduct.quantity <= newProduct.stock) {
            newCart[indexProduct].quantity = currentQuantity + newProduct.quantity;
            setCart(newCart);
        } else{
                Swal.fire({
                    title: "Producto agotado",
                    icon: "warning",
                    showConfirmButton: false,
                    width:400,
                    timer: 2500
                });
            }
    };
    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0);
        return quantity;
    }

    const totalPrice = () => {
        const total = cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity), 0);
        return total;
    }

    const deleteProductById = (productId) => {
        const productsFiltered = cart.filter((productCart) => productCart.id !== productId);
        setCart(productsFiltered);
    }

    const deleteCart = () => {
        setCart([]);
    }

    const increaseQuantity = (productId) => {
        const newCart = cart.map((productCart) => {
            if (productCart.id === productId && productCart.quantity < productCart.stock) {
                productCart = { ...productCart, quantity: productCart.quantity + 1 };
            } else{
                Swal.fire({
                    title: "Producto sin stock",
                    icon: "warning",
                    showConfirmButton: false,
                    width:400,
                    timer: 2500
                });
            }
            return productCart;
        });
        setCart(newCart);
    };

    const decreaseQuantity = (productId) => {
        const newCart = cart.map((productCart) => {
            if (productCart.id === productId && productCart.quantity > 1) {
                productCart = { ...productCart, quantity: productCart.quantity - 1 };
            }
            return productCart;
        });
        setCart(newCart);
    };
    return (
        <CartContext.Provider value={{ cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider }; 