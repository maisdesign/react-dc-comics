import Jumbotron from './Jumbotron.jsx'
import ShowcaseCard from './ShowcaseCard.jsx'
import comics from '../../data/comics.js'
import LoadMore from './LoadMore.jsx'

function Main() {
    return (
        <>
            <div className="jumbotron-wrapper">
                <Jumbotron />
            </div>
            <main className="container">
                <ul className="showcase-list d-flex flex-wrap list-unstyled row mx-auto container py-3 px-0">

                    {comics.map(({ id, title, thumb, series }) => (
                        <ShowcaseCard key={id} id={id} title={title} series={series} thumb={thumb} />
                    )
                    )}
                    <LoadMore />
                </ul>
            </main>
        </>
    )
}
export default Main