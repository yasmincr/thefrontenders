let nome = $('#nome');
let email = $('#email');

let rg = $('#rg');
let data = $('#data');
let cep = $('#cep');

let senha = $('#senha');
let confirmarSenha = $('#confirmarSenha');

let nomelc = false;
let emaillc = false;
let rglc = false;
let datalc = false;
let ceplc = false;
let senhalc = false;
let csenhalc = false;

let regexrg = /\d{2}.\d{3}.\d{3}-\d{2}/gi;
let regexcep = /\d{5}-\d{3}/gi


let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') ||'[]')

$('#form-cadastro').submit((e) => {

    e.preventDefault()

    if (nome.val() == '') {
        nome.addClass('is-invalid');
        nome.removeClass('border-dark')
        nome.addClass('border-danger')
        $('.01').text('Nome não pode ser vazio');
        nomelc = false
    }

    if (email.val() == '') {
        email.addClass('is-invalid')
        email.removeClass('border-dark')
        email.addClass('border-danger')
        $('.02').text('Email não pode ser vazio')
        emaillc = false
    }

    if (rg.val() == '') {
        rg.addClass('is-invalid')
        rg.removeClass('border-dark')
        rg.addClass('border-danger')
        $('.03').text('Rg obrigatorio')
        rglc = false;
    }

    if (data.val() == '') {
        data.addClass('is-invalid')
        data.removeClass('border-dark')
        data.addClass('border-danger')
        $('.04').text('Data de nascimento não pode ser vazio')
        datalc = false;
    }

    if (cep.val() == '') {
        cep.addClass('is-invalid')
        cep.removeClass('border-dark')
        cep.addClass('border-danger')
        $('.05').text('Endereço obrigatorio')
        ceplc = false;
    }

    if (senha.val() == '') {
        senha.addClass('is-invalid')
        senha.removeClass('border-dark')
        senha.addClass('border-danger')
        $('.06').text('Senha obrigatorio')
        senhalc = false;
    }

    if (confirmarSenha.val() == '') {
        confirmarSenha.addClass('is-invalid')
        confirmarSenha.removeClass('border-dark')
        confirmarSenha.addClass('border-danger')
        $('.07').text('Senha obrigatorio')
        csenhalc = false;
    }

    if( nomelc && emaillc && rglc && datalc && ceplc && senhalc && csenhalc){
        
        console.log('teste')
        cadUser()

    }


})

const cadUser = () =>{
    let valid;

    if(registeredUsers.length == 0){  

    }else{

        for (let i = 0 ; i < registeredUsers.length; i++) {
                valid = email.val() == registeredUsers[i].email;
                if(valid==true){
                    break
                }
        }
 
    }

    if(valid == true){
        $('.02').text('Email já cadastrado')
        email.addClass('is-invalid')
        email.removeClass('border-dark')
        email.addClass('border-danger')
        $('.02').css("display", "")
        emaillc = false;
    }else{   
        validRg(); 
    } 
}

const validRg = () =>{
    let valid;

    for (let i = 0 ; i < registeredUsers.length; i++) {
        valid = rg.val() == registeredUsers[i].rg
        if(valid==true){
            break
        }
    }

    if(valid == true){
        $('.03').text('RG já cadastrado')
        rg.addClass('is-invalid')
        rg.removeClass('border-dark')
        rg.addClass('border-danger')
        $('.03').css("display", "")
        rglc = false;

    }else{
        register();
    }
}

const register = () =>{
    registeredUsers.push (
        {
            nome:nome.val(),
            email:email.val(),
            rg:rg.val(),
            data:data.val(),
            cep:cep.val(),
            senha:senha.val(),
        }
    )

    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))

    alert`Cadastrado com sucesso.`

    setTimeout(()=>{
        window.location.href = '../login/loginIndex.html'
      },600)
}

nome.keyup(() => {
    if (nome.val().length < 2) {
        $('.01').text('Nome não pode possuir menos que 2 caracteres')
        nome.addClass('is-invalid')
        nome.removeClass('border-dark')
        nome.addClass('border-danger')
        $('.01').css("display", "")
        nomelc = false;
    } else {
        $('.01').css("display", "none")
        nome.removeClass('is-invalid')
        nome.addClass('border-dark')
        nome.removeClass('border-danger')
        nomelc = true;
    }
})

