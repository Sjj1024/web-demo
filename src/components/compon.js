// 函数组件
function Component() {

    function handleCli() {
        console.log("函数组件被点击了")
    }

    return (
        <button onClick={handleCli}>我是一个组建啊</button>
    )
}

export default Component
