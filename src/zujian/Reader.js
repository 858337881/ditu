import React, { Component } from 'react'


export default class Head extends Component {
    constructor(porps){
        super(porps)
    }
    render() {
        return (
        <div>
            <h1>这是公共的头部</h1>
            <h3>{this.props.title1}</h3>
            <h4>{this.props.ccc.state.msg}</h4>
            <button onClick={this.props.ccc.changeMsg.bind(this,"我是子组件传过来的想改变父组件的值")}>改变父组件Msg的值
            </button>
            <button onClick={this.props.bbb}>我想调用父组件的aaa方法</button>
        </div>
        )
    }
} 

// Headers.defaultProps= {
//      title1:"这是一个默认的数据"
// }