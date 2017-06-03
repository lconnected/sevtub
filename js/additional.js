/**
 * Created by lconnected on 03.06.17.
 */
jQuery(document).ready(function($){

  function renderTriangle( el ) {
    el.append(' &#9661;');
    console.log('azaza');
  }

  renderTriangle( $('.menu-item-has-children > a') );

});
