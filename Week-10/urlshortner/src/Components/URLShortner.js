import React, { useState } from 'react'

const URLShortner = () => {
    const [inputURL, setInputURL] = useState("");
    const [shortURL, setShortURL] = useState("");
    const shortenURL = () => {
        const path = `https://api.shrtco.de/v2/shorten?url=${inputURL}`;
        fetch(path)
            .then((data) => data.json())
            .then((response) => setShortURL(response.result.short_link));
    }
    return (
        <div className='input-wrapper'>
            <div className="">
                <input
                    type="text"
                    className="urlField"
                    value={inputURL}
                    placeholder="Shorten a link here..."
                    onChange={(e) => { setInputURL(e.target.value); }}
                /><button className="search-area__button" onClick={shortenURL}>Shorten it!</button>
            </div>
            <div className="shortURLDiv">
                <p>{shortURL}</p>
                <button className="copyBtn" onClick={() => navigator.clipboard.writeText(shortURL)}>COPY</button>
            </div>
        </div >
    )
}

export default URLShortner