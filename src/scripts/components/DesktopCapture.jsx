"use strict";

import React from 'react';
// import { desktopCapturer } from 'electron';
const { desktopCapturer } = electronRequire('electron');

const codeStr = '\
desktopCapturer.getSources({types: ["window", "screen"]}, (error, sources) => {<br />\
    if (error) throw error<br />\
    for (let i = 0; i < sources.length; ++i) {<br />\
        if (sources[i].name === "Electron") {<br />\
            navigator.webkitGetUserMedia({<br />\
                audio: false,<br />\
                video: {<br />\
                    mandatory: {<br />\
                        chromeMediaSource: "desktop",<br />\
                        chromeMediaSourceId: sources[i].id,<br />\
                        minWidth: 1280,<br />\
                        maxWidth: 1280,<br />\
                        minHeight: 720,<br />\
                        maxHeight: 720<br />\
                    }<br />\
                }<br />\
            }, handleStream, handleError)<br />\
            return<br />\
        }<br />\
    }<br />\
})<br />\
';

class DesktopCapture extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            src : ''
        };
    }

    _renderCode () {
        return codeStr.split('<br />').map((codeSnippet, index) => {
            return <span key={index}>{codeSnippet}<br /></span>
        });
    }

    _startCapture () {
        desktopCapturer.getSources({types : ['window', 'screen']}, (err, sources) => {
            if (err) {
                throw err;
            }

            for (let i = 0; i < sources.length; i++) {

                if (sources[i].name === 'Entire screen') {
                    navigator.webkitGetUserMedia({
                        audio : false,
                        video: {
                            mandatory: {
                                chromeMediaSource: 'desktop',
                                chromeMediaSourceId: sources[i].id,
                                minWidth: 800,
                                maxWidth: 800,
                                minHeight: 600,
                                maxHeight: 600
                             }
                        }
                    }, this._setStrem.bind(this), (err) => {
                        console.log(err);
                    })

                    return;
                }
            }
        })
    }

    _setStrem (stream) {
        console.log(stream, URL.createObjectURL(stream));

        this.setState({
            src : URL.createObjectURL(stream)
        })
    }

    componentDidMount () {
        this._startCapture();
    }

    render () {
        return (
            <div>
                <h1>DesktopCapture</h1>
                <h4>Code:</h4>
                <pre>
                    <code>{this._renderCode()}</code>
                </pre>
                <h4>Demo:</h4>
                <video src={this.state.src} width="800" height="600"></video>
            </div>
        )
    }
}

export default DesktopCapture;
