let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList = '';
        menuVisible = false;
    }else{
        document.getElementById('nav').classList = 'responsive';
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById('nav').classList = '';
    menuVisible = true;
}

function efectSkills(){
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add('c');
        habilidades[1].classList.add('java');
        habilidades[2].classList.add('python');
        habilidades[3].classList.add('javascript');
        habilidades[4].classList.add('htmlcss');
        habilidades[5].classList.add('photoshop');
        habilidades[6].classList.add('hp1');
        habilidades[7].classList.add('hp2');
        habilidades[8].classList.add('hp3');
        habilidades[9].classList.add('hp4');
        habilidades[10].classList.add('hp5');
        habilidades[11].classList.add('hp6');
    }
}

window.onscroll = function(){
    efectSkills();
}