import React from 'react';
import '../css/ImageGallery.css';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import fiverings from '../images/fiverings.jpg';

const images = gsap.utils.toArray(".item");

const imageSize = images.length;
const total = images.length;
const degree = 360 / total;
let isDragging = false; // To track if an item was dragged or clicked

const init = () => {
  const timeline = gsap.timeline();

  images.forEach((image, index) => {
    const sign = Math.floor((index / 2) % 2) ? 1 : -1;
    const value = Math.floor((index + 4) / 4) * 4;
    const rotation = index > imageSize - 3 ? 0 : sign * value;
    console.log(rotation);

    gsap.set(image, {
      rotation: rotation,
      scale: 0.5,
    });

    timeline.from(
      image,
      {
        x: () =>
          index % 2
            ? window.innerWidth + image.clientWidth * 4
            : -window.innerWidth - image.clientWidth * 4,
        y: () => window.innerHeight - image.clientHeight,
        rotation: index % 2 ? 200 : -200,
        scale: 4,
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        delay: 0.15 * Math.floor(index / 2),
      },
      0
    );

    let rotationAngle = index * degree;
    timeline.to(
      image,
      {
        scale: 1,
        duration: 0,
      },
      0.15 * (imageSize / 2 - 1) + 1
    );

    timeline.to(
      image,
      {
        transformOrigin: "center 200vh",
        rotation:
          index > imageSize / 2 ? -degree * (imageSize - index) : rotationAngle,
        duration: 1,
        ease: "power1.out",
      },
      0.15 * (imageSize / 2 - 1) + 1
    );
  });
};

const draggable = () => {
  let start = 0;
  Draggable.create(".items", {
    type: "rotation",

    onDragStart: function () {
      start = this.rotation;
      isDragging = false; // Reset dragging flag at start
    },
    onDrag: function () {
      isDragging = true; // Mark dragging as true if drag occurs
    },
    onDragEnd: function () {
      const rotation = this.rotation;
      const offset = Math.abs(rotation - start);
      if (rotation > start) {
        if (rotation - start < degree / 2) {
          gsap.to(".items", {
            rotation: `-=${offset}`,
          });
        } else {
          gsap.to(".items", {
            rotation: `+=${2 * degree - offset}`,
          });
        }
      } else {
        if (Math.abs(rotation - start) < degree / 2) {
          gsap.to(".items", {
            rotation: `+=${offset}`,
          });
        } else {
          gsap.to(".items", {
            rotation: `-=${2 * degree - offset}`,
          });
        }
      }
    },
  });
};

// Add click event listeners to the images
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    if (!isDragging) {
      const link = image.querySelector("a");
      if (link) {
        window.location.href = link.href; // Navigate to the link
      }
    }
  });
});

init();
draggable();

function ImageGallery() {
  return (
    <main className="image-gallery">
      <div className="container">
        <div className="center">
          <div className="items">
            <div className="item">
              <div className="card">
                <a href="Untitled-1.html">
                  <img className="image" src={fiverings} alt="The Book of Five Rings" />
                </a>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Placeholder" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 1" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 2" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 3" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 4" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 5" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 6" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 7" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 8" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 9" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 10" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 11" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 12" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 13" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 14" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 15" />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img className="image" src={fiverings} alt="Movie Poster 16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ImageGallery;
