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
        const target = e.target
        console.log(target.checked)
        const name = target.name
        const value = target.type === "checkbox"
            ? target.checked
            : target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                {/*设施一个name属性，通过name属性修改状态*/}
                <input type="text" name="text" value={this.state.text} onChange={this.handleBand}/>
                <textarea name={"content"} value={this.state.content}  onChange={this.handleBand}/>
                <select name={"selValue"} value={this.state.selValue} onChange={this.handleBand}>
                    <option value="sh">上海</option>
                    <option value="bj">北京</option>
                    <option value="sz">深圳</option>
                </select>
                <input type="checkbox" name={"isChecked"} value={this.state.isChecked} onChange={this.handleBand}/>
            </div>
        )
    }
}


export default Wenbenkuang
