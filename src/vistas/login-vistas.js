import { signInOnSubmit } from '../controller/login-controller.js';
import { registerWithGoogle } from '../controller/register-controller.js';

// Figure:
export const figureLoginRegistro = () => {
  const figureLogin = document.createElement('figure');
  figureLogin.id = 'figureLoginRegistro';

  const imageEncabezado = `
    <img src='https://image.freepik.com/vector-gratis/comida-sana-personas_24908-55204.jpg' id='imgPrincipal'>
  `;

  figureLogin.innerHTML = imageEncabezado;

  return figureLogin;
};


// Main Login
const mainLoginForm = () => {
  const mainLogin = document.createElement('main');
  mainLogin.id = 'mainLogin';

  const inicioLogin = `
           <figure id='figureLogo'>
              <img src='img/logo.jpeg' id='logoLoginRegistro'>
           </figure>
          <section id='seccionForm'>
              <p class='parrafo'>¡Bienvenido!</p>
              <form action="#" method="post">
                  <div class='inputEmail'>
                    <input type='email' class='inputRegistro' placeholder='Email' maxlength='30' name='usuarioLogin'>
                    <i class="fas fa-at"></i>
                  </div>
                  <span name='messageEmail'></span>
                  <div class='inputPassword'>
                    <input type='password' class='inputRegistro' placeholder='Password' name='passwordLogin' minlength='6'>
                    <i class="fas fa-key"></i>
                  </div>
                  <span name='messagePassword'></span>
                  <button type='button' id='botonLogin'>Log in</button>
              </form>
              <p class='parrafo'>O bien ingresa con...</p>
            <div id='iconoRedesSociales'>
                <button><a href='#'><img src='https://image.flaticon.com/icons/png/512/2392/premium/2392485.png' class='iconRed'></a></button>
                <button type="button" id="btnLoginGoogle"><a href='#'><img src='https://icon-library.net/images/google-icon-search/google-icon-search-19.jpg' class='iconRed'></a></button>
            </div>
            <p class='parrafo'>¿No tienes una cuenta? <a href="#/creacuenta" id='enlaceRegistro'>Regístrate</a></p>   
          </section>   
        `;

  mainLogin.innerHTML = inicioLogin;

  const eventoBotonLogin = mainLogin.querySelector('#botonLogin');
  eventoBotonLogin.addEventListener('click', signInOnSubmit);

  const btnLogInGoogle = mainLogin.querySelector('#btnLoginGoogle');
  btnLogInGoogle.addEventListener('click', registerWithGoogle);

  return mainLogin;
};


// Div contenedor de vista Login
export const divVistaLogin = () => {
  const divContenedorLogin = document.createElement('div');
  divContenedorLogin.id = 'divVistaLogin';

  divContenedorLogin.appendChild(figureLoginRegistro());
  divContenedorLogin.appendChild(mainLoginForm());


  return divContenedorLogin;
};