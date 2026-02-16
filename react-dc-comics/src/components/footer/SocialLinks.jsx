import socialLinks from '../../data/socialLinks.js'
import CtaCard from './cta/CtaCard.jsx'

function SocialLinks() {
    return (

        <div className="social-zone">

            <div className="social-cta"><p>FOLLOW US</p></div>
            <ul className="cta-links-container">
                {socialLinks.map(({ id, label, link, imgurl }) => (
                    <CtaCard key={id} id={id} label={label} link={link} imgurl={imgurl} />
                )
                )}
            </ul>

        </div>
    )
}
export default SocialLinks