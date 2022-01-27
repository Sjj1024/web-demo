import React from "react";
import "../App.css"
import PropTypes from "prop-types"

class Chuanzhi extends React.Component {

    state = {
        msg: ""
    }

    callBack = (msg) => {
        console.log("父组件接收到的消息是:", msg)
        this.setState({
            msg
        })
    }

    render() {
        this.props.fn()
        console.log(this.props)
        return (
            <div className={"fuzujian"}>
                接收到的值是:{this.props.age}
                接收到的颜色是: {this.props.colors.toString()}
                {
                    this.props.colors.map(item =>
                            <li key={item}>item</li>
                    )
                }
                <br/>
                这是父组件接收到子组件的消息:{this.state.msg}
                <Child callback={this.callBack}/>
            </div>
        )
    }
}

Chuanzhi.propTypes = {
    colors: PropTypes.array,
    age: PropTypes.number.isRequired,
    msg: PropTypes.string
}

class Child extends React.Component {
    handleMsg = () => {
        this.props.callback("教你开火车吧")
    }

    render() {
        return (
            <div className={"zizujian"}>
                这是子组件
                <button onClick={this.handleMsg}>点击传递消息给父组件</button>
            </div>
        )
    }
}

export default Chuanzhi
