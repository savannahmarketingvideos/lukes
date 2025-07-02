import './App.css'
import { useState } from 'react'

const carData = {
  'Audi': ['A1', 'A3', 'A4', 'A6', 'Q3', 'Q5'],
  'BMW': ['1 Series', '3 Series', '5 Series', 'X1', 'X3', 'X5'],
  'Ford': ['Fiesta', 'Focus', 'Kuga', 'Puma', 'Mondeo'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'GLA', 'GLC'],
  'Toyota': ['Aygo', 'Yaris', 'Corolla', 'RAV4', 'C-HR'],
  'Volkswagen': ['Golf', 'Polo', 'Tiguan', 'Passat', 'T-Roc'],
  'Vauxhall': ['Corsa', 'Astra', 'Mokka', 'Insignia', 'Crossland'],
  'Nissan': ['Juke', 'Qashqai', 'Leaf', 'Micra', 'X-Trail'],
  'Hyundai': ['i10', 'i20', 'i30', 'Tucson', 'Kona'],
  'Kia': ['Picanto', 'Rio', 'Ceed', 'Sportage', 'Stonic'],
  'Peugeot': ['208', '2008', '308', '3008', '5008'],
  'Renault': ['Clio', 'Captur', 'Megane', 'Kadjar', 'Zoe'],
  'Honda': ['Civic', 'Jazz', 'CR-V', 'HR-V', 'e'],
  'Skoda': ['Fabia', 'Octavia', 'Superb', 'Karoq', 'Kodiaq'],
  'Seat': ['Ibiza', 'Leon', 'Ateca', 'Arona', 'Tarraco'],
  'Mazda': ['Mazda2', 'Mazda3', 'Mazda6', 'CX-3', 'CX-5'],
  'Mini': ['Hatch', 'Clubman', 'Countryman', 'Convertible'],
  'Fiat': ['500', 'Panda', 'Tipo', '500X', '500L'],
  'Volvo': ['XC40', 'XC60', 'XC90', 'V40', 'V60'],
  'Land Rover': ['Defender', 'Discovery', 'Range Rover', 'Evoque'],
};

const priceRanges = [
  'Any',
  'Under £5,000',
  '£5,000–£10,000',
  '£10,000–£15,000',
  '£15,000–£20,000',
  '£20,000–£30,000',
  'Over £30,000',
];

function SearchBar() {
  const [postcode, setPostcode] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('Any');

  const handleMakeChange = (e) => {
    setMake(e.target.value);
    setModel('');
  };

  const handleEnquire = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Car Enquiry');
    const body = encodeURIComponent(
      `Postcode: ${postcode}\nMake: ${make}\nModel: ${model}\nPrice: ${price}`
    );
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="search-bar" onSubmit={handleEnquire}>
      <input
        type="text"
        placeholder="Postcode"
        className="search-input"
        value={postcode}
        onChange={e => setPostcode(e.target.value)}
      />
      <select
        className="search-input"
        value={make}
        onChange={handleMakeChange}
      >
        <option value="">Make (any)</option>
        {Object.keys(carData).map((make) => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>
      <select
        className="search-input"
        value={model}
        onChange={e => setModel(e.target.value)}
        disabled={!make}
      >
        <option value="">Model (any)</option>
        {make && carData[make].map((model) => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
      <select
        className="search-input"
        value={price}
        onChange={e => setPrice(e.target.value)}
      >
        {priceRanges.map((range) => (
          <option key={range} value={range}>{range}</option>
        ))}
      </select>
      <button className="search-btn" type="submit">Enquire</button>
    </form>
  );
}

export default SearchBar 