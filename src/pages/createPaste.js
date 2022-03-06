//Components
import { StickyBin } from "../components/stickyBin";

//Styles
import "../styles/pages/createPaste.scss";

function CreatePaste() {
    return (
        <div className="create-paste page">
            <a className="title-container" href="/">
                <h1>
                    Sticky Bin
                    <span role="img" aria-label="bin emoji">
                        🗑️
                    </span>
                </h1>
            </a>
            <StickyBin />
        </div>
    );
}

export default CreatePaste;