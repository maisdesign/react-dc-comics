import SignupButton from './SignupButton.jsx'
import SocialLinks from './SocialLinks.jsx'

function BottomFooter() {
    return (
        <div className="bottom-footer">
            <div className="container d-flex justify-content-between align-items-center py-3 flex-md-row flex-column">
                <SignupButton />
                <SocialLinks />
            </div>
        </div>
    )
}

export default BottomFooter