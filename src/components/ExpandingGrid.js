// ExpandingGrid.js

import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import '../css/ExpandingGrid.css';
import img2 from "../images/placeholder.jpeg"
import { useTranslation } from 'react-i18next';

import mea from "../images/mea/mea.jpg"
import rlc from "../images/rlc/rlc.png"
import mms from "../images/mms/mms.JPG"
import pi from "../images/pi/pi.JPG"
import ssw from "../images/ssw/ssw.JPG"
import eg from "../images/eg/eg.JPG"
import ms from "../images/ms/ms.JPG"
import ism from "../images/ism/ism.JPG"

const ExpandingGrid = () => {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  const items = [
    { id: 1,
      name: t('eg'),
      imageUrl: eg,
      description:  t('egd'),
      thumbnail: img2,
    },
    { id: 2,
      name: t('mea'),
      imageUrl: mea,
      description: t('mead'),
      thumbnail: mea,
    },
    { id: 3,
      name: t('rlc'),
      imageUrl: rlc,
      description: t('rlcd'),
      thumbnail: img2,
    },
    { id:   4,
      name: t('mms'),
      imageUrl: mms,
      description: t('mmsd'),
      thumbnail: img2,
    },
    { id:   5,
      name: t('pi'),
      imageUrl: pi,
      description: t('pid'),
      thumbnail: img2,
    },
    { id:   6,
      name: t('ssw'),
      imageUrl: ssw,
      description: t('sswd'),
      thumbnail: img2,
    },
    { id:   7,
      name: t('ms'),
      imageUrl: ms,
      description: t('msd'),
      thumbnail: img2,
    },
    { id:   8,
      name: t('ism'),
      imageUrl: ism,
      description: t('ismd'),
      thumbnail: img2,
    },
    // ... add more items if needed ...
  ];

  const handleClick = (id) => {
    setSelected(selected === id ? null : id);
    if (selected === id) {
      document.body.classList.remove('no-scroll');
    } else {
      document.body.classList.add('no-scroll');
    }
  };

  function renderDetailsForItem(item) {
    switch (item.id) {
      case 1:
        return (
          <>
            <h2> {t('eg')} </h2>
            <ul>
              <li>{t('egde1')} <br/> </li>
              <li>{t('egde2')} <br/> </li>
              <li> {t('egde3')} <br/> </li>
              <li>{t('egde4')} <br/> </li>     
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <h2> {t('mea')} </h2>
            <ul>
              <li>{t('mea1')} <br/> </li>
              <li>{t('mea2')} <br/> </li>
              <li> {t('mea3')} <br/> </li>
              <li>{t('mea4')} <br/> </li>     
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <h2> {t('rlc')} </h2>
            <ul>
              <li>{t('rlc1')} <br/> </li>
              <li>{t('rlc2')} <br/> </li>
              <li> {t('rlc3')} <br/> </li>
              <li>{t('rlc4')} <br/> </li>     
            </ul>
          </>
        );
      case 4:
        return (
          <>
            <h2> {t('mms')} </h2>
            <ul>
              <li>{t('mms1')} <br/> </li>
              <li>{t('mms2')} <br/> </li>
              <li> {t('mms3')} <br/> </li>
              <li>{t('mms4')} <br/> </li>  
              <li>{t('mms5')} <br/> </li>   
            </ul>
          </>
        );
      case 5:
        return (
          <>
            <h2> {t('pi')} </h2>
            <ul>
              <li>{t('pi1')} <br/> </li>
              <li>{t('pi2')} <br/> </li>
              <li> {t('pi3')} <br/> </li>
              <li>{t('pi4')} <br/> </li>  
              <li>{t('pi5')} <br/> </li>   
            </ul>
          </>
        );
      case 6:
        return (
          <>
            <h2> {t('ssw')} </h2>
            <ul>
              <li>{t('ssw1')} <br/> </li>
              <li>{t('ssw2')} <br/> </li>
              <li> {t('ssw3')} <br/> </li>
              <li>{t('ssw4')} <br/> </li>     
            </ul>
          </>
        );
      case 7:
        return (
          <>
            <h2> {t('ms')} </h2>
            <ul>
              <li>{t('ms1')} <br/> </li>
              <li>{t('ms2')} <br/> </li>
              <li> {t('ms3')} <br/> </li>
              <li>{t('ms4')} <br/> </li>   
            </ul>
          </>
        );
      case 8:
        return (
          <>
            <h2> {t('ism')} </h2>
            <ul>
              <li>{t('ism1')} <br/> </li>
              <li>{t('ism2')} <br/> </li>
            </ul>
          </>
        );

      // ... add more cases for other items as needed ...
      default:
        return null;
    }
  }
  


  return (
    <Flipper  className='mainflip' flipKey={selected}>
    <div className='titleservices'> <h1> {t('servicesprovided')} </h1> </div>
      <div id="services" className="grid">
      {items.map(item => (
  <div key={item.id} className="grid-item-wrapper">
    <Flipped flipId={`item-${item.id}-background`} translate opacity>
      <div
  className={`grid-item ${selected === item.id ? 'expanded' : ''}`}
  onClick={() => handleClick(item.id)}
  style={{ 
    backgroundImage: `url(${item.imageUrl})`,
    backgroundSize: selected === item.id ? '80%' : 'cover',
    backgroundRepeat: selected === item.id ? 'no-repeat' : 'repeat',
    backgroundPosition: selected === item.id ? 'top center' : 'center',
    backgroundColor: selected === item.id ? 'white' : '',
    backgroundPositionY: selected === item.id ? '25%' : '',
  }}
>
        {/* Always render the Portal, but conditionally display its content */}

          {selected === item.id && (
            <div className="expanded-content">
              {renderDetailsForItem(item)}
            </div>
          )}

      </div>
    </Flipped>
    <div className="item-info">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  </div>
))}
      </div>
    </Flipper>
  );
};

export default ExpandingGrid;
