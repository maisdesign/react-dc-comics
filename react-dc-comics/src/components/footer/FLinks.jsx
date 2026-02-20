function FLinks({ sectionName, arrayName }) {
    let sectionClass = sectionName.replaceAll(' ', '-');
    return (
        <>

            < h3 className="ul-title text-white" >{sectionName}</h3 >
            <ul className="footer-links-ul px-0">

                {arrayName.map(({ id, label, link }) => (
                    <li key={id} className={`footer-link-item ${sectionClass}`}>
                        <a href={link} className="text-decoration-none">{label}</a>
                    </li>
                )
                )}
            </ul>
        </>
    )
}

export default FLinks