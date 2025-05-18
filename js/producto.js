document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  fetch('js/proyectos.json')
    .then(response => response.json())
    .then(lista_proyectos => {
      const proyecto = lista_proyectos.find(p => p.id === id);

      if (proyecto) {
        document.querySelector('h1').textContent = proyecto.titulo;
        document.getElementById('subtitulo').textContent = proyecto.subtitulo;

        // Carrusel dinámico
        const carouselInner = document.getElementById('carouselInner');
        proyecto.media.forEach((item, index) => {
          const divItem = document.createElement('div');
          divItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;

          if (item.tipo === 'video') {
            divItem.innerHTML = `
              <video src="${item.src}" autoplay loop muted playsinline class="d-block w-100 rounded shadow" style="height: 100%; object-fit: contain;"></video>
            `;
          } else {
            divItem.innerHTML = `
              <img src="${item.src}" class="d-block w-100 rounded shadow" alt="Imagen del proyecto">
            `;
          }

          carouselInner.appendChild(divItem);
        });

        document.getElementById('detalleDescripcion').innerHTML = proyecto.descripcionDetallada;

        const botonPrototipo = document.getElementById('botonPrototipo');
        botonPrototipo.href = proyecto.linkPrototipo;

        const iframeContainer = document.getElementById('iframePrototipoContainer');
        if (proyecto.iframePrototipo) {
          iframeContainer.innerHTML = proyecto.iframePrototipo;
        }
      } else {
        console.error('Proyecto no encontrado para el ID:', id);
      }
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
});