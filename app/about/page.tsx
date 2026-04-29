/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "About · Mohammed Raza · razacontent",
};

export default function AboutPage() {
  return (
    <>
      <header className="about-hero">
        <div className="wrap">
          <div className="about-eyebrow">About me</div>
          <h1 className="about-headline">
            The <span className="accent">person</span> behind the words.
          </h1>
          <p className="about-intro">
            An anthropologist at heart, I found my love for content design when
            I realized the power language has to help people gain agency over
            their lives, feel respected, and find inspiration.
          </p>
        </div>
      </header>

      <section className="about-section">
        <div className="wrap-narrow">
          <div className="section-eyebrow">Origins</div>
          <h2 className="section-title">
            Born in <span className="accent">Karachi</span>, raised in Abu
            Dhabi.
          </h2>
          <div className="body-prose">
            <p>
              I spent most of my youth growing up between Pakistan, where I
              was born, and the United Arab Emirates. Eating shawarmas and
              fruit cocktails in Abu Dhabi, and playing cricket in the middle
              of the street in my childhood gully in Karachi.
            </p>
          </div>
          <figure className="story-photo" data-shadow="canary">
            <img
              src="/images/about-karachi.jpg"
              alt="Sadequain's Earth and Heavens at Frere Hall, Karachi"
            />
          </figure>
          <p className="story-caption">
            One of my favorite works of art. Sadequain&rsquo;s &ldquo;Earth and
            Heavens&rdquo; was left unfinished due to his passing. Frere Hall,
            Karachi, Pakistan.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap-narrow">
          <div className="section-eyebrow">Language &amp; anthropology</div>
          <h2 className="section-title">
            How <span className="accent">language</span> becomes agency.
          </h2>
          <div className="body-prose">
            <p>
              After moving to the United States and developing a love for
              anthropology during my school years, I decided to study
              Portuguese, Education, and Anthropology of Globalization. I
              wanted to understand how people use language to gain agency over
              their lives, feel respected, and find inspiration through
              storytelling.
            </p>
          </div>
          <figure className="story-photo" data-shadow="coral">
            <img
              src="/images/about-lisbon.jpeg"
              alt="Carmo Archaeological Museum, Lisbon"
            />
          </figure>
          <p className="story-caption">
            The Carmo Archaeological Museum. Lisbon is a standing memory of
            the infamous 1755 Lisbon Earthquake.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap-narrow">
          <div className="section-eyebrow">Travel</div>
          <h2 className="section-title">
            Peru, Cuba, and a <span className="accent">Zaha Hadid</span>{" "}
            building in Seoul.
          </h2>
          <div className="body-prose">
            <p>
              When I&rsquo;m not nerding out on design and language, I love to
              travel. Some favorite spots have been Peru for its incredible
              cuisine and natural beauty, Cuba for Cold War history, cigars,
              and perseverance, and South Korea for its beautiful
              architecture, like Zaha Hadid&rsquo;s Dongdaemun Design Plaza.
            </p>
          </div>

          <div className="story-photo-grid">
            <div>
              <figure className="story-photo" data-shadow="matcha">
                <img src="/images/about-cuba.jpeg" alt="Street art in Havana, Cuba" />
              </figure>
              <p className="story-caption">Havana, Cuba</p>
            </div>
            <div>
              <figure className="story-photo" data-shadow="blue">
                <img src="/images/about-peru.jpeg" alt="Machu Picchu, Peru" />
              </figure>
              <p className="story-caption">Machu Picchu, Peru</p>
            </div>
          </div>

          <figure className="story-photo" data-shadow="ink">
            <img
              src="/images/about-korea.jpeg"
              alt="Dongdaemun Design Plaza, Seoul"
            />
          </figure>
          <p className="story-caption">
            Dongdaemun Design Plaza by Zaha Hadid. Seoul, South Korea.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap-narrow">
          <div className="section-eyebrow">Family</div>
          <h2 className="section-title">
            My <span className="accent">boss-wife</span>. Her apprentice.
          </h2>
          <figure className="story-photo" data-shadow="canary">
            <img
              src="/images/about-seattle.jpeg"
              alt="Lissy and Fizza by the water in West Seattle"
            />
          </figure>
          <p className="story-caption">
            West Seattle, by the water near our home.
          </p>
          <div className="body-prose" style={{ marginTop: 24 }}>
            <p>
              That&rsquo;s my boss-wife Lissy and her apprentice, I mean our
              daughter, Fizza. We love taking strolls by the water close to
              our home in West Seattle.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap-narrow">
          <div className="section-eyebrow">Beyond work</div>
          <h2 className="section-title">
            Coffee, cinema, and political{" "}
            <span className="accent">philosophy</span>.
          </h2>
          <div className="beyond-work-grid">
            <div>
              <p>
                Besides travel, I&rsquo;m a huge fan of coffee and cafe
                culture, a huge cinephile (I imagine being an actor turned
                director in another life), and political science and
                philosophy.
              </p>
              <p>
                Feel free to reach out to chat about anything above at{" "}
                <a href="mailto:mohammed@razacontent.com">
                  mohammed@razacontent.com
                </a>
                .
              </p>
            </div>
            <figure className="story-photo" data-shadow="coral">
              <img
                src="/images/about-home.jpeg"
                alt="Mohammed and daughter napping"
              />
            </figure>
          </div>
        </div>
      </section>

      <div className="wrap-narrow">
        <div className="about-fin">
          <div className="fin-mark">Fin!</div>
          <div className="fin-meta">
            Mohammed Raza · Senior Content Designer · razacontent.com
          </div>
        </div>
      </div>
    </>
  );
}
