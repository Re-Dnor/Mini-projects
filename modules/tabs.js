function tabs() {
  

// TABS

const tabs = document.querySelectorAll('.tabheader__item');
const tabsContent = document.querySelectorAll('.tabcontent');
const tabsParent = document.querySelector('.tabheader__items');


function hideTabContent() {
  tabsContent.forEach(item => {                 //перебор всех '.tabcontent' и добавление и
    item.classList.add('hide');                 // удаление классов
    item.classList.remove('show', 'fade');
  });

  tabs.forEach(item => {
  item.classList.remove('tabheader__item_active');
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('tabheader__item_active');
}

function showHome() {
  tabcontentHome.classList.remove('hide');
  tabcontentHome.classList.add('show', 'fade');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
  const target = event.target;

  if (target && target.classList.contains('tabheader__item')) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
}

module.exports = tabs;