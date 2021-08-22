import Snake from "./snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
// 游戏控制器 控制其他类
class GameControl{
    // 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 存储蛇的移动方向
    direction: string = '';
    // 记录游戏是否结束
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    // 初始化方法
    init() {
        this.isLive = true;
        // 绑定键盘按下事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        // 调用run方法 使蛇移动
        this.run()
    }
    // 键盘按下相应函数
    keydownHandler(event:KeyboardEvent) {
        // 按下那个按键
        this.direction = event.key;
              
    }
        // 控制蛇移动的方法
    run() {
        /**
         * 根据方向 来使蛇的位置改变
         */
        let x = this.snake.X;
        let y = this.snake.Y;

        // 只是计算x 和  y值 并没有生效
        switch (this.direction) {
            case "ArrowUp": {y -= 10;break;}
            case "ArrowDown": { y += 10;break;}
            case "ArrowLeft": { x -= 10;break;}
            case "ArrowRight": { x += 10;break;}
        }

        // 检查蛇是否吃到了食物
        this.checkEat(x, y)

        try {
            this.snake.X = x;
            this.snake.Y = y;
        } catch (e:any) {
            // 进入到catch 说明出现了异常 游戏结束 弹出提示信息
            alert(e.message+'game over');
            this.isLive = false;
            location.reload();
        }

        // 开启一个定时调用
        clearTimeout()
        this.isLive&&setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }

    // 定义一个方法 用来检测蛇是否吃到食物
    checkEat(x:number,y:number) {
        if (x === this.food.X && y === this.food.Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl;