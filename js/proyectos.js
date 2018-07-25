/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  $(function(){
  var section = $(document).on('mouseenter mouseleave','.section:not(.open) .skew', function(){
      section.toggleClass('active');
  }).on('click', '.skew:not(.open)', function(e){
    section.removeClass('open')
      .add(this)
      .addClass('open')
      .siblings()
      .removeClass('open');
  }).on('click', '.skew.open', function(e){
      section.add(this).removeClass('open');
  })
  .find('.section');
})