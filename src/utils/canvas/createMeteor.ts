interface Meteor {
  x: number;
  y: number;
  size: number;
  speed: number;
  brightness: number;
  tailLength: number;
  trail: { x: number; y: number }[];
  update: () => void;
  draw: () => void;
}

const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'fixed'
canvas.style.top = '0'
canvas.style.zIndex = '-1'
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const meteors: Meteor[] = [];

// 创建流星
function createMeteor(): void {
  const meteor: Meteor = {
    x: Math.random() * canvas.width,
    y: Math.random() * (canvas.height / 3),
    size: Math.random() * 2 + 1,
    speed: Math.random() * 10 + 10,
    brightness: Math.random() * 50 + 50,
    tailLength: Math.random() * 30 + 10,
    trail: [],
    update() {
      // 记录轨迹
      this.trail.push({ x: this.x, y: this.y });

      // 保留最近的轨迹
      if (this.trail.length > this.tailLength) {
        this.trail.shift();
      }

      // 更新位置
      this.x -= this.speed;
      this.y += this.speed / 3;

      // 减小流星大小
      this.size -= 0.1;
    },
    draw() {
      // 绘制拖尾
      for (let i = 0; i < this.trail.length; i++) {
        const point = this.trail[i];
        const alpha = i / this.trail.length;
        const radius = Math.max(0.001, this.size * alpha);
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 绘制流星本体
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = `hsl(0, 0%, ${this.brightness}%)`;
      ctx.fillRect(0, 0, this.size, this.size);
      ctx.restore();
    },
  };

  meteors.push(meteor);
}

// 绘制流星
function draw(): void {
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 绘制流星
  for (let i = 0; i < meteors.length; i++) {
    const meteor = meteors[i];
    // 更新流星
    meteor.update();
    // 绘制流星
    meteor.draw();
    // 如果流星超出画布范围，从数组中删除
    if (meteor.x < -meteor.size || meteor.y > canvas.height + meteor.size) {
      meteors.splice(i, 1);
      i--;
    }
  }

  // 创建新的流星
  if (meteors.length < 10 && Math.random() < 0.05) {
    createMeteor();
  }

  // 循环调用
  requestAnimationFrame(draw);
}

// 开始绘制
export default draw;
