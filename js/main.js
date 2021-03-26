
$(function () {
    const info = $('#info');
    $('#submit').on('click', function(e) {
        var city = $('#city').val();
        obterDados(city)
    })

    function obterDados(city) {
        $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86682086e6145a8827d33bd6e66a398f&lang=pt_br&units=metric`, {
            async: true,
            crossDomain: true,
            type: 'GET',
            beforeSend: function () {
                $('#info').after('<p class="loading">Aguarde Carregando ... </p>');
            },
            error: function () {
                $('#info').after('<p class="loading">Deu Ruim</p>');
            },
            success: function (dados) {
                mostrarDados(dados);
            },
            complete: function () {
                $('.loading').remove();
            }
        })

        function mostrarDados(dados) {
            console.log(dados)
            info.append(`<div class="card" style="width: 18rem; margin: 0 auto; margin-top: 1%;">
                                <img src="images/ceu_limpo.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div style="float: left;">
                                        <p style="font-weight: bold; font-size: 18px;">${dados.name}</p>
                                    </div>
                                    <div style="float: right;">
                                        <p style="font-weight: bold; font-size: 18px;">${dados.main.temp}°</p>
                                    </div>
                                    <br>
                                    <br>
                                    <p class="card-text">
                                    ${dados.weather[0].description[0].toUpperCase()+ dados.weather[0].description.substr(1)} </p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Temperatura máxima: ${dados.main.temp_max}°</li>
                                    <li class="list-group-item">Temperatura mínima: ${dados.main.temp_min}°</li>
                                    <li class="list-group-item">Humidade: ${dados.main.humidity}%</li>
                                </ul>   
                            </div>
             `)
        }
    }
});