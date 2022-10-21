let email = $('#email');
let senha = $('#senha');

let valLogin = false;
let valSenha = false;

registeredUsers = [];
registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'))

$('.btn').click((e) => {

  e.preventDefault()

  if (email.val() == '') {
    email.addClass('is-invalid');
    email.removeClass('border-dark')
    email.addClass('border-danger')
    $('.01').text('Login não pode ser vazio');
    valLogin = false;
  }

  if (senha.val() == '') {
    senha.addClass('is-invalid');
    senha.removeClass('border-dark')
    senha.addClass('border-danger')
    $('.02').text('senha não pode ser vazio');
    valSenha = false;
  }

  console.log(valLogin, valSenha)
  if (valLogin && valLogin) {
    console.log('teste')
    validLogin()

  }


  return false


})



email.on('propertychange input', () => {

  email.removeClass('border-danger')
  email.addClass('border-dark')
  $('.01').css("display", "")
  email.removeClass('is-invalid')

})

email.focusout(() => {
  console.log(valLogin, 00)

  if (email.val().indexOf('@') == -1 || email.val().indexOf('.') == -1) {

    if (email.val() != '') {

      $('.01').text('Email invalido')
      email.addClass('is-invalid')
      $('.01').css("display", "")
      email.removeClass('border-dark')
      email.addClass('border-danger')
      valLogin = false;
      console.log(valLogin,01)

    } 

  }else {

      $('.01').css("display", "none")
      email.removeClass('is-invalid')
      console.log(valLogin, valSenha)
      valLogin = true;
      console.log(valLogin,02)


    }


})


senha.on('propertychange input', () => {

  if (senha.val().length < 8) {

    $('.02').text('senha precisa no minino 8 caracteres')
    senha.addClass('is-invalid')
    $('.02').css("display", "")
    valSenha = false;
    senha.removeClass('border-dark')
    senha.addClass('border-danger')

  } else {

    senha.removeClass('border-danger')
    senha.addClass('border-dark')
    $('.02').css("display", "none")
    senha.removeClass('is-invalid')
    valSenha = true;
  }
})


const validLogin = () => {

  let valid;
  let arrValue;

  if (registeredUsers !== null) {
    console.log(1.1)

  for (let i = 0; i < registeredUsers.length; i++) {

    arrValue = i;
    valid = email.val() == registeredUsers[i].email;

    if (valid == true) {
      break
    }

  } 
  
  if (valid) {
    console.log(1.2)
    valiSenha(arrValue)

  } else {

    $('.01').text('Email incorreto ou não cadastrado.')
    email.addClass('is-invalid')
    $('.01').css("display", "")
    email.removeClass('border-dark')
    email.addClass('border-danger')

    if (senha.val() != '') {

      senha.addClass('is-invalid')
      $('.02').text('')
      senha.removeClass('border-dark')
      senha.addClass('border-danger')
    }


  }

  }

}

const valiSenha = (arrV) => {
  let valid;

  valid = senha.val()  == registeredUsers[arrV].senha;

  if (valid) {

    senha.removeClass('border-dark')
    senha.addClass('border-success')
    email.removeClass('border-dark')
    email.addClass('border-success')

    alert`Você será redirecionado`

    
    setTimeout(()=>{
      window.location = 'https://google.com'
    },600)

  } else {
    console.log(1.5)
    $('.02').text('Email ou senha invalidos.')
    senha.addClass('is-invalid')
    email.addClass('is-invalid')
    $('.02').css("display", "")
    senha.removeClass('border-dark')
    senha.addClass('border-success')
    email.removeClass('border-dark')
    email.addClass('border-success')

  }
}