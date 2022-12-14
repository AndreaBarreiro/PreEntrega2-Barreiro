//.....Alertas Head......//

let btnDireccion = document.getElementById("showDireccion");
btnDireccion.addEventListener("click", () => {
  Swal.fire({
    title: "Pediatra",
    text: "Almafuerte 5543, Castelar",
    imageUrl:
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?output=thumbnail&cb_client=lu.gallery.gps&panoid=awqCqCumv4m8oUnVhHxQAg&w=141&h=101&thumb=2&yaw=342.15317&pitch=0",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Foto Consultorio Castelar",
  });
});

let btnHorarios = document.getElementById("showHorarios");
btnHorarios.addEventListener("click", ()=> {
  Swal.fire({
    title: 'lunes, miercoles y viernes de 15 a 20 hs.',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
})

let btnContacto = document.getElementById("showContacto");
btnContacto.addEventListener("click", ()=> {
  Swal.fire('dra.PerezA@gmail.com')
})

//...........Pedir Turno............//

let diaSemana = {
  1: "Lunes",
  2: "Miercoles",
  3: "Viernes",
};

let horario = {
  1: "14 hs",
  2: "15 hs",
  3: "16 hs",
  4: "17 hs",
  5: "18 hs",
};

let limite = 3;

for (let index = 1; index <= limite; index++) {
  console.log("El dia de la semana es" + diaSemana[index]);
}

let limiteHor = 5;

for (let index = 1; index <= limiteHor; index++) {
  console.log("El hoario es " + horario[index]);
}

//....Mostrar fecha en el login.......//
