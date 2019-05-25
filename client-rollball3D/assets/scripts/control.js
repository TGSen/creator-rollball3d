cc.Class({
    extends: cc.Component,

    properties: {
       kuai : cc.ma,
       zhujue : cc.Node,
       lab : cc.Label,
       btu : cc.Node
    },

    start () {
        this.time = 0;
        this.schedule(this.createKuai,1,cc.macro.REPEAT_FOREVER,0);
    },

    createKuai () {
        let kuai = cc.instantiate(this.kuai);
        kuai.getComponent('kuai_move').zhujue = this.zhujue;
        kuai.getComponent('kuai_move').btu = this.btu;
        kuai.parent = this.node;

        // 随机x轴在 -40 到 40 之间
        kuai.x = -40 + 80 * Math.random();

        // 起始点
        kuai.y = -16;
        kuai.z = -1000;
    },

    Click() { // 但是点不到...
        // cc.game.restart();
        // cc.game.end()
        cc.director.loadScene('game');

        cc.log("restart game");
    },

    update (dt) {
        this.time += dt;

        this.lab.string = this.time.toFixed(2);

        if (this.time >=15 && this.time <=15.03) {
            this.schedule(this.createKuai,0.7,cc.macro.REPEAT_FOREVER,0);
        }

        if (this.time >=25 && this.time <=25.03) {
            this.schedule(this.createKuai,0.5,cc.macro.REPEAT_FOREVER,0);
        }

        if (this.time >=35 && this.time <=35.03) {
            this.schedule(this.createKuai,0.3,cc.macro.REPEAT_FOREVER,0);
        }

        if (this.time >=50 && this.time <=50.03) {
            this.schedule(this.createKuai,0.2,cc.macro.REPEAT_FOREVER,0);
        }

        if (this.time >=70 && this.time <=70.03) {
            this.schedule(this.createKuai,0.15,cc.macro.REPEAT_FOREVER,0);
        }

        if (this.time >=90 && this.time <=90.03) {
            this.schedule(this.createKuai,0.1,cc.macro.REPEAT_FOREVER,0);
        }
    },
});
