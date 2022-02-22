window.onscroll = function() {ScrollApparition()};
function ScrollApparition() {
  $left = document.getElementById("scrollElementLeft");
  $right = document.getElementById("scrollElementRight");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) 
  {
    $left.className = "left_contacts";
    $right.className = "right_contacts";
  } 
  else {
    $left.className = "invisible";
    $right.className ="invisible";
  }
}
