import Logo from './Logo.jsx'
import navLinks from '../../data/navLinks.js'

function Nav() {
    return (
        <div className="top-container">
            <Logo />
            <nav>
                <ul className="nav-link-container">
                    {navLinks.map(({ id, label, link }, index) => (
                        <li key={id} className={`nav-link ${index === 1 ? 'is-active' : ''}`}>
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