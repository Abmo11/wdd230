/*
Uses the IntersectionObserver API to lazy load images.
Selects all <img> elements with a data-src attribute, if the browser supports the IntersectionObserver API, 
it sets up an observer to load the images when they become visible in the viewport. 
If the browser does not support the IntersectionObserver API, it simply loads all the images directly.
The loadImages function is responsible for actually loading the images and updating their attributes accordingly.
*/

let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 1,
  rootMargin: "0px"
};

const loadImages = (img) => {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = () => {
    img.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImages(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((image) => {
    observer.observe(image);
  });
} else {
  imagesToLoad.forEach((image) => {
    loadImages(image);
  });
}
