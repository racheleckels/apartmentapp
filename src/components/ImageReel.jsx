import { useState } from 'react';
import '../styles/imagereel.css';

const reelImages = [
  { id: 1, src: 'https://picsum.photos', caption: 'Mountain View' },
  { id: 2, src: 'https://picsum.photos', caption: 'Dry Riverbed' },
  { id: 3, src: 'https://picsum.photos', caption: 'Forest Path' },
];

export default function ImageReel() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="reel-wrapper">
      <div className="reel-container">
        {reelImages.map((item) => (
          <div 
            className="reel-card" 
            key={item.id} 
            onClick={() => setActiveImage(item.src)}
          >
            <img src={item.src} alt={item.caption} />
          </div>
        ))}
      </div>

      {activeImage && (
        <div className="modal-overlay" onClick={() => setActiveImage(null)}>
          <div className="modal-content">
            <img src={activeImage} alt="Expanded view" />
          </div>
        </div>
      )}
    </div>
  );
}