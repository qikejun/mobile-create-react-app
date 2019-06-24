import React, {Component} from 'react';

import './btn.scss';

export default class btn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='btn'>
                {this.props.children}
            </div>
        )
    }
}