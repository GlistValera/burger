$(document).ready(function () {
  $('.slick__list').bxSlider();
});


// team accordion

$(function () {
  $('.team-trigger').on('click', e => {
    e.preventDefault()

    const $this = $(e.currentTarget);
    const container = $this.closest('.team__list');
    const item = $this.closest('.team__item');
    const items = $('.team__item', container);
    const content = $('.team-trigger__content', item);
    const otherContent = $('.team-trigger__content', container);
    const textBlock = $('.team-trigger__align', item);
    const reqHeight = textBlock.outerHeight();

    if (!item.hasClass('team__item_active')) {
      items.removeClass('team__item_active')
      item.addClass('team__item_active')

      otherContent.css({
        'height': 0
      })

      content.css({
        'height': reqHeight
      })

    } else {
      item.removeClass('team__item_active');
      content.css({
        'height': 0
      })
    }
    // item.toggleClass('team__item_active');
    // content.slideToggle(500);
  })
})

// // one page scroll

const display = $('.maincontent');
const sections = $('.section');

let inScroll = false

const switchMenuActiveClass = sectionEq => {
  $('.fixed-menu__item').eq(sectionEq).addClass('fixed-menu__item_active')
    .siblings().removeClass('fixed-menu__item_active');
}

const kekw = sectionEq => {
  const position = (sectionEq * -100) + '%';

  if (inScroll == false) {
    inScroll = true
  }

  display.css({
    'transform': `translate(0, ${position})`
  })

  sections.eq(sectionEq).addClass('section_active')
    .siblings().removeClass('section_active')

  setTimeout(() => {
    inScroll = false;
    switchMenuActiveClass(sectionEq);
  }, 1200);

}

const difineSections = sections => {
  const activeSection = sections.filter('.section_active');
  return {
    activeSection: activeSection,
    nextSection: activeSection.next(),
    prevSection: activeSection.prev()
  }
}

$('.wrapper').on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;
  const section = difineSections(sections);

  if (deltaY > 0 && section.nextSection.length) {
    // console.log('down')
    kekw(section.nextSection.index());
  }

  if (deltaY < 0 && section.prevSection.length) {
    // console.log('up')
    kekw(section.prevSection.index());

  }
});

$(document).on('keydown', e => {
  const section = difineSections(sections);

  if (inScroll) return

  switch (e.keyCode) {
    case 40: //up

      if (!section.nextSection.length) return;
      kekw(section.nextSection.index());
      break;

    case 38: //down

      if (!section.prevSection.length) return;
      kekw(section.prevSection.index());
      break;
  }
})

// menu accordion

$(function () {

  //обрабатываем клик по блоку с классом trigger
  $('.trigger').on('click', function (e) {
    e.preventDefault();
    //получаем нужные нам данные
    $this = $(this),
      //получаем всё блоки menu
      container = $this.closest('.menu__bar-list'),
      //получаем li по которому кликнули
      item = $this.closest('.menu__bar-item'),
      //получаем все другие li
      items = container.find('.menu__bar-item'),
      //выбираем из li активный
      activeItem = items.filter('.menu__bar-item_active'),
      //выбираем из li по которому кликнули блок контен
      content = item.find('.trigger__content-wrap'),
      //выбираем у li с классом active блок контент
      activeContent = activeItem.find('.trigger__content-wrap');

    //если нет li с классом active по которому кликнули
    if (!item.hasClass('menu__bar-item_active')) {
      //убираем класс active
      items.removeClass('menu__bar-item_active');
      //добавляем active кликнутому
      item.addClass('menu__bar-item_active');
      //у того у кого был active задаём ширину 0
      activeContent.css({
        'width': '0px'
      });
      //кликнутому 530       
      content.css({
        'width': '100%'
      });
      //иначе
    } else {
      item.removeClass('menu__bar-item_active');
      content.css({
        'width': '0px'
      });

    }
  });

  // клик вне аккордеона
  $(document).on('click', function (e) {
    var $this = $(e.target);
    if (!$this.closest('.menu__bar-list').length) {
      $('.trigger__content-wrap').css({
        'width': '0px'
      });
      $('.menu__bar-item').removeClass('menu__bar-item_active');
    }
  });
});
