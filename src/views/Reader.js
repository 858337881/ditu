import React,  { Component } from 'react'
import '../assets/css/index.css'
import axios from 'axios'
// import BScroll from 'better-scroll'

export default class Axios extends Component {
    constructor(){
        super()
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        this.getData()
//         let wrapper = document.querySelector('.wrapper')
// let scroll = new BScroll(wrapper)
        // setTimeout(() => {
        //     if(!this.scroll) {
        //        this.scroll = new BScroll(this.refs.wrapper,{})
        //        this.scroll.on('touchEnd', (pos) => {
        //            console.log(1)
        //         //    下拉动作
        //         if(pos.y > 100) {
        //             this.getData()
        //         }
        //        })
        //     }else{
        //         this.scroll.refresh()
        //     }
        // },4000)
    }
    getData=() => {
        var url = "https://www.apiopen.top/satinGodApi?type=1&page=1"
    
        axios.get(url).then((res) => {
            console.log(res)
            this.setState({
                list:res.data.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div className="wrapper">
              <ul className="content1">
                  {
                     this.state.list.map((val,key) =>{
                         return (
                            <li key={key}>
                              <h3 className="home1"><img src={val.header} /><p>{val.username}</p>  </h3>   
                              <span>{val.passtime}</span>
                              <p>{val.text}</p>
                              <p>{val.top_commentsContent}</p>
                              <video src={val.video} controls></video>
                            </li>
                         )  
                     })
                  }
              </ul>
            </div>
        )
    }
} 