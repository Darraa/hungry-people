// ------------BURGER MENU-----------

const burger = document.querySelector(".burger");
const headerNavs = document.querySelector(".burger__nav");
const details = document.querySelector(".details");

burger.addEventListener("click", function (e) {
  if (details.contains(e.target)) {
    return;
  }

  this.classList.toggle("active");
  headerNavs.classList.toggle("open");
});



// ------------MASKED PHONE-----------

$("#phone").mask('+40 999 999 999');
$("#phone-contact").mask('+40 999 999 999');

$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};


$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(4);
});
