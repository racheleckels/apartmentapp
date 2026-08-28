import { useState } from 'react';
import '../styles/imagereel.css';
import halfbath  from '../assets/unit_images/1_2Bathroom.jpg';
import bedroom1a from '../assets/unit_images/Bedroom1a.jpg';
import bedroom1b from '../assets/unit_images/Bedroom1b.jpg';
import bedroom2b from '../assets/unit_images/Bedroom2b.jpg';
import exterior from '../assets/unit_images/Exterior.jpg';
import fullbath from '../assets/unit_images/FullBathroom.jpg';
import kitchen from '../assets/unit_images/Kitchen.jpg';
import livingroom1 from '../assets/unit_images/LivingRoom1.jpg';
import livingroom2 from '../assets/unit_images/LivingRoom2.jpg';
import livingroom3 from '../assets/unit_images/LivingRoom3.jpg';

const reelImages = [
  { id: 1, src: bedroom1a, caption: 'Bedroom 1' },
  { id: 2, src: bedroom1b, caption: 'Bedroom 1' },
  { id: 3, src: halfbath, caption: 'Half Bathroom' },
  { id: 5, src: bedroom2b, caption: 'Bedroom 2' },
  { id: 6, src: exterior, caption: 'Unit 109 exterior' },
  { id: 7, src: fullbath, caption: 'Full Bathroom' },
  { id: 8, src: kitchen, caption: 'Kitchen' },
  { id: 9, src: livingroom1, caption: 'Living Room' },
  { id: 10, src: livingroom2, caption: 'Living Room' },
  { id: 11, src: livingroom3, caption: 'Living Room' },
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
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button
                className="modal-close"
                onClick={() => setActiveImage(null)}
                aria-label="Close"
            >
               <span>&times;</span>
            </button>

            <img src={activeImage} alt="Expanded view" />

            </div>
        </div>
        )}
    </div>
  );
}