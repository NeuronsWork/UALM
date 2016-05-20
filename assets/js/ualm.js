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