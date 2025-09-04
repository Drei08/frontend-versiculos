const tagVersiculos = document.getElementById("versiculos"); 

const fetchData = async ()  => {  
try { 
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/versiculos`);
  const data = await res.json();

  tagVersiculos.textContent = data.texto;
  
  console.log(data.texto);
} 

catch (error) {

  console.error("Erro ao buscar versículos:", error);
  tagVersiculos.textContent = "Erro ao carregar versículo.";

  }

};

window.fetchData = fetchData;
