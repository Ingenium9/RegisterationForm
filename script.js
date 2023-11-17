document.addEventListener('DOMContentLoaded', function () {
    const inputGroups = document.querySelectorAll('.input-group input');

    inputGroups.forEach(input => {
        input.addEventListener('input', function () {
            handleInput(input);
        });
        handleInput(input);
    });

    function handleInput(input) {
        const label = input.previousElementSibling;
        if (input.value.trim() !== '') {
            label.classList.add('moved');
            input.classList.add('color-change');
        } else {
            label.classList.remove('moved');
            input.classList.remove('color-change');
        }
    }
});
