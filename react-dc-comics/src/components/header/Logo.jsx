import logoImg from '../../assets/dc-logo.png'
function Logo() {
    return (
        <a className="navbar-brand" href="#">
            <img src={logoImg} alt="Logo Dc Comics" className="logo-img" />
        </a>
    )
}
export default Logo