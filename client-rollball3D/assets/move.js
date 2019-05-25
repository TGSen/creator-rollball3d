cc.Class({
    extends: cc.Component,

    properties: {
        // 球球
        zhujue : cc.Node,
        music : {
            type : cc.AudioClip,
            default : null
        }
    },

    start () {
        cc.audioEngine.playMusic(this.music,true);
        // 拖动函数
        this.node.on( 'touchmove' ,function (touch) { 
            let delta =touch.getDelta();
            this.zhujue.x +=delta.x;
        },this);
    },

    // update (dt) {},
});
