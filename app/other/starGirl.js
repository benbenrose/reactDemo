/**
 * Created by lili on 2016/11/22.
 */
import React from 'react';
import girl from '../images/girl.jpg';
import star from '../images/star.png';
class StartObj {
    constructor(ctx){
        this.starX;
        this.starY;
        this.ySpd;
        this.xSpd;
        this.starPic;
        this.timer;
        this.beta;
        this.ctx = ctx;
    }
    init(grilWidth,grilHeight) {//初始化星星的位置
        this.starX = Math.random() * grilWidth + 50;//x坐标不能超过girl图片范围最多50
        this.starY = Math.random() * grilHeight + 50;//x坐标不能超过girl图片范围最多50
        this.starPic = Math.floor(Math.random() * 7);//随机图片
        this.ySpd = Math.random() * 0.6 - 0.3;
        this.xSpd = Math.random() * 0.2 - 0.1;
        this.timer = 0;
        this.beta = Math.random() * Math.PI * 0.5;

    }
    update(){
        //随机位移
        this.xSpd = Math.random() * 0.2 - 0.1; //[0,2) [-1, 1)
        this.starX += this.xSpd;
        this.starY += this.ySpd;
        //超过范围重生init
        if (this.starX > (650) || this.starX < 40)
            this.init(600,300);
        else if (this.y > 350 || this.y < 40)
            this.init(600,300);

    }

    drawStar() {//画星星
        this.ctx.save();
        //globalAlpha 属性值必须是介于 0.0（完全透明） 与 1.0（不透明） 之间的数字。
        this.ctx.globalAlpha = Math.sin(this.beta) ;
        console.log(this.ctx.globalAlpha);
        let _this = this;
        this.preImage(star, function () {
            console.log(_this.starPic);
            _this.ctx.drawImage(this, _this.starPic * 7, 0, 7, 7, _this.starX, _this.starY, 7, 7)
        })
        this.ctx.restore();
    }

    preImage(url, callback) {
        let img = new Image();//创建一个图片，实现图片的预加载
        img.src = url;
        if (img.complete) {//如果图片已经存在于浏览器缓存，直接调用回调函数
            callback.call(this, img);
            return;// 直接返回，不用再处理onload事件
        }
        img.onload = function () {//图片下载完毕时异步调用callback函数。
            callback.call(this, img);//将回调函数的this替换为Image对象
        }
    }
}
class Main{
    constructor(canvas){
        this.ctx;
        this.starObj= [];
        this.canvas = canvas;
    }
    init(){
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = "#393550";
        this.ctx.fillRect(10,10,700,400);
        let _this  = this;
        this.preImage(girl,function(){
            _this.ctx.drawImage(this,50,50,600,300)
        });
        //初始化星星30颗
        for(let i = 0;i<30;i++){
            this.starObj[i] = new StartObj(this.ctx);
            this.starObj[i].init(600,300);
        }
        this.gameLoop();
    }
    gameLoop() {
        /* window.requestAnimationFrame(this.gameLoop.bind(this));*/
        let _this = this;
        for (let i = 0; i < 30; i++) {
            _this.starObj[i].update();
            _this.starObj[i].drawStar();
        }
        /* _this.gameLoop();*/
    }

    preImage(url,callback){
        let img = new Image();//创建一个图片，实现图片的预加载
        img.src = url;
        if(img.complete){//如果图片已经存在于浏览器缓存，直接调用回调函数
            callback.call(this,img);
            return;// 直接返回，不用再处理onload事件
        }
        img.onload = function(){//图片下载完毕时异步调用callback函数。
            callback.call(this,img);//将回调函数的this替换为Image对象
        }
    }
}
/*main*/
export default React.createClass({
    componentDidMount:function(){
        new Main(this.refs.myCanvas).init();
    },
    render:function(){
        return (<div>
                <canvas ref='myCanvas' width='700px' height='400px'></canvas>
            </div>
        )
    }
});
