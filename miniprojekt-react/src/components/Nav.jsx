import { NavLink } from "react-router-dom";


export default function Nav() {
    return (
        <nav>
            <NavLink to="/">Startside</NavLink>
            <NavLink to="/userData">Brugerdata</NavLink>
            <NavLink to="/admin">Opret Bruger</NavLink>

        </nav>
    )
}
