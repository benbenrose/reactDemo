/**
 * Created by lili on 2016/11/
 */
import React from 'react';
import $ from '../core/jquery.min.js';
import PromptIn from '../core/dialog.js';
export default React.createClass({
    getInitialState:function(){
        const initParams={
            tableData:[],
            pageNo:1,
            pageCount:100,
            pageSize:10,
            promopt:""
        };
        return initParams;
    },
    componentDidMount:function(){
        this.getListData(true);
    },
    getListData:function(isInit){
        $.ajax({
            method:'GET',
            dataType:"json",
            data:{},
            url:"../mokeData/userInfoList.json",
            success:function(data){
                console.log(data);
                let pageNo = this.state.pageNo;
                if(isInit){
                    this.setState({pageCount:data.model.count});
                }
                this.setState({tableData:data.model.data.splice((pageNo-1)*10,10)});
            }.bind(this),
            error:function(){
                console.log("error..................");
            }.bind(this)
        });
    },
    LookInfo:function(){
        console.log("lookInfo..................");
    },
    delInfo:function(){
        console.log("delInfo..................");
        this.setState({promopt:{title:"消息提示",msg:"确认删除？",button:"",type:"error",callback:this.isConfirm}});

    },
    isConfirm:function(evt){
        console.log("dianj");
        console.log(evt);
    },
    render:function(){
        let tableNode = [],
            tableData = this.state.tableData;
        tableData.forEach((obj,index) =>{
            var node = <tbody key={index}>
            <tr>
                <td>{obj.userCode}</td>
                <td>{obj.userName}</td>
                <td>{obj.userSex}</td>
                <td>{obj.userAge}</td>
                <td>{obj.userLove}</td>
                <td>{obj.userMarry}</td>
                <td>
                    <button className="btn btn-info" onClick={this.LookInfo}>查看</button>
                    <button className="btn btn-del" onClick={this.delInfo}>删除</button>
                </td>
            </tr>
            </tbody>;
            tableNode.push(node);
        });
        let promotNode = [];
        if(this.state.promopt != ""){
            promotNode =  <PromptIn options={this.state.promopt}></PromptIn>;
        }
        return(
            <div className="p5">
                <div className="search-well">
                    searchContent
                </div>
                <div className="table-well">
                    <table className="table-box">
                        <thead>
                        <tr><th>用户编码</th><th>用户名字</th><th>用户性别</th><th>用户年龄</th><th>用户爱好</th><th>婚姻状况</th><th>操作</th></tr>
                        </thead>
                        {tableNode}
                    </table>
                </div>
                <div className="page-box">
                </div>
                {promotNode}
            </div>

        );
    }
});

/*
let data = [];
for(let i = 0;i<100;i++){
    let data1 = {
        "id":i,
        "userCode":"00"+i,
        "userName":"mengmeng"+i,
        "userSex":"女",
        "userAge":Math.floor(Math.random()*50),
        "userLove":"羽毛球"+i,
        "userMarry":"未知"
    }
    data.push(data1);
}
console.log(JSON.stringify(data));*/
