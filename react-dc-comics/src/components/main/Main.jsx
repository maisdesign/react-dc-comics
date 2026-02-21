import Jumbotron from './Jumbotron.jsx'
import ShowcaseCard from './ShowcaseCard.jsx'
import LoadMore from './LoadMore.jsx'

function Main({ activeData, sliceEnd, setSliceEnd, setSliceStart, sliceStart }) {

    return (
        <>
            <div className="jumbotron-wrapper">
                <Jumbotron activeData={activeData} />
            </div>
            <main className="container">
                <ul className="showcase-list d-flex flex-wrap list-unstyled row mx-auto container py-3 px-0">

                    {activeData.slice(sliceStart, sliceEnd).map(({ id, title, thumb, series }) => (
                        <ShowcaseCard key={id} id={id} title={title} series={series} thumb={thumb} />
                    )
                    )}
                </ul>
                <LoadMore sliceEnd={sliceEnd} setSliceEnd={setSliceEnd} sliceStart={sliceStart} setSliceStart={setSliceStart} activeData={activeData} />
            </main>
        </>
    )
}
export default Main
