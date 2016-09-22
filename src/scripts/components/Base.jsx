'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Menu, MenuItem, Paper, AppBar } from 'material-ui';

const menus = ['hello world', 'desktop capture', 'file explorer'];
const selectedStyle = {
    backgroundColor : "rgba(0, 0, 0, 0.2)"
}

class Base extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    _handleItemTouchTap (event, menuItem, index) {
        location.href = `#/${menus[index]}`
    }

    render () {
        let { pathname } = this.props.location;
        pathname = pathname.substr(1);

        return (
            <MuiThemeProvider>
                <div id="app-wrap">
                    <Paper className="sideBar">
                        <div className="logo">
                            Electron Demos
                        </div>
                        <Menu onItemTouchTap={this._handleItemTouchTap.bind(this)}>
                            {menus.map((menuName, index) => {
                                return <MenuItem key={index} primaryText={menuName} style={menuName === pathname ? selectedStyle : null} />
                            })}
                        </Menu>
                    </Paper>
                    <div className="content-wrap">
                        <div className="content-header">
                            <span>Title</span>
                        </div>
                        <div className="content-area">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Base;
