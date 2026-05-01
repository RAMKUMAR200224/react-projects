import React from 'react';
import './Content.css';


const IMAGES = {
  hero:        'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1400&q=80',   
  pushCtrl:    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&q=80',    
  performing:  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&q=80',    
  interview:   'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',  
  teamWork:    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80',    
  officeNum:   'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',   
  waveform:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',      
  classroom:   'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&q=80',   
  openOffice:  'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=900&q=80',    
};


const PlayBtn = () => (
  <div className="play-btn">
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.55)" />
      <polygon points="26,20 50,32 26,44" fill="#fff" />
    </svg>
  </div>
);

function Content() {
  return (
    <div className="content">

      
      <section className="hero">
        <div className="hero__image-wrap">
          <img src={IMAGES.hero} alt="Ableton studio — speakers and producer" className="hero__img" />
          <div className="hero__logo-overlay">
            <span className="hero__ableton-wordmark">Ableton</span>
          </div>
        </div>
      </section>

      
      <section className="section-text">
        <div className="container">
          <p>
            We make <a href="#">Live</a>, <a href="#">Push</a> and{' '}
            <a href="#">Link</a> — unique software and hardware for music
            creation and performance. With these products, our community of
            users creates amazing things.
          </p>
          <p>
            Ableton was founded in 1999 and released the first version of Live
            in 2001. Our products are used by a community of dedicated creators,
            from amateur to professional musicians, producers, DJs, live
            performers, music educators, and beyond. Our offices are located in
            Berlin, Los Angeles and Tokyo.
          </p>
        </div>
      </section>

      
      <section className="section-grid-a">
        <div className="grid-a__left">
          <img src={IMAGES.pushCtrl} alt="Music production desk" className="grid-a__img-main" />
        </div>
        <div className="grid-a__right">
          <div className="grid-a__yellow-block" />
          <img src={IMAGES.performing} alt="DJ performing live" className="grid-a__img-small" />
        </div>
      </section>

      
      <section className="section-text">
        <div className="container">
          <h2 className="section-heading">Making music isn't easy. It takes time, effort, and learning. But when you're in the flow, it's incredibly rewarding.</h2>
          <p>
            We feel the same way about making Ableton products. The driving
            force behind everything we do is the idea that people should be able
            to make music that sounds the way they want it to sound.
          </p>
        </div>
      </section>

      
      <section className="section-video">
        <div className="video-wrap">
          <img src={IMAGES.interview} alt="Musician interview" className="video__thumb" />
          <PlayBtn />
        </div>
        <p className="video__caption">Why Ableton — Luke Slater</p>
      </section>

      
      <section className="section-text">
        <div className="container">
          <h2 className="section-heading">
            We are more than 350 people from 30 different countries divided
            between our headquarters in Berlin and our offices in Los Angeles
            and Tokyo.
          </h2>
          <p>
            Most of us make music ourselves, and many of us have found music
            and Ableton through our passion for it. We come to work every day
            because we love what we do and want to contribute to something
            bigger than ourselves. We feel privileged to be part of a company
            that is building something truly extraordinary and that connects
            people to the creative flow.
          </p>
        </div>
      </section>

      
      <section className="section-grid-b">
        <div className="grid-b__green-block" />
        <div className="grid-b__images">
          <img src={IMAGES.teamWork} alt="Team working in office" className="grid-b__img-large" />
          <img src={IMAGES.officeNum} alt="Modern Ableton office" className="grid-b__img-small" />
        </div>
      </section>

      
      <section className="section-text">
        <div className="container">
          <h2 className="section-heading">
            We believe it takes focus to create truly outstanding instruments.
            We only work on a few products and we strive to make them great.
          </h2>
          <p>
            Rather than having a large and wide product line, we focus deeply
            on the things we're most passionate about: making tools for creative
            people. This approach comes with real advantages — our teams can
            stay focused, challenge each other and build on real knowledge
            without being diluted across too many projects. Expertise comes
            from focus and iteration.
          </p>
        </div>
      </section>

      
      <section className="section-video">
        <div className="video-wrap video-wrap--dark">
          <img src={IMAGES.waveform} alt="Audio waveform in Live" className="video__thumb video__thumb--dark" />
          <PlayBtn />
        </div>
      </section>

      
      <section className="section-text">
        <div className="container">
          <h2 className="section-heading">
            We're passionate about what we do, but we're equally passionate
            about improving who we are.
          </h2>
          <p>
            Everyone at Ableton has the luxury of knowing that their work will
            be seen and used by a large group of passionate people. At the same
            time, we want to make sure that none of us loses the valuable
            perspective of being a beginner. We strongly believe in growth
            mindset and every single one of us is always learning.
          </p>
          <p>
            Through our products and the music our customers make, we see what
            talent and creativity can achieve. There's something deeply
            satisfying about enabling others to reach their potential. We want
            everyone at Ableton to feel this way about their own work.
          </p>
        </div>
      </section>

      
      <section className="section-grid-c">
        <div className="grid-c__img-wrap">
          <img src={IMAGES.classroom} alt="Ableton classroom learning" className="grid-c__img" />
        </div>
        <div className="grid-c__purple-block" />
      </section>

      
      <section className="section-text">
        <div className="container">
          <h2 className="section-heading">
            We want our employees to love it here. Since we're looking for
            exceptional talent from around the world, we'll do everything we
            can to make your transition as easy as possible.
          </h2>
          <p>
            If you want to be a part of the Ableton team, have a look at the
            current job openings. We're always looking for talented people who
            want to shape the future of music technology.
          </p>
          <p>
            If you're moving to Berlin and need assistance in getting settled,
            we can help with accommodation and other practical matters. Let's
            meet — come and visit our office at one of our annual open house
            events.
          </p>
        </div>
      </section>

      
      <section className="section-grid-d">
        <div className="grid-d__img-wrap">
          <img src={IMAGES.openOffice} alt="Ableton Berlin open office" className="grid-d__img" />
        </div>
        <div className="grid-d__cta">
          <p>
            We're really proud of the work we've done so far. But there's so
            much more to come. If you'd like to be a part of it, please join us.
          </p>
          <a href="#" className="cta-link">See latest jobs →</a>
        </div>
      </section>

    </div>
  );
}

export default Content;
