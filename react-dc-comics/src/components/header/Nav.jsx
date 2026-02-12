import Logo from './Logo.jsx'
import navLinks from '../../data/navLinks.js'

function Nav() {
    return (
        <>
            <Logo />
            <div className="nav">
                <ul className="nav-links-container">
                    {navLinks.map(({ id, label, link }) => (
                        <li key={id} className="nav-link">
                            <a href={link}>{label}</a>
                        </li>
                    )
                    )}
                </ul>

            </div>
        </>
    )
}
export default Nav