// components/HeartButton.js
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const HeartButton = () => {
  const [isFilled, setFilled] = useState(false);

  const toggleHeart = () => {
    setFilled(!isFilled);
  };

  return (
    <div
      className={`text-red-500 cursor-pointer transition ${
        isFilled ? 'fill-heart' : 'outline-heart'
      }`}
      onClick={toggleHeart}
    >
      <FontAwesomeIcon icon={faHeart} size="xl" />
    </div>
  );
};

export default HeartButton;
