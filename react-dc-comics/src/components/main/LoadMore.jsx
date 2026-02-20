
function LoadMore({ setComicSlice, comicSlice, setComicStart, comicStart, comics }) {

    function resetLoadMore() {
        if (comicSlice >= comics.length) {
            setComicStart(0);
            setComicSlice(12);
        } else {
            setComicSlice(comicSlice + 6); setComicStart(comicStart + 6);
        }
    }
    return (
        <>
            <div className="loadmore-container mx-auto col-2 my-3">

                <button className="loadmore-button" onClick={() => { resetLoadMore(); }}>Load More</button>
            </div>
        </>
    )
}

export default LoadMore