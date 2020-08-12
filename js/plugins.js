$(document).ready(function () {
  $('.slick__list').bxSlider();
});


// team acco

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


const display = $('.maincontent');
const sections = $('.section');

const kekw = sectionEq => {
  const position = (sectionEq * -100) + '%';

  display.css({
    'transform' : 'translate(0, ${position})',
    '-webkit-transform' : 'translate(0, ${position})'

  })
}

$('.wrapper').on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    // console.log('scroll down')
    kekw(4)

  }

  if (deltaY < 0) {
    // console.log('scroll up')
  }
});


//fancybox

$('[data-fancybox]').fancybox({
	// Options will go here
});

$(".close-modal ").addClass("blackZone")