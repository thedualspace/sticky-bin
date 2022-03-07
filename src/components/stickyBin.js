import React, { useState, useEffect } from "react";
import {Navigate} from "react-router-dom";
import autosize from "autosize";

//styles
import "../styles/components/stickyBin/stickyBin.scss";

export const StickyBin = () => {
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false);
    const [pasteURL, setPasteURL] = useState("");

    //Allows autosize to ensure the input box resizes with the input length
    useEffect(() => {
        autosize(document.querySelectorAll("textarea"));
    }, [input])

    /* 
    We could only set the input state only once, when the post request is being made to the server,
    however I set it on every keystroke to enable us to easily add functionality such as maximum paste lengths etc
    */
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        const URL = await postContent(e.target[0].value) 
        setPasteURL(URL);
        setLoading(false)
    };

    const postContent = async (content) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({content})
        };
        let response = await fetch("/api/paste", requestOptions);
        const { paste: {URL} } = await response.json();
        return URL
    }

    return pasteURL ? (
        <Navigate to={`/paste/${pasteURL}`} />
    ) : (
        <div className="sticky-bin">
            <div className="input bin-container">
                <div className="title">
                    <h3>Content you wish to share:</h3>
                </div>
                <form onSubmit={submitHandler}>
                <textarea
                    id="input"
                    className={`${loading ? "loading" : ""}`}
                    placeholder="Enter some content..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
