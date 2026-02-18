import ctaLinks from '../../data/ctaLinks.js'
import CtaCard from './cta/CtaCard.jsx'

function CtaZone() {
    return (
        <div className="cta-container">
            <ul className="cta-links-container container d-flex flex-column flex-md-row align-items-center py-4 list-unstyled justify-content-around gap-3">
                {ctaLinks.map(({ id, label, link, imgurl }) => (
                    <CtaCard key={id} id={id} label={label} link={link} imgurl={imgurl} />
                )
                )}
            </ul>
        </div>
    )
}
export default CtaZone