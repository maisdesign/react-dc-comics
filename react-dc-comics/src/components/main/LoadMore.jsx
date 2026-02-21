
function LoadMore({ setSliceEnd, sliceEnd, setSliceStart, sliceStart, activeData }) {

    function resetLoadMore() {
        if (sliceEnd >= activeData.length) {
            setSliceStart(0);
            setSliceEnd(12);
        } else {
            setSliceEnd(sliceEnd + 6); setSliceStart(sliceStart + 6);
        }
    }
    return (
        <>
            <div className="loadmore-container mx-auto col-6 col-md-2 my-3">

                <button className="loadmore-button" onClick={() => { resetLoadMore(); }}>Load More</button>
            </div>
        </>
    )
}

export default LoadMore
