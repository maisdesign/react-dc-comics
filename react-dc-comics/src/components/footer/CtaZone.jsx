import ctaLinks from '../../data/ctaLinks.js'
import CtaCard from './cta/CtaCard.jsx'

function CtaZone() {
    return (

        <ul className="cta-links-container">
            {ctaLinks.map(({ id, label, link, imgurl }) => (
                <CtaCard key={id} id={id} label={label} link={link} imgurl={imgurl} />
            )
            )}
        </ul>

    )
}
export default CtaZone