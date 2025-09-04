const tagVersiculos = document.getElementById("versiculos"); 

const fetchData = async () => {
  try {

    const res = await fetch(import.meta.env.VITE_BACKEND_URL);
    
    const data = await res.json();

    tagVersiculos.textContent = data.texto;
    console.log(data.texto);

  } catch (err) {
    console.error("Erro ao buscar versículo:", err);
  }
};

window.fetchData = fetchData;