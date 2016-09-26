'use strict';

import React from 'react';

class Extra extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <div>
                <h1>Extra</h1>
                <ul>
                    <li><a href="http://electron.atom.io/docs/api/auto-updater/" target="_blank">auto updater</a></li>
                </ul>
            </div>
        )
    }
}

export default Extra;
