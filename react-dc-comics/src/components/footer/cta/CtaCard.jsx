function CtaCard({ id, label, link, imgurl, showLabel = true }) {
    return (

        <li key={id} className="cta-item d-flex align-items-center text-center gap-2">
            <a href={link}><img src={imgurl} alt={label} /></a>
            {showLabel && <a href={link} className="text-white text-decoration-none">{label}</a>}
        </li>


    )
}
export default CtaCard