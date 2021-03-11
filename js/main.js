var header = document.getElementById("menu");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

 var swiper = new Swiper('.cardSlider', {
   loop:true,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });

 var swiper = new Swiper('.goalsList', {
   slidesPerView: 3,
  spaceBetween: 14.45,
  //slidesOffsetBefore: 15,
   loop: true,
  slidesOffsetAfter: 30,
   navigation: {
     nextEl: '.button-next',
   },
 });



 var modal = document.getElementById('id01');

 function newGoal() {

   var block = document.createElement("DIV");
   block.className = 'swiper-slide';
   //goal - block


   var currency = document.getElementById('currency').value;
   var date = document.getElementById('date').value;
   var goal = document.getElementById('goal').value;
   var getSelectedValue = document.querySelector('input[name="icon"]:checked');

   if (currency != null && date != null && getSelectedValue != null && goal != null) {
     block.innerHTML = '$' + currency + '<br>' + date + '<br>' + getSelectedValue.value + '<br>' + goal;

     document.body.appendChild(block);
     document.body.insertBefore('goal-block');
     
     document.getElementById("contact").reset();
   } else {
     alert("Required fields");
     modal.style.display = "block";
   }
 }
 window.onclick = function (event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

 var modal = document.getElementById('id02');

 function newTransaction() {

   document.getElementById('amount').value = "";

 }
 window.onclick = function (event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }