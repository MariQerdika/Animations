const allBtn = document.querySelectorAll('.Hamburger__line');

    allBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        })
    })