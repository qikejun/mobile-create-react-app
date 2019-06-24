import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './spikeList.scss';

import ProductImg from './../../img/shangpinliebiao.png';

import Panel from './../../component/panel';
import Btn from './../../component/btn';
export default class spikeList extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            titleText:'限时秒杀',
            time:'4月17日 10：00',
            timeText:'准时开抢',
            list:[
                {
                    id:'1',
                    panelTitle:'机票',
                    projectList:[
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        },
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        },
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        },
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        }
                    ]
                },
                {
                    id:'2',
                    panelTitle:'自由行',
                    projectList:[
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        },
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        },
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        },
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        }
                    ]
                },
                {
                    id:'3',
                    panelTitle:'跟团游',
                    projectList:[
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        },
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        },
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        },
                        {
                            href:'www.baidu.com',
                            src:ProductImg,
                            brand:'携程',
                            title:'国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游国庆7天甘肃游',
                            price:'¥99999元',
                            oldPrice:'199999元'
                        }
                    ]
                },
            ]
        };
    }

    render() {
        let D=this.state;
        return (
            <article>
                <div className='box'>
                    <i className="iconfont icon-xianshimiaosha"></i>
                    <span className="title">{D.titleText}</span>
                    <span className="time">{D.time}{D.timeText}</span>
                </div>
                {D.list.map((val,index)=>{
                    return (
                        <Panel className='panel' title={val.panelTitle} key={index}>
                            <ul className="list">
                                {
                                    val.projectList.map((val,index)=>{
                                        return (
                                            <li key={index}>
                                                <Link to={val.href}>
                                                    <img src={val.src} alt=""/>
                                                </Link>
                                                <div className="textBox">
                                                    <p className="brand">{val.brand}</p>
                                                    <p className="title">{val.title}</p>
                                                    <p className="price">{val.price}</p>
                                                    <del className="oldPrice">市场价：{val.oldPrice}</del>
                                                </div>
                                                <Btn>先睹为快</Btn>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Panel>
                    )
                })}
            </article>
        )
    }
}