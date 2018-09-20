import React,{Component} from "react";
import ReactDOM from "react-dom";
require('./style.css')

//引入样式
import "./styles/main.less";
//引入组件
// import "./components/main.js";

//自己学习
import "./study/study"

// //TodoList组件是一个整体的组件，最终React也只渲染这个组件

// //TodoList组件是两个组件的集合
// class TodoList extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			todolist: [],
// 			nowTime:new Date(),
// 			value: 'Hello world!',
// 			clickValue: '点击之前'
// 		}
// 		this.timeID = null;
// 	}
// 	//挂载
// 	componentDidMount(){
// 		this.timeID = setInterval(
// 			()=>{
// 				this.setState({nowTime: new Date()})
// 			},1000)
// 	}
// 	//卸载
// 	componentWillUnmount(){
// 		clearInterval(this.timeID);
// 	}
// 	handleAdd(mes) {
// 		this.setState({
// 			todolist: mes
// 		});
// 	}
// 	// change
// 	handleChange(e) {
// 		this.setState({
// 			value: e.target.value
// 		})
// 	}
// 	//表单提交
// 	handleSubmit(e){
// 		alert('Your select is:' + this.state.value);
// 		e.preventDefault();
// 	}
// 	//点击事件
// 	handleClick(e){
// 		this.setState({
// 			clickValue:'点击之后'
// 		})
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1 className="top">react-todolist</h1>
// 				<Timer data = {this.state.nowTime.toLocaleTimeString()}/>
// 				<Sync syncDate = {this.state.value} updateStateProp={this.handleChange.bind(this)}/>
// 				<SelectOrder value={this.state.value} updateSubmit={this.handleSubmit.bind(this)} updateStateProp={this.handleChange.bind(this)}/>
// 				<TypeNew todo={this.state.todolist} add={this.handleAdd.bind(this)} />
// 				<ClickEvent clickValue={this.state.clickValue} clickChange={this.handleClick.bind(this)}/>
// 				<ListTodo todo={this.state.todolist} del={this.handleAdd.bind(this)}  />
// 			</div>
// 		);
// 	}
// };
// // 时间组件小练
// class Timer extends Component {
// 	render() {
// 		return (
// 			<div>
// 				{/* <h2 className="timer">现在的时间：{this.props.data}</h2> */}
// 				<h2 className="timer">现在的时间：{this.props.data}</h2>
// 			</div>
// 		)
// 	}
// }

// // 同步组件
// class Sync extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<input type="text" value={this.props.syncDate} onChange={this.props.updateStateProp}/>
// 				<h4>{this.props.syncDate}</h4>
// 			</div>
// 		)
// 	}
// }

// //select下拉菜单
// class SelectOrder extends Component {
// 	render (){
// 		return (
// 			<form onSubmit={this.props.updateSubmit}>
// 				<label>
// 					选择你喜欢的
// 					<select value={this.props.value} onChange={this.props.updateStateProp}>
// 						<option value='gg'>google</option>
// 						<option value='fx'>firefox</option>
// 						<option value='ie'>internetExplorer</option>
// 					</select>
// 				</label>
// 				<input type="submit" value="提交"/>
// 			</form>
// 		)
// 	}
// }

// //点击事件
// class ClickEvent extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.props.clickChange}>点我</button>
// 				<h4>{this.props.clickValue}</h4>
// 			</div>
// 		)
// 	}
// }
// // 添加组件
// class TypeNew extends Component {
// 	addContent(e) {
// 		e.preventDefault();//防止元素发生默认的行为
//     var tet = this.refs.content.value.trim();
// 		if (tet != '') {
// 			this.props.todo.push(tet);
// 			this.props.add(this.props.todo);
// 		}
// 		this.refs.content.value = '';
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.addContent.bind(this)} className="form">
// 				<input type="text" ref="content" placeHolder="请输入您的todolist" className="input" />
// 				<input type="submit" value="添加" className="add" />
// 			</form>
// 		);
// 	}
// };
// // 删除组件
// class ListTodo extends Component {
// 	delContent(e) {
// 		var i = e.target.getAttribute("data-index");
// 		this.props.todo.splice(i, 1);
// 		this.props.del(this.props.todo);
// 	}

// 	render() {
// 		return (
// 			<ul id="todo-list">
// 				{
// 					this.props.todo.map(function (mes, i) {
// 						return (
// 							<li className="content">
// 								<label>{mes}</label>
// 								<span className="del" onClick={this.delContent.bind(this)} data-index={i}>×</span>
// 							</li>
// 						);
// 					}.bind(this))
// 				}
// 			</ul>
// 		);
// 	}
// };

// ReactDOM.render(
// 	<TodoList />,
// 	document.getElementById("app")
// )

// var myStyle = {
// 	fontSize: 100,
// 	color: '#f00'
// }
// ReactDOM.render(
// 	<h1 style={myStyle} >学习react</h1>,
// 	document.getElementById("example")
// )