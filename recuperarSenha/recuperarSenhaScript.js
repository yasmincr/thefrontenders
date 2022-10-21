let email = $('#email');    
console.log($('.01').css("display", 'none'))

valLogin = false;

registeredUsers = [];
registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'))

$('.btn').click((e) => {

    e.preventDefault()
  
    if (email.val() == '') {
      $('.01').css("display", '')
      $('.01').removeClass('border-success')
      $('.01').addClass('alert-danger')
      email.removeClass('border-dark')
      email.addClass('border-danger')
      $('.01').text('Login não pode ser vazio');
      valLogin = false;
    }
  
    if (valLogin) {
      validLogin()
  
    }
  
  
  })

email.on('propertychange input', () => {

    $('.01').removeClass('alert-success')
    $('.01').removeClass('alert-danger')
    email.removeClass('border-danger')
    email.addClass('border-dark')
    $('.01').css("display", 'none')
    

})

email.focusout(() => {

  if (email.val().indexOf('@') == -1 || email.val().indexOf('.') == -1) {

    if (email.val() != '') {
        $('.01').addClass('alert-danger')
      $('.01').text('Email invalido')
      email.addClass('is-invalid')
      $('.01').css("display", "")
      email.removeClass('border-dark')
      email.addClass('border-danger')
      valLogin = false;


    } 

  }else {

      $('.01').css("display", "none")
      email.removeClass('is-invalid')
      valLogin = true;

    }


})

const validLogin = () => {

    let valid;
    let arrValue;
  
    if (registeredUsers !== null) {
  
        for (let i = 0; i < registeredUsers.length; i++) {
    
        arrValue = i;
        valid = email.val() == registeredUsers[i].email;
    
        if (valid == true) {
            break
        }
    
        } 
    
        if (valid) {
            $('.01').text('E-mail de recuperação enviado com sucesso. Você será redirecionado.')
            $('.01').addClass('alert-success')
            email.addClass('is-valid')
            $('.01').css("display", "")
            email.removeClass('border-dark')
            email.addClass('border-success')
            email.attr('readonly', true)

            setTimeout(()=>{
              window.location.href = '../login/loginIndex.html'
            },2000)
  
    } else {
  
        $('.01').text('Email incorreto ou não cadastrado.')
        $('.01').addClass('alert-danger')
        email.addClass('is-invalid')
        $('.01').css("display", "")
        email.removeClass('border-dark')
        email.addClass('border-danger')

    }
  
    }
  
  }