document.addEventListener("DOMContentLoaded", function () {
    // 视频播放控制
    const video = document.getElementById('mainVideo');
    const playBtn = document.getElementById('playBtn');
    const loadingText = document.getElementById('loadingText');
    const fileInput = document.createElement('input');
  
    // 初始化文件选择器
    fileInput.type = 'file';
    fileInput.accept = 'video/*';
    fileInput.style.display = 'none';
  
    // 点击播放按钮触发文件选择
    playBtn.addEventListener('click', () => {
        fileInput.click();
    });
  
    // 处理文件选择
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            // 显示加载提示
            loadingText.style.display = 'block';
            video.style.display = 'none';
            
            // 创建视频源
            const fileURL = URL.createObjectURL(file);
            video.src = fileURL;
            
            // 检测视频是否可以播放
            video.onloadeddata = () => {
                loadingText.style.display = 'none';
                video.style.display = 'block';
                video.play().catch(err => {
                    console.log('需要用户交互后才能自动播放');
                });
            };
  
            // 处理视频错误
            video.onerror = () => {
                loadingText.style.display = 'none';
                alert('不支持该视频格式');
            };
        }
    });
  
    // 下载功能（保持原有）
    function downloadAlerts() {
        const csvContent = "车牌,车型,首次出现,最后出现,最高速,违规\n京A123,轿车,08:01:20,08:02:45,78km/h,超速";
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '报警信息.csv';
        a.click();
    }
  
    function downloadVehicleChart() { alert('车型分布下载功能'); }
    function downloadSpeedChart() { alert('速度分布下载功能'); }
    function downloadViolationChart() { alert('违规类型下载功能'); }
  
    // 视频播放状态管理
    video.addEventListener('play', () => {
        playBtn.style.display = 'none';
    });
  
    video.addEventListener('pause', () => {
        playBtn.style.display = 'block';
    });
  
    // 释放内存
    window.addEventListener('beforeunload', () => {
        URL.revokeObjectURL(video.src);
    });
  });