import React from "react";
import '../App.css';

class Pinglun extends React.Component {

    state = {
        user: "",
        content: "",
        comments: [
            {id: 1, user: "jack", content: "1024"},
            {id: 2, user: "song", content: "感谢分析哪个"},
            {id: 3, user: "ma", content: "沙发"},
        ]
    }

    handleBand = (e) => {
        const target = e.target
        const name = target.name
        const value = target.type === "checkbox"
            ? target.checked
            : target.value
        this.setState({
            [name]: value
        })
    }

    addComment = () => {
        // 取出state里面的内容
        const {user, content, comments} = this.state
        console.log(user, content)
        // 判断输入的内容是不是为空
        if (user.length === 0 && content.length === 0) {
            alert("请输入内容后再提交")
            return
        }
        const newComments = [{
            id: Math.random(),
            // 键和值一样的话，可以只写一个
            user,
            content
        },...comments];
        this.setState({
            comments: newComments,
            // 清空文本框的值
            user: "",
            content: ""
        })

    }

    renderCommentList = () => {
        // 渲染评论内容
        // return (this.state.comments.length === 0
        //     ? (<div className={"no-comment"}>还没有评论～</div>)
        //     : (<ul>
        //         {
        //             this.state.comments.map(item =>
        //                 <li key={item.id}>
        //                     <h3>评论人:{item.user}</h3>
        //                     <p>评论内容: {item.content}</p>
        //                 </li>
        //             )
        //         }</ul>))

        if (this.state.comments.length === 0) {
            return (<div className={"no-comment"}>还没有评论～</div>)
        } else {
            return (<ul>
                {
                    this.state.comments.map(item =>
                        <li key={item.id}>
                            <h3>评论人:{item.user}</h3>
                            <p>评论内容: {item.content}</p>
                        </li>
                    )
                }</ul>)
        }

    }

    render() {
        return (
            <div className={"app"}>
                <div>
                    <input type="text" className={"user"} name="user" value={this.state.user} placeholder={"请输入评论人"}
                           onChange={this.handleBand}/>
                    <br/>
                    <textarea name="content" className={"content"} value={this.state.content} cols="30" rows="10"
                              placeholder={"请输入评论内容"} onChange={this.handleBand}/>
                    <br/>
                    <button className={"btn"} onClick={this.addComment}>发表评论</button>
                </div>
                {/*渲染评论列表*/}
                {this.renderCommentList()}


            </div>
        )
    }
}

export default Pinglun
