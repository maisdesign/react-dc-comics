import dcComicsLinks from '../../data/dcComicsLinks.js'
import shopLinks from '../../data/shopLinks.js'
import dcLinks from '../../data/dcLinks.js'
import siteLinks from '../../data/siteLinks.js'

function FooterLinks() {
    return (
        <div className="footerlinks">
            <div className="footerlinks-container">
                <div className="footerlinks-row-1">
                    <ul className="footer-links-ul">
                        <h3 className="ul-title">DC COMICS</h3>
                        {dcComicsLinks.map(({ id, label, link }) => (
                            <li key={id} className="nav-link">
                                <a href={link}>{label}</a>
                            </li>
                        )
                        )}
                    </ul>
                    <ul className="footer-links-ul">
                        <h3 className="ul-title">SHOP</h3>
                        {shopLinks.map(({ id, label, link }) => (
                            <li key={id} className="nav-link">
                                <a href={link}>{label}</a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div className="footerlinks-row-2">
                    <ul className="footer-links-ul">
                        <h3 className="ul-title">DC</h3>
                        {dcLinks.map(({ id, label, link }) => (
                            <li key={id} className="nav-link">
                                <a href={link}>{label}</a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div className="footerlinks-row-3">
                    <ul className="footer-links-ul">
                        <h3 className="ul-title">SITES</h3>
                        {siteLinks.map(({ id, label, link }) => (
                            <li key={id} className="nav-link">
                                <a href={link}>{label}</a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </div>
            <div className="dc-logo-overlay"></div>
        </div>
    )
}
export default FooterLinks