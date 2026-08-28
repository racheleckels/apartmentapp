import { useState } from 'react';
import '../styles/imagereel.css';

const reelImages = [
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