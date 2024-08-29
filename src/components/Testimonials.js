import React from 'react';
import bat from '../images/batman.jpg' ;
import '../css/Testimonials.css';

const testimonials = [
  {
    name: 'Sandra Bullock',
    role: 'Finance Advisor',
    image: {bat}, // replace with actual image URL
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    name: 'John Smith',
    role: 'Account Professional',
    image: {bat}, // replace with actual image URL
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    name: 'Maria Messy',
    role: 'Restaurant Owner',
    image: {bat}, // replace with actual image URL
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2>Our Happy Customers’ Review</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={bat} alt={testimonial.name} className="testimonial-image" />
            <p>{testimonial.text}</p>
            <h3>{testimonial.name}</h3>
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
