
import React, { useEffect, useState } from "react";
import nasaAbout from '../texts/nasa-about.txt'

function About() {
    const [text, setText] = useState([]);
    const getText = async (text) => {
        const res = await fetch(text);
        const data = await res.text();
        setText(data.split('*'))
        console.log(data.split('*').length);
    }
    useEffect(() => { getText(nasaAbout) }, [])

    return (
        <>

            <div className="container">
                <div className="row m-2">
                    <div id="information">
                        <h3>Nasa- National Aeronautics and Space Administration</h3>
                        <div style={{ textAlign: "start" }}>{text[0]}</div>
                    </div>
                </div>
                <div className="row m-2">
                    <div id="research">
                        <h3>Nasa-History</h3>
                        <div style={{ textAlign: "start" }}>{text[1]}</div>
                    </div>
                </div>
                <div className="row m-2">
                    <div id="impact">
                        <h3>Nasa-Research</h3>
                        <div style={{ textAlign: "start" }}>{text[2]}</div>
                    </div>
                </div>
                <div className="row m-2">
                    <div id="impact">
                        <h3>Nasa-Environmental impact</h3>
                        <div style={{ textAlign: "start" }}>{text[3]}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;