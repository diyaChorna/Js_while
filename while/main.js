// запросити пароль 
// 4 спроби, неправильно спроби зменшуються, коли спроб не буде будь ласка пробуйте пізніше
// правильней запрошуємо на сайт

let password ;
let count = 0;
while (password != 'LOGOS'){
      password = prompt('Введіть будь ласка пароль');
      console.log(password);
      count ++;
      if(count ==4){
            console.log('Будь ласка спробуйте пізніше');
      }
}
console.log("Ласкаво просимо на наш сайт");