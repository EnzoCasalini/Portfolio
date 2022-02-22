window.onscroll = function() {ScrollApparition()};
function ScrollApparition() {
  $Apropos = document.getElementById("A_propos");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) 
  {
    $Apropos.className = "apparition";
  } 
  else {
    $Apropos.className ="invisible";
  }
}
