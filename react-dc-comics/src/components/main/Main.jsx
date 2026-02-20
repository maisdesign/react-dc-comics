import Jumbotron from './Jumbotron.jsx'
import ShowcaseCard from './ShowcaseCard.jsx'
import comics from '../../data/comics.js'
import LoadMore from './LoadMore.jsx'
import { useState } from 'react'

function Main() {
    const [comicSlice, setComicSlice] = useState(12)
    const [comicStart, setComicStart] = useState(0)
    return (
        <>
            <div className="jumbotron-wrapper">
                <Jumbotron />
            </div>
            <main className="container">
                <ul className="showcase-list d-flex flex-wrap list-unstyled row mx-auto container py-3 px-0">

                    {comics.slice(comicStart, comicSlice).map(({ id, title, thumb, series }) => (
                        <ShowcaseCard key={id} id={id} title={title} series={series} thumb={thumb} />
                    )
                    )}
                </ul>
                <LoadMore comicSlice={comicSlice} setComicSlice={setComicSlice} comicStart={comicStart} setComicStart={setComicStart} comics={comics} />
            </main>
        </>
    )
}
export default Main