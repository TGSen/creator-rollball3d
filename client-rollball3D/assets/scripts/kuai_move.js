cc.Class({
    extends: cc.Component,

    properties: {
        zhujue : cc.Node,
        btu : cc.Node
    },

    update (dt) {
        this.node.z += 200 * dt;
        if (this.node.z >= 0) {
            this.node.destroy();
        }

        // 根据方块和主角之间距离进行碰撞检测
        let dis = this.node.position.sub(this.zhujue.position);
        
        // 计算距离
        if (dis.mag() <= 8) {
            cc.director.pause(); // 游戏暂停
            this.btu.x = 0;
        }
    },
});
