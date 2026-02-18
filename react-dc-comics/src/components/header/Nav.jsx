import Logo from './Logo.jsx'
import navLinks from '../../data/navLinks.js'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg py-0">
            <div className="container align-items-stretch">
                <Logo />
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#topMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav-link-wrapper collapse navbar-collapse align-items-stretch" id="topMenu">
                    <ul className="nav-link-container navbar-nav ms-auto align-items-stretch">
                        {navLinks.map(({ id, label, link }, index) => (
                            <li key={id} className={`nav-item d-flex ${index === 1 ? 'is-active align-items-stretch' : 'align-items-center py-3'}`}>
                                <a href={link} className="nav-link top-menu-nav-link d-flex align-items-center">{label}</a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav