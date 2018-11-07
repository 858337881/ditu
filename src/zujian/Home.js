import React, { Component } from 'react'
import Header from './Reader'


// defaultProp:



export default class Home extends Component {
  constructor(){
    super()
    this.state = {
        title:"这是Home组件传过来的值",
        msg:"这是父组件中的msg"
    }
  }
  aaa(){
      alert("这是父组件里面的方法")
  }
  changeMsg = (res) =>{
      this.setState({
        mag:res
      })    
  }
getFooter = () => {
    this.setState({
        msg:this.refs.footer.state.title
    })
    this.refs.footer.run()
}
  render() {
    return (
      <div>
          <Header title1={this.state.title} bbb={this.aaa} ccc={this}/>
          <hr />
          <h2>我是父组件---组件</h2>
          <hr />
          <button onClick={this.getFooter}>获取footer组件的信息
          </button>
      </div>
    )
  }
}

