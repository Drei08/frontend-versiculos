const tagVersiculos = document.getElementById("versiculos");
console.log("META", import.meta.env);

const fetchData = async () => {
  console.log("META", import.meta.env);
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/versiculos`);
  const data = await res.json();
  
  tagVersiculos.textContent = data.versiculos.texto;
  
  console.log(data.versiculos.texto);
};

window.onload = () => {
  if (!localStorage.getItem("user")) {  
    window.location.href = "/login.html";
  }
};

window.fetchData = fetchData;
