  // Obtém os valores dos campos de entrada
  const nome = document.querySelector("input[name='nome']").value;
  const email = document.querySelector("input[name='email']").value;
  const dataNascimento = document.querySelector("input[name='data_nascimento']").value;
  const dataCriacao = document.querySelector("input[name='data_criacao']").value;
  
  // Cria um objeto JSON com os dados do formulário
  const usuario = {
      nome,
      email,
      dataNascimento,
      dataCriacao
  };
  
  // Envia o objeto JSON para o back-end
  fetch("http://localhost:10666/cadastro", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario)
  })
      .then((res) => {
          if (res.status === 200) {
              // O usuário foi cadastrado com sucesso
              alert("Cadastrado com sucesso!");
          } else {
              // Ocorreu um erro ao cadastrar o usuário
              alert("Erro ao cadastrar!");
          }
      })
      .catch((err) => {
          // Ocorreu um erro inesperado
          console.log(err);
      });
  