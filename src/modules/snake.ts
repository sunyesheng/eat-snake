class Snake {
    // 表示蛇的元素 蛇头
    head: HTMLElement;
    // 蛇的身体 包括蛇头
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.head.style.backgroundColor = 'grey'
        this.bodies = this.element.getElementsByTagName('div')
    }
    // 获取蛇的坐标 蛇头的坐标
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value: number) {
        if (this.X === value) {
            return
        }
        // x的值的合法范围是0-290
        if (value < 0 || value > 290) {
            // 说明蛇撞墙了
            throw new Error('蛇撞墙了')
        }

        // 蛇禁止掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 如果发生了掉头 向反方向继续向反方向走
            if (value > this.X) {
                // 如果新值大于就只 说明蛇在向右走 应该继续向左走
                value = this.X - 10;
            } else {
                value = this.X + 10
            }
        }

        // 移动身体
        this.moveBody()
        this.head.style.left = value + 'px';
        this.checkHearBody()

    }
    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > 290) {
            // 说明蛇撞墙了
            throw new Error('蛇撞墙了')
        }

        // 蛇禁止掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // 如果发生了掉头 向反方向继续向反方向走
            if (value > this.Y) {
                // 如果新值大于就只 说明蛇在向右走 应该继续向左走
                value = this.Y - 10;
            } else {
                value = this.Y + 10
            }
        }

        // 移动身体
        this.moveBody()
        this.head.style.top = value + 'px';
        this.checkHearBody()
    }
    // 向蛇的身体增加
    addBody() {
        // 向element中添加div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
    // 蛇身体移动的方法
    moveBody() {
        /**
         * 将后边身体 设置为前边身体的位置
         * i = 0  蛇头的位置不能改
         */
        for (let i = this.bodies.length - 1; i > 0; i--){
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    // 检查蛇头是否撞到身体
    checkHearBody() {
        // 获取所有的身体 检查 是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到了自己')
            }
        }
    }
}
// 存在的问题 xy不完善 蛇的身体问题不完善 蛇的掉头问题 蛇的自体碰撞问题

export default Snake;