import { Link } from "react-router-dom"

const SideBarNavigation = () => {
    return (
        <>
        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/">User Panel</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
        </nav>
       
        </>
    )
}

export default SideBarNavigation