import React, {Component} from 'react';

import './index.scss';

import Header from "./header";
import SpikeList from "./spikeList";
import Navbar from "./navbar";


export default class spike extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Header/>
                <SpikeList/>
                <Navbar/>
            </>
        )
    }
}