import React from "react";
import PropTypes from "prop-types";

class Jiaoyan extends React.Component {
    render() {
        console.log(this.props.duixiang)
        return (
            <div>
                我是校验规则的页面
                <br/>
                这是字符串：{this.props.zifuchuan}
                <br/>
                这是数字:{this.props.shuzi}
                <br/>
                是函数:{this.props.function()}
                <br/>
                是数组:{
                this.props.shuzu.map(item =>
                    <li key={item}>
                        {/*里面的数据一定要带上括号*/}
                        {item}
                    </li>)}
                是对象姓名:{this.props.duixiang.name}
                是对象年龄:{this.props.duixiang.age}
            </div>
        );
    }
}

Jiaoyan.propTypes = {
    zifuchuan: PropTypes.string,
    shuzi: PropTypes.number,
    function: PropTypes.func,
    shuzu: PropTypes.array.isRequired,
    duixiang: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    })
}


export default Jiaoyan
