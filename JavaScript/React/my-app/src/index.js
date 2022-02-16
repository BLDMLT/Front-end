// 1 导入react
import React from "react";
import ReactDom from "react-dom";
// 引入css
import './css/index.css'
import Hello from './Hello'
// 使用 JSX创建react元素
const isLoading = true
// const loadData = () => {
//     if (isLoading) {
//         return <div>loading...</div>
//     }
//     return <div>数据加载完成</div>
// }
// 三元表达式
const loadData = () => {
    return isLoading ? (<div>loading...</div>) : (<div>数据加载完成</div>)
}
const songs = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
]
// map 遍历要加key属性且唯一
// 遍历谁给谁加
const list = (
    <ul>
        {songs.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
)


const title = (
    <h1 className="title">
        www
    </h1>
)

// function Hello() {
//     return (
//         <div>函数组件</div>
//     )
// }
// 箭头函数
// const Hello = () => <div>函数组件</div>

// class Hello extends React.Component {
//     render() {
//         return (
//             <div>类组件</div>
//             // 名称大写开头
//             // 继承React.Component
//             // 必须有render()
//             // 必须有返回值

//         )
//     }
// }

// class App extends React.Component {
//     handleClick() {
//         console.log('单击事件')
//     }
//     render() {
//         return (
//             <button onClick={this.handleClick}>点我</button>
//         )
//     }
// }

// function App() {
//     function handleClick() {
//         console.log('单击事件')
//     }
//     return (
//         <button onClick={handleClick}>点我</button>
//     )
// }
// class App extends React.Component {
//     handleClick(e) {
//         e.preventDefault()

//         console.log('单击事件')
//     }
//     render() {
//         return (
//             <a href="http://google.com" onClick={this.handleClick}>Google</a>
//         )
//     }
// }
// class App extends React.Component {

//     state = {
//         count: 0,
//         test: 'a'
//     }
// 


//     render() {
//         return (
//             <div>
//                 <h1>计数器：{this.state.count}</h1>
//                 <button onClick={() => {
//                     this.setState({
//                         count: this.state.count + 1
//                         // 不能直接改数据
//                     })

//                 }}>+1</button>
//             </div>
//         )
//     }
// }
class App extends React.Component {
    state = {
        text: ''
    }
    handleChange = e => {
        this.setState({
            txt: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.txt} onChange={this.handleChange} />
            </div>
        )
    }
}
ReactDom.render(<App />, document.getElementById('root'))