import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './header.scss'

import topImg from './../../img/maintop1.png';
import enter1 from './../../img/1.png';
import enter2 from './../../img/2.png';
import enter3 from './../../img/3.png';
import enter4 from './../../img/4.png';
import enter5 from './../../img/5.png';

export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enters:[
                {
                    src:enter1,
                    href:'#1',
                    text:'机票'
                },
                {
                    src:enter2,
                    href:'#2',
                    text:'自由行'
                },
                {
                    src:enter3,
                    href:'#3',
                    text:'跟团游'
                },
                {
                    src:enter4,
                    href:'#4',
                    text:'休息室'
                },
                {
                    src:enter5,
                    href:'#5',
                    text:'签证'
                },
            ]
        };
    }

    render() {
        let D=this.state;
        return (
            <article className="header">
                <section>
                    <img src={topImg} alt=""/>
                    <Link to='/detail' className='link'>
                        点击了解集中出游活动规则 >
                    </Link>
                </section>
                <section className='list'>
                    {
                        D.enters.map((val, index)=>{
                            return (
                                <div className="item" key={index}>
                                    <Link to={val.href}>
                                        <img src={val.src} alt=""/>
                                    </Link>
                                    <span>{val.text}</span>
                                </div>
                            )
                        })
                    }
                </section>
            </article>
        )
    }
}