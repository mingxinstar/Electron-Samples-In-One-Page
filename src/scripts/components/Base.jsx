'use strict';

import React from 'react';

class Base extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <div>
                Base
            </div>
        )
    }
}

export default Base;
