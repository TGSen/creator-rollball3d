cc.Class({
    extends: cc.Component,

    properties: {
        zhujue : cc.Node, // 球球
        music : {
            type: cc.AudioClip,
            default: null
        }
    },

    start () {
        cc.audioEngine.playMusic(this.music,true);

        // 拖动函数,小球会遮挡触摸
        this.node.on( 'touchmove' ,function (touch) { 
            let delta = touch.getDelta();
            this.zhujue.x += delta.x;
        },this);
    }
});
