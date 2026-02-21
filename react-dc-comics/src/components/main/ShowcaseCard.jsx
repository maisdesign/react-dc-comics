function ShowcaseCard({ title, thumb, series }) {
    return (

        <li className="showcomic gap-2 col-sm-6 col-md-4 col-lg-2 py-3">
            <div className="singlecomic-container">
                <div className="singlecomic-img"><a href='#'><img loading="lazy" src={thumb} alt={title} className="img-fluid" /></a></div>
                <div className="singlecomic-series py-2">
                    <a href='#' className="text-white text-decoration-none">{series}</a>
                </div>
            </div>
        </li>


    )
}
export default ShowcaseCard