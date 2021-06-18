const clicouEmTrocar= (evento) =>{
    evento.preventDefault();

    let imagem2= document.getElementById('flash');
    imagem2.src= 'retro1.jpg';
};

const iniciar = ()=> {
    document.getElementById('troca').addEventListener('click', clicouEmTrocar);
};

document.addEventListener('DOMContentLoaded', iniciar);