function OpenMenu(x) 
{
    x.classList.toggle("change");
}

const navSlide = () => 
{
  const burger = document.querySelector('.container');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => 
  {
    nav.classList.toggle('nav-active');
  });

}
navSlide();


const navOut = () =>
{
  const burger = document.querySelector('.container');
  const nav = document.querySelector('.nav-links');

  nav.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('change');
  }); 
}
navOut();