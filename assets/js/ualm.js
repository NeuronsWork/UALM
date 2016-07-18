/* --- CAROUSEL DE TESTIMONIOS --- */
$('.carousel').carousel({ interval: 3000 });

/* --- MODAL --- */
$('#Modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  var modal = $(this)
  modal.find('.modal-body p span').text('Acabas de Agregar un servicio '+recipient)
});

// MODAL GRACIAS
$('#gracias').on('show.bs.modal', function (event) {});

// SELECT
$('.dropdown-menu').find('form').click(function(e){ e.stopPropagation(); });

// ACCORDION
$('#accordion a[role="button"]').bind('click', function(e){
    var id = $(this).attr('href');
    $('#accordion .panel .content-tab').css('display','none');
    $('#accordion .panel '+id).css('display','block');
    $('#accordion .panel .panel-heading > .panel-title > a[role="button"]').removeClass('open');
    $('#accordion .panel .panel-heading > .panel-title > a[href="'+id+'"]').addClass('open');
    e.preventDefault();
});

// VALIDAR SOLO NUMEROS
function justNumbers(e){
   var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;
    return /\d/.test(String.fromCharCode(keynum));
}

// SUMA DE SERVICIO SUBTOTAL Y TOTAL
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

// FUNCION PARA AGRAGER NUEVO SERVICIO
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

// SUMA DE COSTO + CANTIDAD
function servicioItem(id){
    var pu  = $('#servicio-'+id).find('input[name="input_unit"]').val(),
        c   = $('#servicio-'+id).find('select option:selected').val();
    $('#servicio-'+id).find('input[name="input_total"]').attr('value', pu*c);
}

// AGREGAR NUEVO SERVICIO
$('.plus-item-frm').bind('click', function(){
    var c = plusItemFrm();
    $('#content-item-frm').append(c);
});

// FORMULARIO COTIZAR
$('.other-cotizar .btn').bind('click', function(){
    $('.other-cotizar').remove();
    $('.other-datos').css('display','block');
});

//  FUNCION DE VALIDACION
function validar(type){
    // email
    if(type == 'email'){
        var key = document.getElementsByName("email")[0].value;
        var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(key);
        if(!re) {
            //console.log('error');
            return false;
        } else {
            //console.log('ok');
            return true;
        }
    }
    // letras
    if(type == 'letras'){
        var regex = new RegExp("^[a-zA-Z ]+$");
        if (event.charCode!=0) {
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                //console.log('error: '+ type);
                return false;
            }else{
                //console.log('ok');
                return true;
            }
        }
    }
    // textarea
    if(type == 'textarea'){
        var key = document.getElementsByTagName("textarea")[0].value;
        var re = key.length;
        if(re >= 0 && re <= 2){
            //console.log('error');
            return false;
        }else{
            //console.log('ok');
            return true;
        }
    }
}