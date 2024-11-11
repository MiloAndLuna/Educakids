document.addEventListener("DOMContentLoaded", () => {
  const edadSection = document.getElementById("edad-section");
  const enviarBtn = document.getElementById("enviar");

  enviarBtn.addEventListener("click", () => {
    const edad = document.getElementById("edad").value;
    if (edad) {
      window.location.href = `preguntas.html?edad=${edad}`;
    } else if (edad == "") {
      alert("Seleccione una edad para continuar.");
    } else {
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
          "Si usted toca los labios de su bebé en las esquinas, ¿él gira la cabeza hacia ese lado y empieza a mover los labios?",
        imagen: ["imagenes/1.1.jpg", "imagenes/1,1.jpg"],
        observacion: "Ausencia de reflejo de búsqueda y succión",
      },
      {
        texto:
          "Cuando usted pasa a su bebé de sus brazos a la cama, ¿él abre los brazos al mismo tiempo?",
        imagen: ["imagenes/1.2.jpg"],
        observacion: "Ausencia del reflejo de moro simétrico",
      },
      {
        texto:
          "Cuando usted pone a su bebé boca arriba y le habla suave o lo toca, ¿él mueve sus brazos y piernas?",
        imagen: ["imagenes/1.3.jpg"],
        observacion: "Alteración en la movilidad de extremidades",
      },
      {
        texto:
          "Si usted toca la palma de la mano de su bebé, ¿él aprieta su mano?",
        imagen: ["imagenes/1.4.jpg"],
        observacion: "Ausencia del reflejo de prensión palmar",
      },
      {
        texto:
          "Si usted se acerca a su bebé y hace sonidos con una sonaja, aplaude o enciende una luz cerca de él, ¿el bebé se mueve o hace algún sonido?",
        imagen: ["imagenes/1.5.jpg"],
        observacion: "Ausencia de reacción ante luz y sonidos",
      },
      {
        texto:
          "Cuando usted mueve un objeto de un lado a otro frente a su bebé, ¿él puede seguirlo con la mirada?",
        imagen: ["imagenes/1.6.jpg"],
        observacion:
          "Alteración en el seguimiento de objetos de manera horizontal",
      },
    ],
    2: [
      {
        texto:
          "Si usted agarra a su bebé de las manos mientras está acostado boca arriba y lo hala suavemente para sentarlo, ¿él puede mantener la cabeza en su lugar solo?",
        imagen: ["imagenes/2.1.jpg"],
        observacion: "Ausencia del sostén de cabeza",
      },
      {
        texto:
          "Cuando su bebé está boca abajo y usted lo mira desde arriba, ¿él puede apoyarse en los brazos y levantar la cabeza y el pecho por al menos 3 segundos para mirarlo?",
        imagen: ["imagenes/2.2.jpg"],
        observacion:
          "Ausencia de la capacidad de levantar la cabeza y pecho estando boca abajo",
      },
      {
        texto:
          "Si su bebé está boca arriba y usted hace un sonido, ¿él gira la cabeza para buscar de dónde viene?",
        imagen: ["imagenes/2.3.jpg"],
        observacion: "Ausencia de giro de cabeza desde la línea media",
      },
      {
        texto:
          "¿Cuando su bebé está acostado boca arriba mira sus manos mientras las mueve?",
        imagen: ["imagenes/2.4.jpg"],
        observacion: "Ausencia de abrir y mirar sus manos",
      },
      {
        texto:
          "Si usted le pasa un objeto liviano a su bebé…¿él lo agarra por al menos 3 segundos?",
        imagen: ["imagenes/2.5.jpg"],
        observacion: "Ausencia de sostén de objetos",
      },
      {
        texto:
          "Después de agarrar el objeto, ¿su bebé intenta llevarlo a la boca?",
        imagen: ["imagenes/2.6.jpg"],
        observacion: "Dificultad para llevar el objeto a la boca",
      },
    ],
    3: [
      {
        texto:
          "Si usted sienta a su bebé y lo sostiene por la espalda, ¿él puede mantener su cabeza sin apoyo?",
        imagen: ["imagenes/3.1.jpg"],
        observacion: "Sostén de cabeza sin apoyo en posición de sentado",
      },
      {
        texto:
          "En la misma posición, si usted le quita el apoyo de la espalda por un momento, ¿su bebé puede mantenerse sentado por al menos 3 segundos?",
        imagen: ["imagenes/3.2.jpg"],
        observacion: "Posición de sentado momentáneamente",
      },
      {
        texto:
          "Si su bebé está boca abajo en la cama y usted lo llama desde un lugar donde él no lo ve, ¿intenta girarse para buscarlo?",
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
          "Si su bebé tiene un objeto en la mano, ¿intenta agarrarlo fuerte para que no se lo quiten?",
        imagen: ["imagenes/3.5.jpg"],
        observacion: "Capacidad de retener un objeto",
      },
      {
        texto: "¿Su bebé es capaz de pasar un objeto de una mano a otra?",
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
          "Si su bebé está boca abajo y usted pone un objeto llamativo al frente, ¿puede arrastrarse para alcanzarlo?",
        imagen: ["imagenes/4.3.jpg", "imagenes/4,3.jpg"],
        observacion: "Capacidad de arrastre y agarre de objetos",
      },
      {
        texto:
          "Cuando usted le da dos objetos llamativos a su bebé, ¿puede agarrarlos y sostenerlos sin soltarlos por al menos 5 segundos?",
        imagen: ["imagenes/4.4pg"],
        observacion: "Sostén de objetos",
      },
      {
        texto:
          "Si su bebé tiene un objeto en la mano, ¿puede soltarlo para agarrar otro?",
        imagen: ["imagenes/4.5.jpg"],
        observacion: "Selección de objetos",
      },
      {
        texto:
          "¿Su bebé puede agarrar objetos pequeños usando el pulgar y el índice?",
        imagen: ["imagenes/4.6.jpg"],
        observacion: "Ejecución de movimientros finos formando la pinza",
      },
    ],
    5: [
      {
        texto:
          "Si su bebé está boca abajo y usted pone un objeto llamativo al frente, ¿puede gatear hacia él?",
        imagen: ["imagenes/5.1.jpg"],
        observacion: "Habilidad de gateo",
      },
      {
        texto:
          "¿Su bebé puede pasar de estar sentado a ponerse de pie usando un objeto cerca?",
        imagen: ["imagenes/5.2pg"],
        observacion: "Adaptarse a la postura de pie",
      },
      {
        texto:
          "Si usted coloca a su bebé de pie y lo suelta, ¿puede mantenerse sin apoyo por al menos 2 segundos?",
        imagen: ["imagenes/5.3.jpg"],
        observacion: "Da pasos",
      },
      {
        texto:
          "Cuando su bebé tiene un objeto en cada mano y usted le da un tercero, ¿puede sostener los tres por al menos 3 segundos?",
        imagen: ["imagenes/5.4.jpg"],
        observacion: "Sostén de objetos",
      },
      {
        texto:
          "Si usted deja sentado a su bebé frente a una canasta con objetos interesantes para él…¿él es capaz de sacar objetos de esta?",
        imagen: ["imagenes/5.5.jpg"],
        observacion: "Saca y busca objetos",
      },
      {
        texto: "Al esconder un juguete de su hijo…¿Él es capaz de buscarlo?",
        imagen: ["imagenes/5.6.jpg"],
        observacion: "Búsqueda de objetos",
      },
    ],
    6: [
      {
        texto:
          "Si usted juega con su hijo a construir torres con cubos…¿él puede hacer una torre de tres cubos?",
        imagen: ["imagenes/6.1.jpg"],
        observacion: "Habilidad para armar torre de tres cubos",
      },
      {
        texto:
          "Cuando usted le lee a su hijo y pone el libro frente a él…¿él puede pasar las hojas del libro con su mano?",
        imagen: ["imagenes/6.2.jpg"],
        observacion: "Pasa hojas de un libro",
      },
      {
        texto:
          "Cuando le da de comer con una cuchara y la deja a un lado…¿él es capaz de coger la cuchara y llevársela a la boca?",
        imagen: ["imagenes/6.3.jpg"],
        observacion: "Habilidad para tomar una cuchara",
      },
      {
        texto:
          "Si usted deja a su bebé sentado en el suelo y lo llama desde arriba ofreciéndole un objeto, ¿puede ponerse de pie?",
        imagen: ["imagenes/6.4.jpg"],
        observacion: "Ponerse de pie sin ayuda",
      },
      {
        texto:
          "Cuando su bebé está de pie y usted le pide que se acerque, ¿él es capaz de caminar al menos cuatro o cinco pasos sin caerse?",
        imagen: ["imagenes/6.5.jpg"],
        observacion: "Da pasos sin perder el equilibrio",
      },
      {
        texto:
          "Mientras el camina sin ayuda, ¿Es capaz de alternar las manos y pies conservando el equilibrio?",
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
          "Cuando usted juega con su hijo a construir torres con cubos…¿él es capaz de hacer una torre de cinco cubos?",
        imagen: ["imagenes/7.6.jpg"],
        observacion: "Habilidad de armar torre de cinco cubos",
      },
    ],
    8: [
      {
        texto:
          "Cuando su bebé salta, ¿puede despegar ambos pies del suelo sin perder el equilibrio al menos dos veces seguidas?",
        imagen: ["imagenes/8.1.jpg"],
        observacion: "Capacidad de saltar con los pies juntos",
      },
      {
        texto:
          "Si usted le enseña a su bebé a ponerse en punta de pies, ¿puede levantar ambos talones al mismo tiempo y mantenerse así por al menos 3 segundos?",
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
          "Si usted le da a su bebé una hoja y un crayón y le pide que haga líneas horizontales y verticales, ¿puede hacerlas más o menos rectas?",
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
          "¿Su bebé puede bajar al menos dos escalones usando solo la baranda para apoyarse?",
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
