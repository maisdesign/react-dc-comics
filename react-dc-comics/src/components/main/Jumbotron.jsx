import jumbotronImg from '../../assets/jumbotron.jpg'
function Jumbotron() {
    return (

        <div className="container-fluid jumbotron px-0">
            <a href="#" className="jumbotron-link">
                <img src={jumbotronImg} alt="DC Universe" className="jumbotron-img img-fluid" />
            </a>
        </div>
    )
}
export default Jumbotron