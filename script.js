
const list = document.getElementById('list');
const showMoreBtn = document.getElementById('showMoreBtn');

showMoreBtn.addEventListener('click', function() {
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        showMoreBtn.innerHTML = 'Show Less <i class="fas fa-angle-up"></i>';
    } else {
        list.classList.add('hidden');
        showMoreBtn.innerHTML = 'Show More <i class="fas fa-angle-down"></i>';
    }
});

