document.addEventListener('DOMContentLoaded', function() {
    // 轮播图配置
    const carouselImages = [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg'
    ];
    
    let currentSlide = 0;
    const carouselInner = document.querySelector('.carousel-inner');
    
    // 创建轮播图片
    carouselImages.forEach((image, index) => {
        const div = document.createElement('div');
        div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `
            <div class="carousel-overlay"></div>
            <img src="${image}" alt="Slide ${index + 1}">
        `;
        carouselInner.appendChild(div);
    });
    
    // 自动轮播
    function nextSlide() {
        const items = document.querySelectorAll('.carousel-item');
        items[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % items.length;
        items[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 5000);
    
    // 按钮控制
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', () => {
        const items = document.querySelectorAll('.carousel-item');
        items[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + items.length) % items.length;
        items[currentSlide].classList.add('active');
    });
    
    // 联系按钮点击事件
    document.querySelector('.contact-btn').addEventListener('click', () => {
        window.location.href = 'mailto:your.email@example.com';
    });
    
    // 添加技能条动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = document.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    });

    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        observer.observe(skillsContainer);
    }

    // 添加按钮事件
    document.querySelector('.primary-btn')?.addEventListener('click', () => {
        // 滚动到作品集部分
        document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.secondary-btn')?.addEventListener('click', () => {
        // 这里可以添加下载简历的逻辑
        window.location.href = 'path/to/your/resume.pdf';
    });
}); 