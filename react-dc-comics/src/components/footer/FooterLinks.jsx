import dcComicsLinks from '../../data/dcComicsLinks.js'
import shopLinks from '../../data/shopLinks.js'
import dcLinks from '../../data/dcLinks.js'
import siteLinks from '../../data/siteLinks.js'

function FooterLinks() {
    return (
        <div className="footerlinks py-4">
            <div className="footerlinks-container container">
                <div className="row">
                    <div className="col-md-4 row">
                        <div className="footerlinks-col-1 col-md-4">
                            <h3 className="ul-title text-white">DC COMICS</h3>
                            <ul className="footer-links-ul px-0">

                                {dcComicsLinks.map(({ id, label, link }) => (
                                    <li key={id} className="footer-link-item">
                                        <a href={link} className="text-decoration-none">{label}</a>
                                    </li>
                                )
                                )}
                            </ul>
                            <h3 className="ul-title text-white">SHOP</h3>
                            <ul className="footer-links-ul px-0">

                                {shopLinks.map(({ id, label, link }) => (
                                    <li key={id} className="footer-link-item">
                                        <a href={link} className="text-decoration-none">{label}</a>
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                        <div className="footerlinks-col-2 col-md-4">
                            <h3 className="ul-title text-white">DC</h3>
                            <ul className="footer-links-ul px-0">

                                {dcLinks.map(({ id, label, link }) => (
                                    <li key={id} className="footer-link-item">
                                        <a href={link} className="text-decoration-none">{label}</a>
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                        <div className="footerlinks-col-3 col-md-4">
                            <h3 className="ul-title text-white">SITES</h3>
                            <ul className="footer-links-ul px-0">

                                {siteLinks.map(({ id, label, link }) => (
                                    <li key={id} className="footer-link-item">
                                        <a href={link} className="text-decoration-none">{label}</a>
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div> {/* col-md-4 */}
            <div className="dc-logo-overlay"></div>
        </div>
    )
}
export default FooterLinks