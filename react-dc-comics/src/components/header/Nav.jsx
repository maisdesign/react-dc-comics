import Logo from './Logo.jsx'
import navLinks from '../../data/navLinks.js'

function Nav({ activeData, setActiveData, setSliceEnd, setSliceStart }) {
    return (
        <nav className="navbar navbar-expand-lg py-0">
            <div className="container align-items-stretch">
                <Logo />
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#topMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav-link-wrapper collapse navbar-collapse align-items-stretch" id="topMenu">
                    <ul className="nav-link-container navbar-nav ms-auto align-items-stretch">
                        {navLinks.map(({ id, label, link, data }) => (
                            <li key={id} className={`nav-item d-flex ${data === activeData ? 'is-active align-items-stretch' : 'align-items-center py-3'}`}>
                                <a href={link} className="nav-link top-menu-nav-link d-flex align-items-center" onClick={() => { setActiveData(data); setSliceEnd(12); setSliceStart(0); }}>{label}</a>
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
