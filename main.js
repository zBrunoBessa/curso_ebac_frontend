const form = document.getElementById('form-valor');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    let numeroa = document.getElementById('numero1');
    let numerob = document.getElementById('numero2');

    if (numerob.value > numeroa.value) {
        alert('Sucesso!!!')
    } else {
        alert('Favor refazer.')
    }
})