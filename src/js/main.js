const tagVersiculos = document.getElementById("versiculos");

const fetchData = async () => {

  const res = await fetch("http://localhost:3333/versiculos");
  const data = await res.json();
  
  tagVersiculos.textContent = data.versiculos.texto;
  
  console.log(data.versiculos.texto);

};

window.fetchData = fetchData;
