import React from "react";

const {Provider, Consumer} = React.createContext()


class Kuazujian extends React.Component {
    render() {
        console.log("children的值是：", this.props.children)
        return (
            <Provider value={"老师"}>
                <div>
                    <Chi1/>
                    {this.props.children}
                </div>
            </Provider>
        );
    }
}

class Chi1 extends React.Component {
    render() {
        return (
            <div>
                <Chi2/>
            </div>
        );
    }

}

class Chi2 extends React.Component {
    render() {
        return (
            <div>
                <Chi3/>
            </div>
        );
    }
}

class Chi3 extends React.Component {
    render() {
        return (
            <div>
                <Consumer>
                    {data => <div>子节点收到的数据:{data}</div>}
                </Consumer>
            </div>
        );
    }
}

export default Kuazujian
