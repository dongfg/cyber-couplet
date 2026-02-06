(function() {
    // ================= 配置区域 =================
    const config = {
        // 上联（左侧，传统习俗中面对大门右为上，但网页通常左为上，这里按网页习惯）
        leftText: "需求万变皆可做",
        // 下联（右侧）
        rightText: "代码千行零Bug",
        // 横批（可选，显示在顶部中间，如果不需要可以留空 ""）
        topText: "技术大牛", 
        // 字体颜色
        color: "#FFD700", // 金色
        // 背景颜色
        bg: "#D40000", // 中国红
        // 字体 (优先使用楷体等书法字体)
        font: "'KaiTi', '楷体', 'STKaiti', 'SimKai', serif"
    };
    // ===========================================

    // 检测是否为移动端（手机屏幕太小，建议不显示）
    if (window.innerWidth < 768) return;

    // 创建样式
    const style = document.createElement('style');
    style.innerHTML = `
        .cyber-couplet {
            position: fixed;
            top: 15%;
            width: 50px;
            padding: 20px 10px;
            background: ${config.bg};
            color: ${config.color};
            font-family: ${config.font};
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            line-height: 1.3;
            border-radius: 4px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3), 0 0 15px ${config.bg};
            z-index: 99999;
            writing-mode: vertical-rl; /* 竖排文字 */
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
            cursor: default;
            user-select: none;
            transition: transform 0.3s;
        }
        .cyber-couplet:hover {
            transform: scale(1.05);
        }
        .cyber-couplet-left { left: 20px; }
        .cyber-couplet-right { right: 20px; }
        
        /* 横批样式 */
        .cyber-couplet-top {
            position: fixed;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: auto;
            height: 50px;
            padding: 5px 30px;
            background: ${config.bg};
            color: ${config.color};
            font-family: ${config.font};
            font-size: 28px;
            font-weight: bold;
            line-height: 50px;
            border-radius: 4px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            z-index: 99999;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        /* 关闭按钮 */
        .couplet-close {
            position: absolute;
            top: -10px;
            right: -10px;
            width: 20px;
            height: 20px;
            background: #333;
            color: #fff;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            border-radius: 50%;
            cursor: pointer;
            writing-mode: horizontal-tb;
            font-family: Arial, sans-serif;
            display: none;
        }
        .cyber-couplet:hover .couplet-close,
        .cyber-couplet-top:hover .couplet-close {
            display: block;
        }
    `;
    document.head.appendChild(style);

    // 渲染函数
    function createCouplet(text, className) {
        if(!text) return;
        const div = document.createElement('div');
        div.className = className;
        div.innerHTML = text;
        
        // 添加关闭按钮
        const closeBtn = document.createElement('div');
        closeBtn.className = 'couplet-close';
        closeBtn.innerText = '×';
        closeBtn.onclick = function() {
            // 点击关闭所有春联
            document.querySelectorAll('.cyber-couplet, .cyber-couplet-top').forEach(el => el.remove());
        };
        div.appendChild(closeBtn);
        
        document.body.appendChild(div);
    }

    // 等待页面加载完成后执行
    window.addEventListener('load', () => {
        createCouplet(config.leftText, 'cyber-couplet cyber-couplet-left');
        createCouplet(config.rightText, 'cyber-couplet cyber-couplet-right');
        if(config.topText) {
            createCouplet(config.topText, 'cyber-couplet-top');
        }
    });

})();