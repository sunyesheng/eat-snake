// 定义记分牌的类
class ScorePanel {
    // 用来记录分数和等级
    scope = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    constructor(maxLevel:number = 10) {
        this.scoreEle = document.getElementById('score')!;//后面加 ! 表示该值一定不为空
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel
    }
    // 修改分数的方法
    addScore() {
        this.scope++;
        this.scoreEle.innerHTML = this.scope + '';
        // 判断分数是多少
        if (this.scope % 10 === 0) {
            this.levelUp()
        }
    }
    // 提升等级的方法
    levelUp() {
        // 设置等级的上限
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level + '';
        }
    }
}

export default ScorePanel;