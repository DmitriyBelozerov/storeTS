import { NavLink } from "react-router-dom"

export function Navigation() {
    return (
        <nav className="navigation">
            <span className="navigation__title">React 2024</span>
            <span>
                <NavLink to='/' className="navigation__link">Products</NavLink>
                <NavLink to='/about' className="navigation__link">About</NavLink>
            </span>
        </nav>
    )
}