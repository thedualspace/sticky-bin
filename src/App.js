import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";

// Pages
import CreatePaste from "./pages/createPaste";
import ViewPaste from "./pages/viewPaste";

// Styles
import "./styles/App.scss";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<CreatePaste />} />
                    <Route path="/paste/:pasteUrl" element={<ViewPaste />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
