import Logo from './Logo.jsx'
import navLinks from '../../data/navLinks.js'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Logo />
                <ul className="nav-link-container">
                    {navLinks.map(({ id, label, link }, index) => (
                        <li key={id} className={`nav-link ${index === 1 ? 'is-active' : ''}`}>
                            <a href={link}>{label}</a>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </nav>
    )
}
export default Nav