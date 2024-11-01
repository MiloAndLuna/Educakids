document.addEventListener("DOMContentLoaded", () => {
  const prematuroInputs = document.getElementsByName("prematuro");
  const prematuroLink = document.getElementById("prematuro-link");
  const edadSection = document.getElementById("edad-section");
  const enviarBtn = document.getElementById("enviar");

  prematuroInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.value === "si") {
        prematuroLink.style.display = "block";
        edadSection.style.display = "none";
      } else {
        prematuroLink.style.display = "none";
        edadSection.style.display = "block";
      }
    });
  });

  enviarBtn.addEventListener("click", () => {
    const edad = document.getElementById("edad").value;
    if (edad) {
      window.location.href = `preguntas.html?edad=${edad}`;
    } else if (edad == "") {
      alert("Seleccione una edad para continuar.");
    } else {
      prematuroLink.style.display = "block";
      edadSection.style.display = "none";
    }
  });
});

if (window.location.pathname.endsWith("preguntas.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const edad = urlParams.get("edad");
  const preguntasDiv = document.getElementById("preguntas");
  const edadNino = document.getElementById("edad-nino");
  const guardarBtn = document.getElementById("guardar");
  const RegresarBtn = document.getElementById("regresar");
  const videoFormulario = document.getElementById("video-formulario");
  const resultadoSection = document.getElementById("resultado");
  const respuestasLista = document.getElementById("respuestas-lista");

  const preguntas = {
    1: [
      {
        texto:
          "Si usted acaricia la comisura de los labios de su bebé…¿él gira la cabeza hacia el mismo lado e inicia un movimiento de succión con sus labios?",
        imagen: ["imagenes/1.1.jpg", "imagenes/1,1.jpg"],
        observacion: "Ausencia de reflejo de búsqueda y succión",
      },
      {
        texto:
          "Cuando usted cambia a su bebé desde la posición sostenido en sus brazos a la cama…¿su bebé hace apertura de sus brazos al mismo tiempo?",
        imagen: ["imagenes/1.2.jpg"],
        observacion: "Ausencia del reflejo de moro simétrico",
      },
      {
        texto:
          "Si usted acuesta boca arriba a su bebé y le habla de manera suave o lo toca…¿él mueve sus brazos y piernas?",
        imagen: ["imagenes/1.3.jpg"],
        observacion: "Alteración en la movilidad de extremidades",
      },
      {
        texto:
          "Cuando usted toca la palma de la mano de su bebé…¿él le aprieta con su mano?",
        imagen: ["imagenes/1.4.jpg"],
        observacion: "Ausencia del reflejo de prensión palmar",
      },
      {
        texto:
          "Si usted se ubica cerca al alcance visual de su bebé y realiza sonidos con sonaja, aplausos y/o alumbra con alguna luz el entorno alrededor del bebé…¿él reacciona con un movimiento o sonido?",
        imagen: ["imagenes/1.5.jpg"],
        observacion: "Ausencia de reacción ante luz y sonidos",
      },
      {
        texto:
          "Cuando usted pone un objeto frente a su bebé y lo mueve de manera horizontal de lado a lado…¿Su bebé puede seguir el objeto con la mirada?",
        imagen: ["imagenes/1.6.jpg"],
        observacion:
          "Alteración en el seguimiento de objetos de manera horizontal",
      },
    ],
    2: [
      {
        texto:
          "Si usted toma a su bebé de sus manos mientras él está acostado boca arriba y lo hala como si tratará de sentarlo…¿él conserva la posición de su cabeza de manera autónoma?",
        imagen: ["imagenes/2.1.jpg"],
        observacion: "Ausencia del sostén de cabeza",
      },
      {
        texto:
          "Cuando su bebé está acostado boca abajo y usted lo estimula mirándolo desde arriba…¿él bebé logra apoyarse en sus antebrazos, levanta la cabeza y el pecho al menos 3 segundos para mirarlo?",
        imagen: ["imagenes/2.2.jpg"],
        observacion:
          "Ausencia de la capacidad de levantar la cabeza y pecho estando boca abajo",
      },
      {
        texto:
          "Si su bebé está acostado boca arriba y usted hace un sonido para estimular ¿él gira su cabeza en busca del sonido?",
        imagen: ["imagenes/2.3.jpg"],
        observacion: "Ausencia de giro de cabeza desde la línea media",
      },
      {
        texto:
          "¿Cuándo su bebé está acostado boca arriba mira sus manos mientras las mueve?",
        imagen: ["imagenes/2.4.jpg"],
        observacion: "Ausencia de abrir y mirar sus manos",
      },
      {
        texto:
          "Si usted le pasa un objeto liviano a su bebé…¿él lo coge por al menos 3 segundos?",
        imagen: ["imagenes/2.5.jpg"],
        observacion: "Ausencia de sostén de objetos",
      },
      {
        texto:
          "De acuerdo a la pregunta anterior…¿Su bebé intenta llevar el objeto a la boca?",
        imagen: ["imagenes/2.6.jpg"],
        observacion: "Dificultad para llevar el objeto a la boca",
      },
    ],
    3: [
      {
        texto:
          "Si usted pone a su bebé en posición sentada mientras le brinda sostén con sus manos en la espalda…¿él sostiene su cabeza sin apoyo?",
        imagen: ["imagenes/3.1.jpg"],
        observacion: "Sostén de cabeza sin apoyo en posición de sentado",
      },
      {
        texto:
          "Conservando la posición anterior con su apoyo…¿si usted retira el apoyo de la espalda de su bebé de manera momentánea, él logra conservar esa posición al menos 3 segundos?",
        imagen: ["imagenes/3.2.jpg"],
        observacion: "Posición de sentado momentáneamente",
      },
      {
        texto:
          "Si su bebé está en la cama boca abajo y usted lo llama desde una posición en la que no lo vea…¿su bebé se gira tratando de buscar el sonido?",
        imagen: ["imagenes/3.3.jpg"],
        observacion: "Se voltea",
      },
      {
        texto:
          "Cuando usted deja objetos llamativos cerca al bebé…¿él los intenta agarrar y los sostiene al menos por 3 segundos?",
        imagen: ["imagenes/3.4.jpg", "imagenes/3,4.jpg"],
        observacion: "Agarre de objetos",
      },
      {
        texto:
          "Si conserva el objeto en su mano…¿él bebé trata de retenerlo para que no se lo quiten?",
        imagen: ["imagenes/3.5.jpg"],
        observacion: "Capacidad de retener un objeto",
      },
      {
        texto: "Su bebé es capaz de pasar un objeto de una mano a otra?",
        imagen: ["imagenes/3.6.jpg"],
        observacion: "Facilidad en el movimiento de objetos",
      },
    ],
    4: [
      {
        texto: "Cuando usted sienta a su bebe…¿Él es capaz de mantenerse solo?",
        imagen: ["imagenes/4.1.jpg"],
        observacion: "Sostén de cabeza, cuello y tronco",
      },
      {
        texto: "¿Su bebé es capaz de sentarse solo?",
        imagen: ["imagenes/4.2.jpg"],
        observacion: "Control de movimiento",
      },
      {
        texto:
          "Si su bebé está en posición acostado boca abajo y usted le pone un objeto llamativo al frente…¿él puede arrastrarse intentando llegar al objeto?",
        imagen: ["imagenes/4.3.jpg", "imagenes/4,3.jpg"],
        observacion: "Capacidad de arrastre y agarre de objetos",
      },
      {
        texto:
          "Cuando usted le ofrece dos objetos llamativos a su bebé…¿él es capaz de cogerlos y sostenerlos sin soltarlos al menos 5 segundos?",
        imagen: ["imagenes/4.4.jpg"],
        observacion: "Sostén de objetos",
      },
      {
        texto:
          "¿Si su bebé sostiene un objeto en su mano es capaz de soltarlo para tomar otro objeto que le interese más?",
        imagen: ["imagenes/4.5.jpg"],
        observacion: "Selección de objetos",
      },
      {
        texto:
          "¿Su bebé al coger objetos pequeños puede tomarlos con pulgar e índice?",
        imagen: ["imagenes/4.6.jpg"],
        observacion: "Ejecución de movimientros finos formando la pinza",
      },
    ],
    5: [
      {
        texto:
          "¿Cuando su bebé está en posición acostado boca abajo y usted le pone un objeto llamativo al frente…¿él puede desplazarse gateando?",
        imagen: ["imagenes/5.1.jpg"],
        observacion: "Habilidad de gateo",
      },
      {
        texto:
          "¿Su bebé puede pasar de sentado a posición de pie apoyándose en un objeto cercano?",
        imagen: ["imagenes/5.2.jpg"],
        observacion: "Adaptarse a la postura de pie",
      },
      {
        texto:
          "Si usted posiciona a su bebé de pie y lo suelta… ¿Él es capaz de mantenerse sin apoyo al menos 2 segundos?",
        imagen: ["imagenes/5.3.jpg"],
        observacion: "Da pasos",
      },
      {
        texto:
          "Cuando  su bebé tiene un objeto en cada mano y usted le ofrece un tercero pequeño…¿él es capaz de conservar los tres objetos en sus manos al menos 3 segundos?",
        imagen: ["imagenes/5.4.jpg"],
        observacion: "Sostén de objetos",
      },
      {
        texto:
          "Al dejar sentado a su bebé frente a una canastilla con objetos interesantes para él…¿él es capaz de sacar objetos de esta?",
        imagen: ["imagenes/5.5.jpg"],
        observacion: "Saca y busca objetos",
      },
      {
        texto:
          "Cuando usted esconde un juguete de su hijo…¿Él es capaz de buscarlo?",
        imagen: ["imagenes/5.6.jpg"],
        observacion: "Búsqueda de objetos",
      },
    ],
    6: [
      {
        texto:
          "Si usted juega con su hijo a construir torres con cubos…¿él es capaz de al menos hacer una torre de tres cubos?",
        imagen: ["imagenes/6.1.jpg"],
        observacion: "Habilidad para armar torre de tres cubos",
      },
      {
        texto:
          "Cuando usted le está leyendo a su hijo y pone el libro frente a él…¿él puede pasar las hojas del libro con su mano?",
        imagen: ["imagenes/6.2.jpg"],
        observacion: "Pasa hojas de un libro",
      },
      {
        texto:
          "Cuando usted le da de comer a su bebé con una cuchara y deja está a un lado del bebé…¿él es capaz de coger la cuchara y llevársela a la boca?",
        imagen: ["imagenes/6.3.jpg"],
        observacion: "Habilidad para tomar una cuchara",
      },
      {
        texto:
          "Si usted deja a su bebé sentado en el suelo y lo llama ofreciéndole algún objeto desde arriba de él…¿él es capaz de ponerse de pie sin apoyo?",
        imagen: ["imagenes/6.4.jpg"],
        observacion: "Ponerse de pie sin ayuda",
      },
      {
        texto:
          "Cuando su bebé está de pie y usted le pide que se acerque…¿él es capaz de caminar al menos cuatro o cinco pasos sin perder el equilibrio?",
        imagen: ["imagenes/6.5.jpg"],
        observacion: "Da pasos sin perder el equilibrio",
      },
      {
        texto:
          "De acuerdo a la pregunta anterior, mientras el camina sin ayuda…¿Es capaz de alternar las manos y pies conservando el equilibrio?",
        imagen: ["imagenes/6.6.jpg"],
        observacion: "Desplazamiento cruzado al dar pasos",
      },
    ],
    7: [
      {
        texto:
          "Cuando usted le pide a su bebé venir rápido hacia usted como si corriera…¿Él es capaz de hacerlo?",
        imagen: ["imagenes/7.1.jpg"],
        observacion: "Capacidad para correr",
      },
      {
        texto:
          "Si usted está jugando con su bebé y le enseña a lanzar la pelota…¿Él es capaz de lanzarla?",
        imagen: ["imagenes/7.2.jpg"],
        observacion: "Lanza la pelota",
      },
      {
        texto: "Además de lanzar la pelota…¿El bebé es capaz de patearla?",
        imagen: ["imagenes/7.3.jpg"],
        observacion: "Patea la pelota",
      },
      {
        texto:
          "Si usted le da a su bebé un crayón y una hoja de papel bajo su supervisión…¿El agarra la crayola y garabatea en la hoja?",
        imagen: ["imagenes/7.4.jpg", "imagenes/7,4.jpg"],
        observacion: "Habilidad de garabatear de manera espontánea",
      },
      {
        texto:
          "Si usted está sentado frente a su bebé cerrando una botella o frasco y lo deja frente a él…¿Él es capaz de coger el tarro y desenroscar la tapa?",
        imagen: ["imagenes/7.5.jpg"],
        observacion: "Quitar la tapa de un contenedor",
      },
      {
        texto:
          "Cuando usted juega con su hijo a construir torres con cubos…¿él es capaz de al menos hacer una torre de cinco cubos?",
        imagen: ["imagenes/7.6.jpg"],
        observacion: "Habilidad de armar torre de cinco cubos",
      },
    ],
    8: [
      {
        texto:
          "Cuando su bebé salta…¿Él es capaz de hacerlo despegando la planta de ambos pies sin perder el equilibrio al menos dos veces seguidas?",
        imagen: ["imagenes/8.1.jpg"],
        observacion: "Capacidad de saltar con los pies juntos",
      },
      {
        texto:
          "Si su bebé salta…¿Él es capaz de hacerlo despegando la planta de ambos pies sin perder el equilibrio al menos dos veces seguidas?",
        imagen: ["imagenes/8.2.jpg"],
        observacion: "Posición de punta de pies",
      },
      {
        texto:
          "¿Su bebé es capaz de subir dos escalones sin apoyarse de las barandas y sin perder el equilibrio?",
        imagen: ["imagenes/8.3.jpg"],
        observacion: "Habilidad de subir dos escalones sin apoyo",
      },
      {
        texto:
          "¿Su bebé es capaz de enhebrar o hilar una perla usando su dedo pulgar e índice como pinza?",
        imagen: ["imagenes/8.4.jpg"],
        observacion: "Uso de pulga e índice como pinza",
      },
      {
        texto:
          "Cuando usted le da a su bebé una hoja de papel y le pide que la rasgue en cuadritos…¿él es capaz de rasgar este con su mano en forma de pinza usando el dedo pulgar e índice?",
        imagen: ["imagenes/8.5.jpg"],
        observacion: "Habilidad de rasgar",
      },
      {
        texto:
          "Si usted le da una hoja y un crayón a su bebé y le pide que realice líneas horizontales y verticales enseñándole…¿él es capaz de hacerlas algo rectas?",
        imagen: ["imagenes/8.6.jpg"],
        observacion: "Habilidad de realizar líneas rectas",
      },
    ],
    9: [
      {
        texto:
          "¿Su bebé es capaz de caminar en punta de pie al menos 20 pasos sin apoyo y sin perder el equilibrio?",
        imagen: ["imagenes/9.1.jpg"],
        observacion: "Capacidad de caminar en punta de pie",
      },
      {
        texto:
          "¿Su bebé es capaz de pararse en un solo pie y conservar el equilibrio al menos dos segundos?",
        imagen: ["imagenes/9.2.jpg"],
        observacion: "Habilidad de pararse en un solo pie",
      },
      {
        texto:
          "¿Su bebé baja escalones…¿él es capaz de bajar al menos dos solo con apoyo de la baranda?",
        imagen: ["imagenes/9.3.jpg"],
        observacion: "Capacidad de bajar solo al menos dos escalones con apoyo",
      },
      {
        texto:
          "Si usted hace bolas de papel con su bebé…¿Él es capaz de hacerlas solo?",
        imagen: ["imagenes/9.4.jpg"],
        observacion: "Habilidad de hacer bolitas de papel",
      },
      {
        texto:
          "Cuando usted le muestra a su bebé cómo hacer círculos en una hoja de papel y le pide que imite su figura cerrando por completo la misma…¿él es capaz de hacerlo?",
        imagen: ["imagenes/9.5.jpg", "imagenes/9,5.jpg"],
        observacion: "Dibuja un circulo",
      },
      {
        texto:
          "Si usted le pide a su bebé que dibuje una persona…¿Él es capaz de hacerlo de manera reconocible?",
        imagen: ["imagenes/9.6.jpg", "imagenes/9,6.jpg"],
        observacion: "Dibuja una persona",
      },
    ],
    10: [
      {
        texto:
          "Si usted pone una cinta sobre una línea recta sobre el suelo…¿Su niño es capaz de caminar sobre ella alternando sus pies y sin mirar el piso?",
        imagen: ["imagenes/10.1.jpg"],
        observacion: "Capacidad de caminar sobre una línea recta",
      },
      {
        texto:
          "Cuando su bebé salta en un solo pie…¿Él es capaz de saltar al menos tres veces sin perder el equilibrio?",
        imagen: ["imagenes/10.2.jpg"],
        observacion: "Capacidad de saltar en un solo pie",
      },
      {
        texto:
          "¿Su niño es capaz de rebotar una pelota en el suelo y atraparla nuevamente?",
        imagen: ["imagenes/10.3.jpg"],
        observacion: "Lanzar y atrapar una pelota",
      },
      {
        texto:
          "Si usted le pide a su hijo dibujar una escalera…¿él puede hacerlo?",
        imagen: ["imagenes/10.4.jpg", "imagenes/10,4.jpg"],
        observacion: "Dibuja una escalera",
      },
      {
        texto: "¿Su niño es capaz de cortar una figura de papel?",
        imagen: ["imagenes/10.5.jpg"],
        observacion: "Capacidad de recortar una figura de papel",
      },
      {
        texto: "¿Su niño es capaz de dibujar una persona?",
        imagen: ["imagenes/10.6.jpg", "imagenes/10,6.jpg"],
        observacion: "Dibuja una persona reconocible",
      },
    ],
  };

  const videosPorEdad = {
    1: "https://www.youtube.com/embed/DlWCsCNcf_4?si=petO5Hly9_tjf1rm",
    2: "https://www.youtube.com/embed/fJt_Lnp1uu8?si=96-9gzkN4AxdDJXy",
    3: "https://www.youtube.com/embed/7I42-7t-Ze0?si=MFhNuaWN7bQRt4mV",
    4: "https://www.youtube.com/embed/DMAGKvJGAEw?si=2XkzJXP7E0RC89jV",
    5: "https://www.youtube.com/embed/IYsUWK9ahhU?si=yRsofzt9l6YbXqs3",
    6: "https://www.youtube.com/embed/vj9VouElco4?si=5BXGH4RFdPNzGNfV",
    7: "https://www.youtube.com/embed/3Abnk38eSt4?si=BX7YBOqPxreIiZ7A",
    8: "https://www.youtube.com/embed/zLmvsX9Us_0?si=yLGAA6OrRwNOccFn",
    9: "https://www.youtube.com/embed/nvKJ0lT6byI?si=GtFHbXFDwt97SKEF",
    10: "https://www.youtube.com/embed/CfC9KD1AvHM?si=LhSkEM2bZUbVXjD4",
    // Añade más videos según las edades
  };

  if (edad && preguntas[edad]) {
    edadNino.textContent = edad;
    preguntas[edad].forEach((pregunta, index) => {
      console.log(pregunta);
      const div = document.createElement("div");
      div.innerHTML = `
                <label>${pregunta.texto}</label><br>
                <input type="radio" name="pregunta${index}" value="si"> Sí
                <input type="radio" name="pregunta${index}" value="no"> No<br>`;
      pregunta["imagen"].forEach((imagen) => {
        div.innerHTML += ` 
                <img src="${imagen}" alt="${pregunta.texto}">
                `;
      });
      div.innerHTML += `<br><br>`;
      preguntasDiv.appendChild(div);
    });
  }

  guardarBtn.addEventListener("click", () => {
    const respuestas = [];
    let todasRespondidas = true;

    const totalPreguntas = preguntas[edad].length; // Total de preguntas en función de la edad seleccionada
    let todasEnSi = true;

    preguntas[edad].forEach((pregunta, index) => {
      const respuesta = document.querySelector(
        `input[name="pregunta${index}"]:checked`
      );
      if (!respuesta) {
        todasRespondidas = false;
      } else {
        let observacion = "";
        if (respuesta.value === "no") {
          observacion = pregunta.observacion;
        }
        respuestas.push(
          `${pregunta.texto}: ${respuesta.value} ${
            observacion ? "(" + observacion + ")" : ""
          }`
        );
      }
    });

    for (let i = 0; i < totalPreguntas; i++) {
      const respuestas = document.getElementsByName(`pregunta${i}`);
      let respuestaSi = false;

      respuestas.forEach((respuesta) => {
        if (respuesta.checked && respuesta.value === "si") {
          respuestaSi = true;
        }
      });

      if (!respuestaSi) {
        todasEnSi = false;
        break; // Detiene el bucle si encuentra una respuesta que no es "Sí"
      }
    }


    if (!todasRespondidas) {
      alert("Todas las preguntas son obligatorias.");
      return;
    }
    resultadoSection.style.display = "block";

    preguntasDiv.style.display = "none";
    guardarBtn.style.display = "none";
    RegresarBtn.style.display = "none";
    const elementP = document.createElement("p");
    /*respuestas.forEach((respuesta) => {
      const li = document.createElement("li");
      li.textContent = respuesta;
      respuestasLista.appendChild(li);
    });*/
    if (todasEnSi) {
        elementP.textContent = 'su bebé está en el rango de normalidad del desarrollo psicomotor. En el anterior vídeo encontrarás actividades de apoyo para continuar su correcta estimulación.';
        respuestasLista.appendChild(elementP);
    } else {
        elementP.textContent = 'Informa al pediatra en la cita de control para un adecuado direccionamiento y sigue las recomendaciones de actividades de estimulación que aparecen en el video anterior.';
        respuestasLista.appendChild(elementP);
    }

    // Mostrar video y resultados
    resultadoSection.style.display = "block";

    let urlvideo =
      "https://www.youtube.com/embed/4D078BBFuEQ?si=2zNPKHaf0SOEnsik";
    if (edad != "") {
      urlvideo = videosPorEdad[edad];
    }
    document.getElementById(
      "video-formulario"
    ).contentWindow.document.location.href = urlvideo;
  });
}
