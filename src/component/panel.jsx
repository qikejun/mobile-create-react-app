import React, {Component} from 'react';

import './panel.scss';

export default class panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'panel模块的标题'
        };
    }

    render() {
        let Dp=this.props;
        return (
            <>
                <section className='panel'>
                    <span className='title'>{Dp.title}</span>
                    {this.props.children}
                </section>
            </>
        )
    }
}