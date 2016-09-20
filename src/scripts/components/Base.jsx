'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Menu, MenuItem, Paper, AppBar } from 'material-ui';

const menus = ['hellow world', 'desktop capture', 'file explorer'];

class Base extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        console.log(this.props);

        return (
            <MuiThemeProvider>
                <div id="app-wrap">
                    <Paper className="sideBar">
                        <div className="logo">
                            Electron Demos
                        </div>
                        <Menu>
                            {menus.map((menuName, index) => {
                                return <MenuItem key={index} primaryText={menuName} />
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
