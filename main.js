const usuarioGithub = 'octocat';

const endpoint = `https://api.github.com/users/${usuarioGithub}`;

const avatar = document.getElementById('avatar');
const nome = document.getElementById('nome');
const username = document.getElementById('username');
const repositorios = document.getElementById('repositorios');
const seguidores = document.getElementById('seguidores');
const seguindo = document.getElementById('seguindo');
const linkGithub = document.getElementById('linkGithub');

async function buscarUsuario(){

    try{

        const resposta = await fetch(endpoint);

        if(!resposta.ok){
            throw new Error("Erro ao buscar dados");
        }

        const dados = await resposta.json();

        avatar.src = dados.avatar_url;
        nome.innerText = dados.name || "Nome não disponível";
        username.innerText = "@" + dados.login;

        repositorios.innerText = dados.public_repos;
        seguidores.innerText = dados.followers;
        seguindo.innerText = dados.following;

        linkGithub.href = dados.html_url;

    }catch(erro){

        console.log("Erro:", erro);

    }

}

buscarUsuario();