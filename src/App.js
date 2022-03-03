//Components
import { StickyBin } from "./components/stickyBin";

//Styles
import "./styles/App.scss";

function App() {
    return (
        <div className="App">
            <div className="title-container">
                <h1>
                    Sticky Bin
                    <span role="img" aria-label="bin emoji">
                        🗑️
                    </span>
                </h1>
            </div>
            <StickyBin />
        </div>
    );
}

export default App;
