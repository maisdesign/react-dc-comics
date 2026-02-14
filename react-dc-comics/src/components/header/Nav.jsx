import Logo from './Logo.jsx'
import navLinks from '../../data/navLinks.js'

function Nav() {
    return (
        <div className="top-container">
            <Logo />
            <nav>
                <ul className="nav-links-container">
                    {navLinks.map(({ id, label, link }) => (
                        <li key={id} className="nav-link">
                            <a href={link}>{label}</a>
                        </li>
                    )
                    )}
                </ul>

            </nav>
        </div>
    )
}
export default Nav