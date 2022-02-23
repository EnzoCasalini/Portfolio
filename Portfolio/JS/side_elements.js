let temp = false;

window.onscroll = function() {ScrollApparition()};
function ScrollApparition() {
  $Apropos = document.getElementById("A_propos");
  $right = document.getElementById("scrollElementRight");
  $left = document.getElementById("scrollElementLeft");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) 
  {
    $Apropos.className = "apparition";
    temp = true;
    $right.className = "right_contacts";
    $left.className = "left_contacts";  
  } 
  else {
    if (temp == true)
    {
      $Apropos.className ="invisible";
    }
    else {
      $Apropos.className = "nothing";
    }
  }
}
