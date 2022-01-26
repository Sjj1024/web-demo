// 导入react
import React from "react";
import ReactDom from "react-dom"
import "./index.css"
import HelloZuJian from "./components/zujian";
import Component from "./components/compon";
import Zujian from "./components/jiantou";
import JiShu from "./components/jishu";
import Wenbenkuang from "./components/wenbenkuang";
import Pinglun from "./components/pinglun";

// 创建元素
// const tit = React.createElement("h3", null, "Hello 脚手架")

const name = "song"
const age = 19
const isLoading = false

const loadData = () => {
    // if (isLoading) {
    //     return (<div>正在加载中......</div>)
    // }
    // return (<div>数据加载完成</div>)
    // 使用三元表达式实现
    return isLoading ? (<div>正在加载中......</div>) : (<div>数据加载完成</div>)
}

const songs = [
    {id: 1, name: "热门排行"},
    {id: 2, name: "推荐列表"},
    {id: 3, name: "默认选项"},
]


// const tit = (
//     <div>
//         <h1 className={"title"}>Hello World</h1>
//         <span>我是{name}, 年龄:{age}</span>
//         <span>{loadData()}</span>
//         <ul>
//             {/*{songs.map(item => <li id={item.id}>{item.name}</li>)}*/}
//             {songs.map(item => <li key={item.id}>{item.name}</li>)}
//         </ul>
//         <Component/>
//         <Zujian/>
//         <HelloZuJian/>
//         <JiShu/>
//         <Wenbenkuang/>
//     </div>
// )

const tit = (
    <div>
        <Pinglun/>
    </div>
)

ReactDom.render(tit, document.getElementById("root"))
