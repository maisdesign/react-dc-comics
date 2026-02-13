function CtaCard() {
    return (
        <>
            <div className="ctaCards">

                {ctaLinks.map(({ id, label, link, imgurl }) => (
                    <li key={id} className="nav-link">
                        <a href={link}><img src={imgurl} alt={label} /></a>
                    </li>
                )
                )}

            </div >
        </>
    )
}
export default CtaCard