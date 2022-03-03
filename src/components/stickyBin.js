import React, {useState, useEffect} from "react";
import autosize from "autosize";

//styles
import "../styles/components/stickyBin/stickyBin.scss";

export const StickyBin = () => {
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false);

    //Allows autosize to ensure the input box resizes with the input length
    useEffect(() => {
        autosize(document.querySelectorAll("textarea"));
    }, [input])

    /* 
    We could only set the input state only once, when the post request is being made to the server,
    however I set it on every keystroke to enable us to easily add functionality such as maximum paste lengths etc
    */
    const submitHandler = async (event) => {
        setLoading(true)
        // await Call to API
        setLoading(false)
    };

    return (
        <div className="sticky-bin">
            <div className="input bin-container">
                <div className="title">
                    <h3>Content you wish to share:</h3>
                </div>
                <textarea
                    id="input"
                    className={`${loading ? "loading" : ""}`}
                    placeholder="Enter some content..."
                    onChange={(e) => setInput(e.target.value)}
                    onSubmit={submitHandler}
                />
            </div>
        </div>
    );
};
