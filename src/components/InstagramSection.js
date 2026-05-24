import React, { useEffect } from 'react';
import './InstagramSection.css';

const InstagramSection = () => {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="instagram-section">
      <div className="instagram-container">
        <div className="instagram-header">
          <h2>Instants Coffee Arts Paris</h2>
          <p>
            Nos derni&egrave;res inspirations, nos moments cr&eacute;atifs et la vie du
            caf&eacute; &agrave; retrouver sur Instagram.
          </p>

          <a
            href="https://www.instagram.com/coffeearts.paris/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-profile-btn"
          >
            @coffeearts.paris
          </a>
        </div>

        <div className="instagram-widget-wrapper">
          <div
            className="elfsight-app-d96889f1-b694-40ca-8655-798444ab49ae"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
