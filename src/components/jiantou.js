// 剪头函数
const Zujian = () => {

    function zuJian() {
        console.log("函数处理程序")
    }

    return <div onMouseEnter={zuJian}>我是一个剪头函数组件啊</div>
}

export default Zujian
