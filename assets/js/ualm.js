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

function justNumbers(e){
   var keynum = window.event ? window.event.keyCode : e.which;
   if ((keynum == 8) || (keynum == 46))
        return true;
    return /\d/.test(String.fromCharCode(keynum));
}

function plusItemFrm(){
    var c ='<div class="item-frm">';
        c +=    '<div class="col-xs-12 col-sm-12 col-md-8">';
        c +=        '<div class="row">';
        c +=            '<div class="col-xs-12 col-sm-4 col-md-4">';
        c +=                '<div class="row select">';
        c +=                    '<select class="form-control">';
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
        c +=                        '<select class="form-control">';
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
        c +=                        '<select class="form-control">';
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
        c +=            '<div class="row">';
        c +=                '<input type="text" class="form-control col-md-4" name="" value="S/ 50.00" onkeypress="return justNumbers(event);">';
        c +=                '<input type="text" class="form-control col-md-4" name="" value="S/ 50.00" readonly>';
        c +=                '<input type="text" class="form-control col-md-4" name="" value="S/ 50.00" readonly>';
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