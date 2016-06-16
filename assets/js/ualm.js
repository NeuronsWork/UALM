/* --- CAROUSEL DE TESTIMONIOS --- */
$('.carousel').carousel({ interval: 3000 });

/* --- MODAL --- */
$('#Modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  var modal = $(this)
  modal.find('.modal-body p span').text('Acabas de Agregar un servicio '+recipient)
});

$('#gracias').on('show.bs.modal', function (event) {});

$('.dropdown-menu').find('form').click(function(e){ e.stopPropagation(); });

$('#accordion a[role="button"]').bind('click', function(e){
    var id = $(this).attr('href');
    $('#accordion .panel .content-tab').css('display','none');
    $('#accordion .panel '+id).css('display','block');
    $('#accordion .panel .panel-heading > .panel-title > a[role="button"]').removeClass('open');
    $('#accordion .panel .panel-heading > .panel-title > a[href="'+id+'"]').addClass('open');
    e.preventDefault();
});

function justNumbers(e){
   var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;
    return /\d/.test(String.fromCharCode(keynum));
}

function itemTotal(e ,inp){
    // calculando el total x item
    var cantidad = $('#item-'+inp).find('.item_cantidad').val(),
        precio = $('#item-'+inp).find('.item_precio').attr('data-precio'),
        igv = $('#igv').val(),
        total = cantidad * precio;
    $('#item-'+inp).find('.item_total').val('S/ '+total);
    $('#item-'+inp).find('.item_total').attr('data-total',total);
    // actualizando sub-total
    var suma = 0;
    $('.carrito .item_total').each(function(index){
        suma = suma + parseInt($(this).attr('data-total'));
    });
    var igv_st = suma*igv/100;
    $('#sub_total').text(suma);
    $('#igv_subtotal').text(igv_st);
    $('#total').text(suma+igv_st);
}

function plusItemFrm(){
    var c ='<div class="item-frm">';
        c +=    '<div class="col-xs-12 col-sm-12 col-md-8">';
        c +=        '<div class="row">';
        c +=            '<div class="col-xs-12 col-sm-4 col-md-4">';
        c +=                '<div class="row select">';
        c +=                    '<select class="form-control" required>';
        c +=                        '<option value="1">Analisis de suelo</option>';
        c +=                        '<option value="2">Analisis de suelo</option>';
        c +=                        '<option value="3">Analisis de suelo</option>';
        c +=                        '<option value="4">Analisis de suelo</option>';
        c +=                        '<option value="5">Analisis de suelo</option>';
        c +=                        '</select>';
        c +=                    '</div>';
        c +=                '</div>';
        c +=                '<div class="col-xs-12 col-sm-4 col-md-4">';
        c +=                    '<div class="row select">';
        c +=                        '<select class="form-control" required>';
        c +=                            '<option>Para riego</option>';
        c +=                            '<option>Para riego</option>';
        c +=                            '<option>Para riego</option>';
        c +=                           '<option>Para riego</option>';
        c +=                            '<option>Para riego</option>';
        c +=                        '</select>';
        c +=                    '</div>';
        c +=                '</div>';
        c +=                '<div class="col-xs-12 col-sm-4 col-md-4">';
        c +=                    '<div class="row select">';
        c +=                        '<select class="form-control" required>';
        c +=                            '<option>Ph</option>';
        c +=                            '<option>Ph</option>';
        c +=                            '<option>Ph</option>';
        c +=                            '<option>Ph</option>';
        c +=                            '<option>Ph</option>';
        c +=                        '</select>';
        c +=                    '</div>';
        c +=                '</div>';
        c +=            '</div>';
        c +=        '</div>';
        c +=        '<div class="col-xs-12 col-sm-12 col-md-4 inputs-text">';
        c +=            '<div class="row item_costos">';
        c +=                '<input type="text" class="form-control col-md-4 item_cantidad" name="" value="1" onkeypress="return justNumbers(event);" onchange="itemTotal(event, 3);" required>';
        c +=                '<input type="text" class="form-control col-md-4 item_precio" name="" data-precio="50" value="S/ 50" readonly>';
        c +=                '<input type="text" class="form-control col-md-4 item_total" name="" data-total="50" value="S/ 50" readonly>';
        c +=            '</div>';
        c +=        '</div>';
        c +=    '</div>';
    //console.log(c);
    return c;
}

$('.plus-item-frm').bind('click', function(){
    var c = plusItemFrm();
    $('#content-item-frm').append(c);
});

$('.other-cotizar .btn').bind('click', function(){
    $('.other-cotizar').remove();
    $('.other-datos').css('display','block');
});