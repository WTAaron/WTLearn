/**
 * Created by Administrator on 2017/1/6.
 */

/**
 * 构造函数
 * @param {object} option 参数
 * @constructor
 */
function ColorBall(option){
    this._init(option);
}

ColorBall.prototype = {
    _init: function(option){
        option = option || {};
        // 属性
        this.parentId = option.parentId;
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.r = 60;
        this.bgColor = option.bgColor || 'red';

        // 三个变化的属性
        this.dX = _.random(-5, 5);
        this.dY = _.random(-5, 5);
        this.dR = _.random(1, 3);
    },

    render: function(){
        // 1. 添加元素
        var parentNode = document.getElementById(this.parentId);
        var childNode = document.createElement('div');
        parentNode.appendChild(childNode);

        // 2. 设置定位
        parentNode.style.position = 'relative';
        childNode.style.position = 'absolute';

        // 3. 设置属性
        childNode.style.left = this.x + 'px';
        childNode.style.top = this.y + 'px';
        childNode.style.width = this.r + 'px';
        childNode.style.height = this.r + 'px';
        childNode.style.borderRadius = '50%';
        childNode.style.backgroundColor = this.bgColor;
    },

    update: function(){
        this.x += this.dX;
        this.y += this.dY;
        this.r -= this.dR;

        if(this.r < 0){
            this.r = 0;
            // 一旦半径小于=0, 把小球从数组中移除
            ballArr = _.without(ballArr, this);
        }
    }
};