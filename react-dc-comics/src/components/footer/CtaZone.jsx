import ctaLinks from '../../data/ctaLinks.js'
import CtaCard from './cta/CtaCard.jsx'

function CtaZone() {
    return (
        <div className="cta-container">
            <ul className="cta-links-container container d-flex justify-content-around align-items-center py-4 list-unstyled">
                {ctaLinks.map(({ id, label, link, imgurl }) => (
                    <CtaCard key={id} id={id} label={label} link={link} imgurl={imgurl} />
                )
                )}
            </ul>
        </div>
    )
}
export default CtaZone