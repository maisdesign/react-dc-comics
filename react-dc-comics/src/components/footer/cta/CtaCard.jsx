function CtaCard({ id, label, link, imgurl }) {
    return (
        <>
            <li key={id} className="nav-link">
                <a href={link}><img src={imgurl} alt={label} /></a>
                <a href={link}>{label}</a>
            </li>

        </>
    )
}
export default CtaCard