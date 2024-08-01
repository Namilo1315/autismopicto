//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    let opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    let x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}


//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso1");
        document.getElementById("rj").classList.add("barra-progreso1");
        document.getElementById("ps").classList.add("barra-progreso1");
    }
}

function enviarWhatsApp() {
    const nombre = encodeURIComponent(document.getElementById("nombre").value);
    const mensaje = encodeURIComponent(document.getElementById("mensaje").value);
    const email = encodeURIComponent(document.getElementById("email").value);

    const numeroWhatsapp = "2616246767";
    const mensajeWhatsApp = `¡Hola! Soy ${nombre}, mi email es: ${email} y mi consulta es: ${mensaje}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensajeWhatsApp}`;
    window.location.href = url;
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
  }

  
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    const imagesToShow = 6;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % (totalImages - imagesToShow + 1);
        updateCarousel();
    }, 2000); // Cambia cada 3 segundos (ajusta según tu preferencia)

    function updateCarousel() {
        const translateValue = -currentIndex * (100 / imagesToShow);
        carousel.style.transform = `translateX(${translateValue}%)`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    function speak(text) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.rate = 1;
        utterance.pitch = 1;
        synth.speak(utterance);
    }

    document.getElementById('volver').addEventListener('click', function() {
        speak('volver al inicio');
    });
    document.getElementById('quiero').addEventListener('click', function() {
        speak('quiero');
    });
    document.getElementById('noquiero').addEventListener('click', function() {
        speak('no quiero');
    });
    document.getElementById('megusta').addEventListener('click', function() {
        speak('me gusta');
    });
    document.getElementById('nomegusta').addEventListener('click', function() {
        speak('no me gusta');
    });
    document.getElementById('gracias').addEventListener('click', function() {
        speak('gracias');
    });

    document.getElementById('manzana').addEventListener('click', function() {
        speak('manzana');
    });
    document.getElementById('banana').addEventListener('click', function() {
        speak('banana');
    });
    document.getElementById('naranja').addEventListener('click', function() {
        speak('naranja');
    });
    document.getElementById('frutilla').addEventListener('click', function() {
        speak('frutilla');
    });
    document.getElementById('sandia').addEventListener('click', function() {
        speak('sandía');
    });
    document.getElementById('mandarina').addEventListener('click', function() {
        speak('mandarina');
    });
    document.getElementById('uva').addEventListener('click', function() {
        speak('uvas');
    });
    document.getElementById('pera').addEventListener('click', function() {
        speak('pera');
    });
   
 
});
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    document.getElementById('speak-button').addEventListener('click', function() {
        console.log("Speak button clicked");
        let text = document.getElementById('text-input').value.trim();
        console.log("Text to speak:", text);
        if (text) {
            let speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'es-ES';
            speech.rate = 1;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech);
        } else {
            alert('Por favor, escribe algo en el cuadro de texto.');
        }
    });

    document.getElementById('clear-button').addEventListener('click', function() {
        console.log("Clear button clicked");
        document.getElementById('text-input').value = '';
    });
});


