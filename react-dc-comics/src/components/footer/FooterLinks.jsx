import dcComicsLinks from '../../data/dcComicsLinks.js'
import shopLinks from '../../data/shopLinks.js'
import dcLinks from '../../data/dcLinks.js'
import siteLinks from '../../data/siteLinks.js'

function FooterLinks() {
    return (
        <div className="footerlinks">
            <div className="footerlinks-container">
                <div className="footerlinks-row-1">
                    <ul className="ul-title">DC COMICS
                        {dcComicsLinks.map(({ id, label, link }) => (
                            <li key={id} className="nav-link">
                                <a href={link}>{label}</a>
                            </li>
                        )
                        )}
                    </ul>
                    <ul className="ul-title">SHOP
                        {shopLinks.map(({ id, label, link }) => (
                            <li key={id} className="nav-link">
                                <a href={link}>{label}</a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div className="footerlinks-row-2">
                    <ul className="ul-title">DC
                        {dcLinks.map(({ id, label, link }) => (
                            <li key={id} className="nav-link">
                                <a href={link}>{label}</a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div className="footerlinks-row-3">
                    <ul className="ul-title">SITES
                        {siteLinks.map(({ id, label, link }) => (
                            <li key={id} className="nav-link">
                                <a href={link}>{label}</a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default FooterLinks