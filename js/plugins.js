$(document).ready(function(){
    $('.slick__list').bxSlider();
  });


  // team acco

$(function() {
  $('.team-trigger').on('click', e => {
    e.preventDefault()

    const  $this= $(e.currentTarget);
    const item = $this.closest('.team__item');
    const content = item.find('.team-trigger__content');
    
    item.toggleClass('team__item_active');
    content.slideToggle(1000);

  })
})