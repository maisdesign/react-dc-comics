import socialLinks from '../../data/socialLinks.js'
import CtaCard from './cta/CtaCard.jsx'

function SocialLinks() {
    return (

        <ul className="cta-links-container">
            {socialLinks.map(({ id, label, link, imgurl }) => (
                <CtaCard key={id} id={id} label={label} link={link} imgurl={imgurl} />
            )
            )}
        </ul>

    )
}
export default SocialLinks