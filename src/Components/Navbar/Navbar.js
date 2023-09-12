import CartWidgets from "./CartWidgets/CartWidgets"
const Navbar = () => {
    return (
        <nav>
            <h3>Mascotas</h3>
            <div>
                <button>Veterinaria</button>
                <button>Accesorios</button>
                <button>Alimentos</button>
                <CartWidgets/>
            </div>
        </nav>
    )
}
export default Navbar