(function() {

    // 1
    $(".problema").addClass('erro');
    $(".ok").addClass('sucesso');

    //2
    $("#div-filha .erro").removeClass();

    //3
    $('#create-me-btn').click(function(){
        var atual = parseInt($('#create-me div').last().text());
        atual += 1;
        var max = $('#create-me-btn').attr('data-max');
        if(atual <= max){
            let texto = $("<div>").text(atual + " - Elemento número "+ atual);
            $("#create-me").append(texto);
        }
    });

    //4
    $("#copy-me-btn").click(function(){
        var elemento = $('#origem').html();
        var texto = $('#destino');
        texto.html(elemento);
    });

    // 5
    $("#tabela-totais tbody tr").each(function(){
        var total = 0;
        var qtd = 0;
        qtd = parseFloat($(this).find("td:nth-child(2)").text());
        total = parseFloat($(this).find("td:nth-child(3)").text());
        $(this).find("td:nth-child(4)").text(qtd*total);

    });

    // 6
    // variavel que inicia o total geral
    var totalGeral = 0;

     $("#tabela-totais-2 tbody tr").each(function(){
        var unidade = 0;
        var qtd = 0;

        qtd = parseFloat($(this).find("td:nth-child(2)").text());
        unidade = parseFloat($(this).find("td:nth-child(3)").text());
        $(this).find("td:nth-child(4)").text(qtd*unidade);

        // incrementa total geral
        totalGeral += (qtd*unidade);
        $('#total-geral').text(totalGeral);

        // não formatar para duas casas para evitar possivel erro com corretor
    });
})();