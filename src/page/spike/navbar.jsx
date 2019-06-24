import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import'./navbar.scss';


export default class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {
                    link:'/',
                    icon:'icon-shouyeshixin',
                    text:'首页'
                },
                {
                    link:'/chu',
                    icon:'icon-xiujiachuyoukongxin',
                    text:'集体出游'
                },
                {
                    link:'/ding',
                    icon:'icon-dingdankongxin',
                    text:'订单'
                },
            ]
        };
    }

    render() {
        let D=this.state;
        return (
            <>
                <ul className='navbar'>
                    {
                        D.list.map((val, index)=>{
                            return (
                                <li key={index}>
                                    <Link to={val.link}>
                                        <span className={`iconfont ${val.icon}`}></span>
                                        <p>{val.text}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}