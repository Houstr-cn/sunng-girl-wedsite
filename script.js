document.getElementById('sunnyRequest').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const message = document.getElementById('message').value;
    
    // 显示结果
    document.getElementById('result-name').textContent = name;
    document.getElementById('result-date').textContent = formatDate(date);
    document.getElementById('result-location').textContent = location;
    document.getElementById('result-message').textContent = message || "无";
    
    // 隐藏表单，显示结果
    document.querySelector('.request-form').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');

    document.body.insertAdjacentHTML('beforeend', '<div class="sun-animation"></div>');
    setTimeout(() => {
        document.querySelector('.sun-animation').classList.add('show-sun');
    }, 500);


    
    // 滚动到结果位置
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
});

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
}