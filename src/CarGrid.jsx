import './App.css'
import { useState } from 'react'

const mockCars = [
  {
    id: 1,
    image: 'https://i.ibb.co/4ZkGB06B/Lars-Cars-3.jpg',
    make: 'Audi',
    model: 'S3',
    year: 2020,
    price: '£22,500',
    mileage: '63,150',
    fuel: 'Petrol',
    transmission: 'Auto',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/RdsPL2w/Lars-Cars-2.jpg',
    make: 'Audi',
    model: 'TT',
    year: 2021,
    price: '£24,000',
    mileage: '24,000',
    fuel: 'Petrol',
    transmission: 'Auto',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/BFfBWMn/Lars-Cars-1.jpg',
    make: 'Alfa Romeo',
    model: 'Giulia',
    year: 2022,
    price: '£29,490',
    mileage: '17,676',
    fuel: 'Petrol',
    transmission: 'Auto',
  }
];

function CarGrid() {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    <>
      <section className="car-grid">
        {mockCars.map(car => (
          <div className="car-card" key={car.id} onClick={() => openModal(car.image)}>
            <img src={car.image} alt={`${car.make} ${car.model}`} className="car-img" />
            <div className="car-info">
              <div className="car-title">{car.year} {car.make} {car.model}</div>
              <div className="car-price">{car.price}</div>
              <div className="car-details">
                <span>{car.mileage} miles</span> · <span>{car.fuel}</span> · <span>{car.transmission}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      {modalImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={modalImg} alt="Car Full" className="modal-img" />
          </div>
        </div>
      )}
    </>
  )
}

export default CarGrid 