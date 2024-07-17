const content = document.getElementById('content');
const expandBtn = document.getElementById('expandBtn');

expandBtn.addEventListener('click', () => {
    if (content.classList.contains('collapsed')) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.remove('collapsed');
        content.classList.add('expanded');
        expandBtn.textContent = 'Collapse To Read Less';
    } else {
        content.style.maxHeight = "120px";
        content.classList.add('collapsed');
        content.classList.remove('expanded');
        expandBtn.textContent = 'Expand To Read More';
    }
});