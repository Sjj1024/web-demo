import React from "react";

// 受控组件
class Wenbenkuang extends React.Component {
    state = {
        text: "",
        content: "",
        selValue: "bj",
        isChecked: false
    }

    handleBand = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSelect = (e) => {
        this.setState({
            selValue: e.target.value
        })
    }

    // 复选框的选中状态
    handleCheckBox = (e) => {
        this.setState({
            isChecked: e.target.checked
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.handleBand}/>
                <textarea value={this.state.content} onChange={this.handleContent}/>
                <select value={this.state.selValue} onChange={this.handleSelect}>
                    <option value="sh">上海</option>
                    <option value="bj">北京</option>
                    <option value="sz">深圳</option>
                </select>
                <input type="checkbox" value={this.state.isChecked} onChange={this.handleCheckBox}/>
            </div>
        )
    }
}


export default Wenbenkuang
