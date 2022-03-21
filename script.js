//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var myModal = document.getElementById('referencesModal')
var myInput = document.getElementById('openModal')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

var popover = new bootstrap.Popover(document.querySelector('.act-popover'), {
  container: 'body'
})

function changeMore(bt, text) {
  var btn = $('#'+bt);
  btn.html(text);
}

$('#LearnMoreHispanic').on('show.bs.collapse', function () {
  changeMore('moreHispanic', 'Less');
})

$('#LearnMoreHispanic').on('hidden.bs.collapse', function () {
  changeMore('moreHispanic', 'More');
})

$('#LearnMoreLatino').on('show.bs.collapse', function () {
  changeMore('moreLatino', 'Less');
})

$('#LearnMoreLatino').on('hidden.bs.collapse', function () {
  changeMore('moreLatino', 'More');
})

$('#LearnMoreLatinx').on('show.bs.collapse', function () {
  changeMore('moreLatinx', 'Less');
})

$('#LearnMoreLatinx').on('hidden.bs.collapse', function () {
  changeMore('moreLatinx', 'More');
})