email.keyup(() => {
    if (email.val().indexOf('@') == -1 || email.val().indexOf('.') == -1) {
        $('.02').text('Email invalido')
        email.addClass('is-invalid')
        email.removeClass('border-dark')
        email.addClass('border-danger')
        $('.02').css("display", "")
        emaillc = false;
    } else {
        $('.02').css("display", "none")
        email.removeClass('is-invalid')
        email.addClass('border-dark')
        email.removeClass('border-danger')
        emaillc = true;
    }
})

rg.on('propertychange input', () => {

    if (!regexrg.test(rg.val())) {
        $('.03').text('RG invalido')
        rg.addClass('is-invalid')
        rg.removeClass('border-dark')
        rg.addClass('border-danger')
        $('.03').css("display", "")
        rglc = false;

    } else {
        $('.03').css("display", "none")
        rg.removeClass('is-invalid')
        rg.addClass('border-dark')
        rg.removeClass('border-danger')
        rglc = true;
    }
})

senha.on('propertychange input', () => {

    if (senha.val().length < 8) {
        $('.06').text('senha precisa no minino 8 caracteres')
        senha.addClass('is-invalid')
        senha.removeClass('border-dark')
        senha.addClass('border-danger')
        $('.06').css("display", "")
        senhalc = false;

    } else {
        $('.06').css("display", "none")
        senha.removeClass('is-invalid')
        senha.addClass('border-dark')
        senha.removeClass('border-danger')
        senhalc = true;
    }
})

confirmarSenha.on('propertychange input', () => {

    if (confirmarSenha.val() != senha.val()) {
        $('.07').text('senha precisam ser iguais')
        confirmarSenha.addClass('is-invalid')
        confirmarSenha.removeClass('border-dark')
        confirmarSenha.addClass('border-danger')
        $('.07').css("display", "")
        csenhalc = false;

    } else {
        $('.07').css("display", "none")
        confirmarSenha.removeClass('is-invalid')
        confirmarSenha.addClass('border-dark')
        confirmarSenha.removeClass('border-danger')
        csenhalc = true;
    }
})


data.on('propertychange input',() => {

    if (data.val().length < 10) {
        $('.04').text('Data incorreta')
        data.addClass('is-invalid')
        data.removeClass('border-dark')
        data.addClass('border-danger')
        $('.04').css("display", "")
        datalc = false;
    } else {
        $('.04').css("display", "none")
        data.removeClass('is-invalid')
        data.addClass('border-dark')
        data.removeClass('border-danger')
        datalc = true;
    }
})

cep.on('propertychange input', () => {

    if (!regexcep.test(cep.val())) {
        $('.05').text('Cep invalido')
        cep.addClass('is-invalid')
        cep.removeClass('border-dark')
        cep.addClass('border-danger')
        $('.05').css("display", "")
        ceplc = false;
    } else {
        $('.05').css("display", "none")
        cep.removeClass('is-invalid')
        cep.addClass('border-dark')
        cep.removeClass('border-danger')
        ceplc = true;
    }
})

cep.focusout(() => {

    if (cep.val().length == 9) {
        let cepp = cep.val();
        let cepVal = '';
        
        for (let i = 0; i < cepp.length; i++) {
            if (cepp[i] !== '-') {

                cepVal += cepp[i]
            }
        }

        const consult = () => {


            $.ajax({
                url: `https://viacep.com.br/ws/${cepVal}/json/`,
                success: resultado => dados(resultado),

                error: () => {
                    alert`Erro`
                },

                statusCode: (code) => {
                    console.log(code)
                }
            });

        };


        const dados = (dado) => {
            let { cep, logradouro, complemento, bairro, localidade, uf } = dado

            $('#endereco').val(logradouro)
            $('#estado').val(uf)
            $('#cidade').val(localidade)
            $('#bairro').val(bairro)
            $('#complemento').val(complemento)

        }

        consult()
    }else{
        $('.05').text('Cep invalido') 
    }

})