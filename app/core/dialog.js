/**
 * Created by lili on 2016/11/17.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class extends Component {
    appendMaskIntoDoc() {
        console.log("reactDom");
        console.log(...this.props);
        ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            <DialogComponent {...this.props}>
            </DialogComponent>,
            this.container
        )
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.container = document.createElement('div')
        document.body.appendChild(this.container)
        this.appendMaskIntoDoc()
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        this.appendMaskIntoDoc()
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        document.body.removeChild(this.container)
    }

    render() {
        return null
    }
}
let DialogComponent =  React.createClass({
    getInitialState:function(){
        return {
            show:true,
            title:"消息提示",
            msg:'',
            button:'',
            type:'warning'
        }
    },
    componentWillReceiveProps:function(nextProps){//已加载组件收到新的参数时调用
        console.log("componentWillReceiveProps");
        console.log(nextProps);
        this.setState({show:true});
    },
    isConfirm:function(evt){
        console.log(evt);
        let name = evt.target.getAttribute("name");
        this.props.options.callback.call(this,name);//第二个this改变this指向
        this.setState({show:false});
    },
    render:function(){
        /*2016-11-17 start*/
        document.body.style = this.state.show ? 'overflow:hidden':'';
        /*2016-11-17 end*/
        let options = this.props.options  ;//{title:"消息提示",msg:"确认删除？",button:"cancel/confirm",type:"warning/error/success"}
        /*let btns = options.button.split("#");
         let [arr, newArr] = [[{key: 1, name: "queding", id: "cancel"}],[]];
         arr.forEach((idx, item) => {
         if(btns.indexOf(item.id) !== -1) newArr.push(item);
         })
         newArr.forEach()*/
        let nodeButton = [];
        var _nodeCon = <span className="info-button-left" name="confirm" onClick={this.isConfirm}>确定</span>;
        var _nodeCan = <span className="info-button-right" name="cancel"  onClick={this.isConfirm}>取消</span>;
        if(options.button.indexOf("confirm") != -1){
            nodeButton.push(_nodeCon);
        }else if(options.button.indexOf("cancel") != -1 ){
            nodeButton.push(_nodeCan);
        }else{
            nodeButton.push(_nodeCon);
            nodeButton.push(_nodeCan);
        }
        return<div style={{display:this.state.show?null:'none'}}>
            <div className="info-main-box">
                <div className="info-back"></div>
                <div className="info-content">
                    <div className="info-main">
                        <div className="info-head">
                            {options.title}<span className="info-close rtliconfont icon-close-mult" ></span>
                        </div>
                        <div className={options.type == 'warning'? 'info-img rtliconfont icon-warning color-yellow font60':options.type == 'error'?'info-img rtliconfont icon-error color-red font60':'info-img rtliconfont icon-right color-green font60'}></div>
                        <div className="info-font"><span>{options.msg}</span></div>
                        <div className="info-button">{nodeButton}</div>
                    </div>
                </div>
            </div>
        </div>;
    }
});
