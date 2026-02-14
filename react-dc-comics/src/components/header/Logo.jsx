import logoImg from '../../assets/dc-logo.png'
function Logo() {
    return (
        <div className="logo">
            <img src={logoImg} alt="Logo Dc Comics" className="logo-img" />
        </div>
    )
}
export default Logo