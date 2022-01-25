import React from "react";

// 类组件的使用
class HelloZuJian extends React.Component {
    render() {
        return (
            <a onClick={this.handleClick} href={"https://blog.csdn.net/weixin_44786530/article/details/122374751"}>我是a标签</a>
        )
    }

    handleClick(e) {
        // 阻止浏览器的默认行为
        e.preventDefault()
        console.log("按钮呗点击了")
    }
}

// 导出组件
export default HelloZuJian
