
var radioSim = document.getElementById('opcaoSim');
var radioNao = document.getElementById('opcaoNao');
var caixaTexto = document.getElementById('caixaTexto');
var labelTexto = document.getElementById('textoUrgencia');

radioSim.addEventListener('change', function () {
  if (this.checked) {
    caixaTexto.style.display = 'block';
    labelTexto.style.display = 'block';
  }
});

radioNao.addEventListener('change', function(){
  if (this.checked){
    caixaTexto.style.display = 'none';
    labelTexto.style.display = 'none';
  }
});


document.getElementById('enviarWhatsapp').addEventListener('click', function() {
    var numeroTelefone = '5561991867295';
    var mensagem = 'Olá, vim através do seu site!'; 
    var mensagemCodificada = encodeURIComponent(mensagem);
    var linkWhatsapp = 'https://api.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + mensagemCodificada;

    window.open(linkWhatsapp);
});

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  // Rolando suavemente a página até o topo
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

// Exibindo ou ocultando o botão de rolagem para o topo com base na posição de rolagem
window.addEventListener("scroll", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    // Se a posição de rolagem vertical for maior que 500px, exiba o botão, caso contrário, oculte-o
    if (window.pageYOffset > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

document.getElementById("btnToTop").addEventListener("click", function() {
  // Rolando suavemente a página até o topo
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

// Exibindo ou ocultando o botão de rolagem para o topo com base na posição de rolagem
window.addEventListener("scroll", function() {
  var btnToTop = document.getElementById("btnToTop");
  // Se a posição de rolagem vertical for maior que 400px, exiba o botão, caso contrário, oculte-o
  if (window.pageYOffset > 100) {
      btnToTop.style.display = "block";
  } else {
      btnToTop.style.display = "none";
  }
});
  


function togglePasswordVisibility() {
  event.preventDefault();
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('passwordIcon');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordIcon.classList.remove('bi-eye-fill');
      passwordIcon.classList.add('bi-eye-slash-fill');
    } else {
      passwordInput.type = 'password';
      passwordIcon.classList.remove('bi-eye-slash-fill');
      passwordIcon.classList.add('bi-eye-fill');
    }
};

function togglePasswordVisibility2() {
  event.preventDefault();
    const passwordInput2 = document.getElementById('password2');
    const passwordIcon2 = document.getElementById('passwordIcon2');

    if (passwordInput2.type === 'password') {
      passwordInput2.type = 'text';
      passwordIcon2.classList.remove('bi-eye-fill');
      passwordIcon2.classList.add('bi-eye-slash-fill');
    } else {
      passwordInput2.type = 'password';
      passwordIcon2.classList.remove('bi-eye-slash-fill');
      passwordIcon2.classList.add('bi-eye-fill');
    }
};

function togglePasswordVisibility3() {
  event.preventDefault();
    const passwordInput3 = document.getElementById('password3');
    const passwordIcon3 = document.getElementById('passwordIcon3');

    if (passwordInput3.type === 'password') {
      passwordInput3.type = 'text';
      passwordIcon3.classList.remove('bi-eye-fill');
      passwordIcon3.classList.add('bi-eye-slash-fill');
    } else {
      passwordInput3.type = 'password';
      passwordIcon3.classList.remove('bi-eye-slash-fill');
      passwordIcon3.classList.add('bi-eye-fill');
    }
};

function alternatePages (){
  const button1 = document.getElementById('btn1');
  const button2 = document.getElementById('btn2');

  document.getElementById('btn1').addEventListener('click', function() {
    var info1 = document.getElementById('informacao1');
    var info2 = document.getElementById('informacao2');

    button1.classList.add('clicked');
    button2.classList.remove('clicked');
    info1.classList.add('show');
    info2.classList.remove('show');
  });

  document.getElementById('btn2').addEventListener('click', function() {
    var info1 = document.getElementById('informacao1');
    var info2 = document.getElementById('informacao2');

    button1.classList.remove('clicked');
    button2.classList.add('clicked');
    info2.classList.add('show');
    info1.classList.remove('show');
  });

};


