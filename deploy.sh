#!/bin/bash
# 部署脚本 - deploy.sh

echo "========== 开始部署 Qingjian Teacher Portal =========="
echo "部署时间: $(date '+%Y-%m-%d %H:%M:%S')"

# 参数配置 (动态获取当前脚本所在目录)
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKEND_DIR="$PROJECT_DIR/qingrun-backend"

# 1. 进入项目目录
echo ">>> 正在进入项目目录: $PROJECT_DIR"
cd $PROJECT_DIR || { echo "❌ 目录 $PROJECT_DIR 不存在! 部署终止。"; exit 1; }

# 2. 拉取最新代码
echo ">>> 正在拉取 main 分支最新代码..."
git fetch origin main
git reset --hard origin/main
git clean -fd

# 3. 部署后端容器
echo ">>> 正在构建并重启后端 Docker 容器..."
cd $BACKEND_DIR || { echo "❌ 目录 $BACKEND_DIR 不存在! 部署终止。"; exit 1; }

# 检查并设置可用的 Docker Compose 命令
if command -v docker-compose &> /dev/null; then
    DOCKER_CMD="docker-compose"
elif docker compose version &> /dev/null; then
    DOCKER_CMD="docker compose"
else
    echo "❌ 找不到 docker-compose 或 docker compose 命令，请检查服务器 Docker 环境！"
    exit 1
fi

# 停止并移除旧容器 (如果存在)
$DOCKER_CMD down

# 重新构建并以分离模式启动
$DOCKER_CMD up -d --build

# 4. 检查服务状态
echo ">>> 检查容器运行状态: qingrun-backend"
if [ "$(docker ps -q -f name=qingrun-backend)" ]; then
    echo "✅ qingrun-backend 容器运行正常"
else
    echo "❌ qingrun-backend 容器启动失败!"
    docker logs qingrun-backend --tail 50
    exit 1
fi

echo "========== 部署完成 =========="
echo "完成时间: $(date '+%Y-%m-%d %H:%M:%S')"
exit 0
