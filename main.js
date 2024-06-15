$(document).ready(function(){
        $('form').on('submit', function(e){
                e.preventDefault(e)
                const tarefa = $('#tarefa').val()
                const horaTarefa = $('#data-tarefa').val()
                
                const novoTarefa = $(`
                        <li>
                                <span>${tarefa} - ${horaTarefa}</span>
                                <button class='verificar'>Feito</button>
                                <button class='limpar'>Limpar</button>
                        </li>
                        `)
                        
                novoTarefa.appendTo('#lista-tarefas')

                $('#lista-tarefas').css('border-bottom', '2px solid black')
                $('.lista').css('visibility', 'visible')
                $('.lista').css('border-top','2px solid black')
                $('.lista').css('border-right','2px solid black')
                $('.lista').css('border-left','2px solid black')

                $('#tarefa').val('')
                $('#data-tarefa').val('')

        })

        $('#lista-tarefas').on('click', '.verificar', function(){
                $(this).siblings('span').toggleClass('checked')
        })
        
        $('#lista-tarefas').on('click', '.limpar', function(){
                $(this).parent().remove()
        })

        if ($('#lista-tarefas').children().length === 0) {
                $('#lista-tarefas').css('border', 'none')
        }

        
        $('form').on('reset', function(){
                $('.lista').empty()
                $('.lista').css('border', 'none')
                $('#lista-tarefas').empty()
                $('#lista-tarefas').css('border', 'none')
        })
        
})