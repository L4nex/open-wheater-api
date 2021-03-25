  
$(function() {
    const tbody = $('.table tbody');

    function obterDados() {
        $.ajax(`api.openweathermap.org/data/2.5/weather?q=blumenau&appid=86682086e6145a8827d33bd6e66a398f`, {
            async: true,
            crossDomain: true,
            type : 'GET',
            beforeSend: function() {
                $('.table').after('<p class="loading">Aguarde Carregando ... </p>');
            },
            error: function() {
                $('.table').after('<p class="loading">Deu Ruim</p>');
            },
            success: function(dados){
                mostrarDados(dados);
            },
            complete: function() {
                $('.loading').remove();
            }
        })

        function mostrarDados(dados) {
            $.each(dados, function(i, el) {
                tbody.append(`<tr class="linha">
                                <th scope="row" class="current_temp">${el.main.temp}</th>
                                <td class="temp_max">${el.main.temp_max}</td>
                                <td class="temp_min">${el.main.temp_min}</td>
                                <td class="humidity">${el.main.humidity}%</td>                         
                             </tr>
             `)
             console.log(el)
            })
        }
    }
    obterDados();
});