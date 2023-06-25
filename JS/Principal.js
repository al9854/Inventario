$(document).ready(function() {
    // Cargar la página de inicio por defecto
    loadPage('inicio');
  
    // Manejar el evento de clic en los enlaces de la barra lateral
    $('.sidebar ul li a').click(function(e) {
        e.preventDefault();
        var page = $(this).data('page');
        loadPage(page);
    });
});

function loadPage(page) {
    // Realizar una petición AJAX para obtener el contenido de la página
    $.ajax({
        url: page + '.html', // Ruta a la página correspondiente
        dataType: 'html',
        success: function(data) {
            // Cargar el contenido de la página en el contenedor correspondiente
            $('#content').html(data);
        }
    });
}
