import React,  { Component } from 'react'
import '../assets/css/index.css'
import axios from 'axios'
export default class Axios extends Component {
    constructor(){
        super()
        this.state = {
            list:[],
            a:'',
            y:''
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData=() => {
        var url = "https://www.apiopen.top/weatherApi?city=武汉"
    
        axios.get(url).then((res) => {
            console.log(res)
            this.setState({
                list:res.data.data.forecast,
                a:res.data.data.city,
                y:res.data.data.ganmao
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div className="aaa3">
                <div className="yubao">{this.state.y}</div>
                <hr />
                  {
                     this.state.list.map((val,key) =>{
                         return (
                             
                            <div key={key} className="aa2">
                            
                              <h1>{val.type}<span>{val.fengxiang}</span></h1>
                              <h5>{this.state.a}</h5>
                              <p className="p2">气温:{val.high}——{val.low}</p>
                              <p className="p1">{val.date}</p>
                              
                              <hr />
                            </div>
                         )  
                     })
                  }
            </div>

        )
    }
} 