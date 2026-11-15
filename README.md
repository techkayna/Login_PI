# 🚦 SmartTraffic PI — Tela de Login e Painel Semafórico (Docker)

Interface web de autenticação e painel inicial de monitoramento/controle semafórico desenvolvida para o **Projeto Integrador (PI)** de **Governança Inteligente de Semáforos IoT** (disciplina de **Microsserviços em Tecnologia da Informação** — Senac).

O projeto está empacotado em uma imagem **Docker** utilizando o servidor web **Nginx** (`nginx:alpine`) para garantir portabilidade e execução padronizada em qualquer ambiente.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5, CSS3 e JavaScript (Vanilla):** Estrutura, estilização e validação interativa do fluxo de login e troca de fases do semáforo.
* **Docker:** Empacotamento da aplicação em container isolado.
* **Nginx (`nginx:alpine`):** Servidor web leve responsável por servir os arquivos estáticos na porta `80`.

---

## 📁 Estrutura do Projeto

```text
login-pi/
├── Dockerfile   # Instruções para construção da imagem Docker com Nginx
├── index.html   # Estrutura da tela de Login e do Painel de Governança Semafórica
├── style.css    # Estilização responsiva e estados visuais do semáforo
├── script.js    # Lógica de autenticação e simulação de fases semafóricas
└── README.md    # Documentação do projeto
