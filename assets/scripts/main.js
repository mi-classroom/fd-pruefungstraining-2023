/* Page Navigation
############################################################################ */
const addPageNavigation = () => {
 
  /* Page Navigation kommt hier rein */

};

/* Screwed Elements
############################################################################ */

const observeElements = () => {

  const elementsToBeObserved = document.querySelectorAll('.is-screwed');
  elementsToBeObserved.forEach((element) => element.dataset.jsObserve = '');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      if (entry.isIntersecting) {
        target.dataset.jsObserve = 'in-view';
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const observedElements = document.querySelectorAll('[data-js-observe]');
  observedElements.forEach((el) => observer.observe(el));
};

/* ########################################################################## */
/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  addPageNavigation();
});
