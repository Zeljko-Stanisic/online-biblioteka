export default function validate(values){
    let error = {}

    if(values.username == "") {
        error.username = "Polje je obavezno"
    }else if (values.username.length < 4  || values.username.length > 20 ) {
        error.username = "Polje mora imati izmedju 4 i 20 karaktera!"
    }

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(values.password == ""){
        error.password = "Polje je obavezno"
    }else if (values.password.length < 4 || values.password.length > 16){
        error.password = "Polje mora da sazdrzi najmanje 4 a najvise 16 karaktera"
    }else if (!strongRegex.test(values.password)){
        error.password = "Polje mora da sadrži mala, velika slova, broj i neke od karaktera ! @ # $ % &"
    }
    return error;

    
    
    
}
