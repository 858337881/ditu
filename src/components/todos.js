import React ,{ Component } from 'react';
import '../assets/css/index.css'


class Todos extends Component{

     constructor(){
        super()
        this.state = {
          list : [
            {
              title:"1111",
              iscompleted:false,
              checked:false
            },
            {
              title:"222",
              iscompleted:false,
              checked:false
            },
            {
              title:"333",
              iscompleted:false,
              checked:true
            }
          ]
        }
     }
     addList = (ev) => {
       if(ev.keyCode == 13){
         let item = {
          title:this.refs.name.value,
          checked:false
       }
       this.refs.name.value = ""
       let newList = this.state.list
       newList.push(item)
       this.setState({
         list:newList
        })
         localStorage.setItem('todos',JSON.stringify(this.state.list))
       }  
    }
    componentDidMount(){
      this.setState({
        list: JSON.parse(localStorage.getItem('todos'))
      })
    }
    changSate = (key) =>{
      let newList = this.state.list
      newList[key].checked = !newList[key].checked
      this.setState({
        list:newList
      })
      localStorage.setItem('todos',JSON.stringify(this.state.list))
    }
    changA = (key,ev) =>{
      ev.persList()
      this.setState({
        newList[key].title =ev.target.value
        this.setState({
          list:newList
        })
      })
    }
    del = (key) => {
      let newList = this.state.list
      newList.splice(key,1)
      this.setState({
        list:newList
      })
      localStorage.setItem('todos',JSON.stringify(this.state.list))
    }
    doubleClick = (key) =>{
      let newList = this.state.list
      newList[key].iscompleted = true
      this.setState({
        list:newList
      })
    }
     render() {
      return (
<div className="App">

<div className="page-top">
    <div className="page-content">
      <h2>任务计划列表</h2>
    </div>
  </div>
  <div className="main">
    <h3 className="big-title">添加任务：</h3>
    <input placeholder="例如：吃饭睡觉打豆豆；    提示：+回车即可添加任务" className="task-input" type="text" onKeyUp={this.addList} ref="name" />

    
    <h3 className="big-title">任务列表：</h3>
    <span>未完成的任务</span>
    <ul>
      {
        this.state.list.map((val,key) => {
          if(!val.checked){
            return (
              <li key={key} ref="ccc" onDoubleClick={this.doubleClick.bind(this,key)}>
                 <div className="view" style={{display: (this.state.list[key].iscompleted==true) ? "none" :"block"}}>
                    <input type="checkbox" checked={val.checked} onChange={this.changSate.bind(this,key)}/>
                    <span>{val.title}</span>
                     ------<button onClick={this.del.bind(this,key)}>删除</button>
                 </div>
                 <input className="hopl" type="text" onKeyDown={this.doubleClick.bind(this,key)} value={val.title} onChange={this.changA.bind(this,key)} style={{display: (this.state.list[key].iscompleted==true) ? "none" :"block"}}>
              </li>
            )
          }
        })
      }
    </ul>
    <hr />
    <div className="tasks">
      <span className="no-task-tip">已完成的任务</span>
      <ul className="list">
      {
        this.state.list.map((val,key) => {
          if(val.checked){
            return (
              <li key={key} ref="ccc" onDoubleClick={this.doubleClick.bind(this,key)}>
                 <div className="view" style={{display: (this.state.list[key].iscompleted==true) ? "none" :"block"}}>
                    <input type="checkbox" checked={val.checked} onChange={this.changSate.bind(this,key)}/>
                    <span>{val.title}</span>
                     ------<button onClick={this.del.bind(this,key)}>删除</button>
                 </div>
                 <input className="hopl" type="text" onKeyDown={this.doubleClick.bind(this,key)} value={val.title} onChange={this.changA.bind(this,key)} style={{display: (this.state.list[key].iscompleted==true) ? "none" :"block"}}>
              </li>
            )
          }
        })
      }
    </ul>
    </div>
  </div>
  </div>
    )
  }
}

// class Person {
//   constructor(name){
//     this.name=name
//   }
// }
// class Student extends Person{
//   constructor(name,age){
//     super()//用在构造
//     this.age =age
//   }
// }

  export default Todos;