$(document).ready(function(){
    $('ul').on('click','li',function(){
        $(this).addClass('before');
    })
    
    $('form').on('submit', function (e){
        e.preventDefault();
        const enderecoDaAgenda =$('#agenda').val();
        const novoItem =$('<li style="display: none"></li>');
        $(`
            <div class="overlay-imagem-link">
                    ${enderecoDaAgenda}
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('agenda').val('')
    })

} )