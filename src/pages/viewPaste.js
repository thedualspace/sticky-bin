import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Styles
import "../styles/pages/viewPaste.scss";

const ViewPaste = () => {
    const { pasteUrl } = useParams();
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            // If content is not returned from the server, content and lines are undefined.
            // We handle this error at render to display feedback to the user
            let response = await fetch(`/api/${pasteUrl}`);
            const { content } = await response.json();
            const lines = content?.split("\n");
            setContent(lines)
            setLoading(false)
        }

        fetchContent()
    }, [])

    return (
        <div className="view-paste page">
            <a className="title-container" href="/">
                <h1>
                    Sticky Bin
                    <span role="img" aria-label="bin emoji">
                        🗑️
                    </span>
                </h1>
            </a>
            {loading ? (
                // Shown while the GET request for the paste is in progress
                <div className="error">
                    <h2>Loading...</h2>
                </div>
            ) : !content?.length ? (
                // Shown if there is no paste at the address requested
                <div className="error">
                    <h2>No paste found!</h2>
                    <h4>This link may be invalid or it may have expired. Please check the address and try again.</h4>
                </div>
            ) : (
                // Shown only when the request has completed and a paste exists
                <div className="source">
                    <ol>
                        {content.map((line) => <li><div>{line}</div></li>)}
                    </ol>
                </div>
            )}
        </div>
    );
}

export default ViewPaste;