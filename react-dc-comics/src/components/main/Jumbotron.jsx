import jumbotronImg from '../../data/jumbotronImg.js'
import navLinks from '../../data/navLinks.js'
function Jumbotron({ activeData }) {

    const activeNavLink = (navLinks.find((link) => link.data === activeData)).label.toLowerCase()

    const currentJumboImage = jumbotronImg.find((img) => img.id === activeNavLink)

    return (
        <div className="container-fluid jumbotron px-0">
            <a href="#" className="jumbotron-link">
                <img src={currentJumboImage.data} alt="DC Universe" className="jumbotron-img img-fluid" />
            </a>
        </div>
    )
}
export default Jumbotron