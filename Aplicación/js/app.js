Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Welcome",
    showConfirmButton: false,
    timer: 2000
  });

  function Ncl(){
  Swal.fire({
    title: "Hola, soy Ncl 🤍",
    icon: "success",
    draggable: true
  });
}

function Drgn(){
    Swal.fire({
      title: "Hola, soy Drgn 🐉",
      icon: "success",
      draggable: true
    });
  }

  function Fnx(){
    Swal.fire({
      title: "Hola, soy Fnx 🐦‍🔥 ",
      icon: "success",
      draggable: true
    });
  }

  function mensaje(){
  Swal.fire({
    title: "Bienvenidos Emojis 🤍🐉🐦‍🔥.",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0, 123, 88, 0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  });
}
  