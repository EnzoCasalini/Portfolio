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
