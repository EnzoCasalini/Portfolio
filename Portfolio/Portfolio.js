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



const ratio = 0.1
const options = 
{
  root:null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer)
{
  entries.forEach(function (entry)
  {
    if (entry.intersectionRatio > ratio)
    {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function(r) 
{
    observer.observe(r)
})

const DOM =
{
  submitBtn: '.submit-button',
  submitPending: '.en_cours',
  submitText: '.text_submit',
  submitLoaded: '.finito'
};

const findChildren = elem => 
{
  return [
    elem.querySelector(DOM.submitPending),
    elem.querySelector(DOM.submitText),
    elem.querySelector(DOM.submitLoaded)];
};

const findParent = (elem, referenceElem) => 
{
  const className = referenceElem.slice(0, referenceElem.length);

  let temp = true;

  while (temp) 
  {
    if (elem.classList.contains(className)) 
    {
      break;
    } 
    else 
    {
      elem = elem.parentNode;
    }
  }
  return elem;
};

document.querySelectorAll(DOM.submitBtn).forEach(elem => 
{
  elem.addEventListener('click', event => 
  {
    let clickedElem = findParent(event.target, 'submit-button');

    const innerChildren = findChildren(clickedElem);

    if (!clickedElem.classList.contains('button-active')) 
    {
      clickedElem.classList.add('button-active');

      innerChildren.forEach(elem => 
      {
        elem.classList.add('button-active');
      });
    }
  });
});
