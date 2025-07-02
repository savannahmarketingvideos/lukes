import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import SearchBar from './SearchBar'
import CarGrid from './CarGrid'
import './App.css'
import { useEffect, useState } from 'react'
import logoImg from './assets/lars-cars-logo.png'

function CustomerReviews() {
  const reviewSets = [
    [
      { text: '"Absolutely fantastic service! Found my dream car in minutes. Highly recommend Lars Cars!"', author: '- Sarah J.' },
      { text: '"Great selection and super easy to use. The buying process was smooth and stress-free."', author: '- Mike D.' },
      { text: '"Customer support was top-notch. I felt confident every step of the way. Will use again!"', author: '- Priya S.' },
    ],
    [
      { text: '"The best car buying experience I have ever had. 10/10!"', author: '- Alex W.' },
      { text: '"Quick, easy, and transparent. I love my new car!"', author: '- Jamie L.' },
      { text: '"I was able to compare so many options. Will recommend to friends."', author: '- Chris P.' },
    ]
  ];
  const [setIndex, setSetIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setSetIndex((prev) => (prev + 1) % reviewSets.length);
        setFade(false);
      }, 500); // match fade duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What Our Customers Say</h2>
      <div className="reviews-box">
        {reviewSets[setIndex].map((review, i) => (
          <div className={`review-card fade-anim${fade ? ' fade-out' : ' fade-in'}`} key={i}>
            <p className="review-text">{review.text}</p>
            <div className="review-author">{review.author}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero-gradient">
        <div className="hero-overlay">
          <img src={logoImg} alt="Lars Cars Logo" className="company-logo" />
          <h1 className="hero-title">FIND YOUR CAR</h1>
          <p className="hero-subtitle">Browse our large selection of used cars.</p>
        </div>
      </div>
      <div className="home-search-card">
        <SearchBar />
      </div>
      <h2 className="stock-title">Our Stock</h2>
      <CarGrid />
      <CustomerReviews />
    </div>
  )
}

function CarListings() {
  return (
    <main>
      <CarGrid />
    </main>
  )
}

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;
    const subject = encodeURIComponent('Contact Us Message');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:info@lukessite.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-main">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-info">
          <div><strong>Email:</strong> <a href="mailto:larscarprocurement@gmail.com">larscarprocurement@gmail.com</a></div>
          <div><strong>Phone:</strong> <a href="tel:‪+447754109268‬">‪+447754109268‬</a></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input className="contact-input" type="text" name="name" placeholder="Your Name" required />
          <input className="contact-input" type="email" name="email" placeholder="Your Email" required />
          <textarea className="contact-input" name="message" placeholder="Your Message" rows={5} required />
          <button className="contact-btn" type="submit">Send Message</button>
        </form>
      </div>
    </main>
  )
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarListings />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
