"use strict";

import React from 'react';
// import { desktopCapturer } from 'electron';
const { desktopCapturer } = electronRequire('electron');

class DesktopCapture extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <div>
                DesktopCapture
            </div>
        )
    }
}

export default DesktopCapture;
