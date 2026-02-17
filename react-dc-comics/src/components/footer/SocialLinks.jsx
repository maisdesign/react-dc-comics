import socialLinks from '../../data/socialLinks.js'
import CtaCard from './cta/CtaCard.jsx'

function SocialLinks() {
    return (

        <div className="social-zone d-flex align-items-center gap-3">

            <div className="social-cta p-0 m-0"><p className="p-0 m-0">FOLLOW US</p></div>
            <ul className="cta-links-container d-flex list-unstyled gap-2 mb-0">
                {socialLinks.map(({ id, label, link, imgurl }) => (
                    <CtaCard key={id} id={id} label={label} link={link} imgurl={imgurl} showLabel={false} />
                )
                )}
            </ul>

        </div>
    )
}
export default SocialLinks