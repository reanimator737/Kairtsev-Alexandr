//Вкладки в секции Our services
let ourServices = document.querySelector('.serviceContent ul');
ourServices.onclick = function (event) {
    if (event.target.tagName === 'LI'){
        removeActive(ourServices.children);
        event.target.classList.add('active');
        let data = event.target.dataset.name;
        let divS = document.querySelectorAll(`.serviceContent div`);
        //Проверка дата-атрибута и формирования контента
        checkData(divS,data);
    }
};
//Поиск картинок из нужной секции
//
let flag = 12;
let  tabsInWork = document.querySelector('.tabsInWork');
let buttonInWork = document.querySelector('.work button.button');
// Контроль флага
buttonInWork.onclick = function(event){
  flag += 12;
  let animation = document.querySelector('.load-1');
  buttonInWork.style.display = 'none';
  animation.classList.add('active');
  let i = 3;
  let interval = setInterval(()=>{
      i--;
      if (i === 0){
          animation.classList.remove('active');
          document.querySelector('.tabsInWork .active').click();
          buttonInWork.style.display = 'block';
          clearInterval(interval);
      }
  },1000);
  if (flag === 36){
      buttonInWork.style.visibility = 'hidden';
  }
};
//Фиксация клика пользователя по полю .TabsInWork
tabsInWork.onclick = function (event) {
    if (event.target.tagName === 'LI') {
        //Удаляем все класс актив
        let allContent = Array.from(document.querySelector('.contentInWork').children);
        //Удаляем класс актив
        removeActive(allContent);
        removeActive(tabsInWork.children);
        event.target.classList.add('active');
        //
        if (event.target.innerText === 'All') {
            //Добавляем класс актив первым flag элементам
          showFilteredContent(allContent, flag)
        } else{
            allContent = allContent.filter((elem, index) =>  index < flag);
            let filterContent = allContent.filter((key)=> key.dataset.name === event.target.innerText);
            //Добавляем класс актив всем элементам из filterContent
            showFilteredContent(filterContent, filterContent.length)
        }
    }
};
//Карусель
//
let panelWithIcon = document.querySelector('.panelWithIcon');
panelWithIcon.onclick = function (event) {
    if(event.target.classList.contains('icon')){
        let ArrayOfItems = Array.from(panelWithIcon.children).filter((key) => key.tagName === 'DIV');
        removeActive(ArrayOfItems);
        event.target.classList.add('active');
        let number = event.target.dataset.number - 1;
        // Удаляем все классы актив, добавляем класс актив к нужному элементу
        fab_workWithIcon('div.bigIcon', number);
        fab_workWithIcon('p', number);
        fab_workWithIcon('h2', number);
        fab_workWithIcon('h3', number);
    } else if (event.target.tagName === 'BUTTON'){
        let activeNow = document.querySelector('.panelWithIcon .active');
        const valueOfArrow = event.target.innerText;
        switch (valueOfArrow){
            case '>':
                if(activeNow.nextElementSibling.tagName === 'DIV'){
                    activeNow.nextElementSibling.click()
                }
                break;
            case '<':
                if(activeNow.previousElementSibling.tagName === 'DIV') {
                    activeNow.previousElementSibling.click();
                }
                break;
        }
    }
};
function fab_workWithIcon(str,number) {
    let smt = document.querySelectorAll(`.clientFeedback ${str}`);
    removeActive(smt);
    smt[number].classList.add('active')
}
function removeActive(array) {
    for (let key of array){
        key.classList.remove('active')
    }
}
function showFilteredContent(array, howMuch) {
    for (let i = 0; i < howMuch; i++){
        array[i].classList.add('active')
    }
}
function checkData(array,data) {
    for (let key of array){
        if(key.dataset.name === data){
            key.classList.add('active')
        }else if (key.classList.contains('active')){
            key.classList.remove('active')
        }
    }
}