document.addEventListener('DOMContentLoaded', function() {
    // 启动真正的连续平滑滚动
    startSmoothInfiniteScroll();
});

function startSmoothInfiniteScroll() {
    const container = document.querySelector(".message_scroll_container");
    if (!container || container.children.length === 0) return;
    
    // 克隆所有子元素并追加到容器末尾，实现无缝滚动
    const items = Array.from(container.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });
    
    // 设置滚动速度（像素/秒）
    const scrollSpeed = 40; // 40像素/秒，可根据需要调整
    
    let scrollPosition = 0;
    let lastTimestamp = 0;
    let animationId = null;
    
    // 开始滚动动画
    function scrollAnimation(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        
        // 计算新的滚动位置
        scrollPosition += (scrollSpeed * deltaTime) / 1000;
        
        // 当滚动到克隆内容的一半时，重置位置实现无缝循环
        const containerHeight = container.offsetHeight;
        const contentHeight = container.scrollHeight / 2; // 因为我们克隆了一份
        
        if (scrollPosition >= contentHeight) {
            scrollPosition = 0;
        }
        
        // 应用滚动
        container.style.transform = `translateY(-${scrollPosition}px)`;
        
        // 继续动画
        animationId = requestAnimationFrame(scrollAnimation);
    }
    
    // 启动动画
    animationId = requestAnimationFrame(scrollAnimation);
    
    // 停止滚动函数（可选）
    function stopScroll() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }
    
    // 暴露停止方法（按需使用）
    window.stopMessageScroll = stopScroll;
}



// 本地视频选择处理
document.getElementById('video-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const videoURL = URL.createObjectURL(file);
    const videoPlayer = document.getElementById('local-video');
    
    videoPlayer.src = videoURL;
    videoPlayer.load();
    
    // 自动开始播放（需要用户交互后才会真正播放）
    videoPlayer.play().catch(e => console.log("自动播放被阻止:", e));
});