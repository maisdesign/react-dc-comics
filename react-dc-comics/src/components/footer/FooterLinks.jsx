import dcComicsLinks from '../../data/dcComicsLinks.js'
import shopLinks from '../../data/shopLinks.js'
import dcLinks from '../../data/dcLinks.js'
import siteLinks from '../../data/siteLinks.js'
import FLinks from './FLinks.jsx'

function FooterLinks() {
    return (
        <div className="footerlinks py-4">
            <div className="footerlinks-container container">
                <div className="row">
                    <div className="col-md-4 row">
                        <div className="footerlinks-col-1 col-md-4">
                            < FLinks sectionName='DC COMICS' arrayName={dcComicsLinks} />
                            < FLinks sectionName='SHOP' arrayName={shopLinks} />
                        </div>
                        <div className="footerlinks-col-2 col-md-4">
                            < FLinks sectionName='DC' arrayName={dcLinks} />
                        </div>
                        <div className="footerlinks-col-3 col-md-4">
                            < FLinks sectionName='SITES' arrayName={siteLinks} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="dc-logo-overlay"></div>
        </div>
    )
}
export default FooterLinks