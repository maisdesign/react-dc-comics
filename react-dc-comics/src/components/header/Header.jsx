import Nav from './Nav.jsx'

function Header({ activeData, setActiveData, setSliceEnd, setSliceStart }) {
    return (
        <>
            <header className="header">
                <Nav activeData={activeData} setActiveData={setActiveData} setSliceEnd={setSliceEnd} setSliceStart={setSliceStart} />
            </header>
        </>
    )
}
export default Header
