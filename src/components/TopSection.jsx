import { useState, useEffect } from 'react';

export default function TopSection({ submitted }) {
  const [classCondition, setClassCondition] = useState(false);

  useEffect(() => {
    
    const inputExists = document.getElementsByClassName('name-input').length > 0;
    setClassCondition(inputExists);
  }, [submitted]);

  return (
    <div className='top-section'>
      <h1 className={submitted && !classCondition ? 'second-fade-in' : null}>
        {!submitted || classCondition
          ? 'Efsane'
          : 'Bir kahraman doğdu. Kahramanın adı: '}
      </h1>
      <div className='image-container'>
        <img
          className={!submitted || classCondition ? null : 'fade-out-and-in'}
          src={
            !submitted || classCondition
              ? './images/character1.png'
              : './images/character2.png'
          }
          alt="Karakter Resmi"
        />
      </div>
    </div>
  );
}
