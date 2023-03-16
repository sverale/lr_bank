// const cal = document.querySelector('.cal');
// const result = document.querySelector('#result');

// cal.addEventListener('click', function(event) {
//   if(!event.target.classList.contains('cal_btn')) return;

//   const value = event.target.innerText;

 result.innerText = 'Введите пароль'
class User {
  numcard = []
  password = []
 
  name = "name"
  lastname = "lastname"

  constructor(numcard, password, name, lastname) {
      this.numcard = numcard
      this.password = password
      this.name = name
      this.lastname = lastname
  }
}

class Bank {
  paymobile() {
// проверка пароля на валидность
  }   //оплата мобильной связи

  cash () {} //снятие наличных

  changpassword () {}  //изменение пароля

  replenishment () {}  //пополнение счета

  balance () {}  //просмотр баланса

  entering_verifying () {}  //метод ввода и проверки корректности пароля

}


// let users = []

let client1 = new User (7672432809812443234, 0000, "Bob", "Lees")
let client2 = new User (3213544648678613649, 0011, "Kris", "Kool")







