// 定义食物类 foot
class Food {
    // 定义属性食物本身是一个div
    element: HTMLElement;
    // 构造方法
    constructor() {
        // 表示不为空 ！  获取页面中的food元素 并且赋值
        this.element = document.getElementById('food')!
    }
    // 获取食物X Y轴坐标的方法
    get X() {
        return this.element.offsetLeft!;
    }
    get Y() {
        return this.element.offsetTop!;
    }
    // 食物的位置是不固定的 随机位置
    change() {
        // 生成随机的位置
        // 最左到 框的四周 x（0,290）y（0,290）
        // 蛇移动一次就是一格 一格的大小就是10
        // 食物的坐标必须是整10
        // 生成随机数 0-29之间的数字 * 10
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

// 导出模块
export default Food;