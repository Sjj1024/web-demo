import React from "react";

class JiShu extends React.Component {

    // 标准语法
    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }
    // }

    // 简化语法
    state = {
        count: 0
    }

    // 解决this指向的问题。用剪头函数，应为剪头函数里的this指向指向外部程序，而不是函数本身
    addCount = () => {
        // setState要改哪个数据，就把哪个对象的键放进来
        console.log(this)
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                计数器: {this.state.count}
                {/*<div>*/}
                {/*    <button onClick={() => {*/}
                {/*        this.setState({*/}
                {/*            count: this.state.count + 1*/}
                {/*        })*/}
                {/*    }}>+1*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div>
                    <button onClick={this.addCount}>+1</button>
                </div>
            </div>
        )
    }
}


export default JiShu
