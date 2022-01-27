import React from "react";
import "../App.css"

class Xingdi extends React.Component {

    state = {
        count: 0
    }

    // 获取状态值
    getCount = () => {
        return this.state.count
    }

    // 设施状态值
    setCount = () => {
        const count = this.state.count + 1
        this.setState({
            count
        })
    }

    render() {
        return (
            <div>
                <Child1 count={this.state.count}/>
                <br/>
                <Child2 setCount={this.setCount} getCount={this.getCount}/>
            </div>
        )
    }
}


class Child1 extends React.Component {

    render() {
        return (
            <div>
                计数器：{this.props.count}
            </div>
        )
    }
}


class Child2 extends React.Component {

    setCount = () => {
        this.props.setCount()
    }

    render() {
        return (
            <div>
                <button onClick={this.setCount}>+1</button>
            </div>
        )
    }
}


export default Xingdi
