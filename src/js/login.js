const login = async (login) => {

  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");

  const bodyString = JSON.stringify({
      email,
      password,
    })

  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/auth`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: bodyString,
  });

  if(res?.status == 200){
  localStorage.setItem("user", bodyString);
  window.location.href = "/";
  }
};

window.login = login;