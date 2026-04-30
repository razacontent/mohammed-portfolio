import LockScreen from "@/components/LockScreen";
import Hero from "@/components/Hero";
import BookRack from "@/components/BookRack";
import PublishersDesk from "@/components/PublishersDesk";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <LockScreen />
      <div className="wrap">
        <Hero />
        <Reveal as="section">
          <div className="section-head">
            <h2>Today&rsquo;s rack · selected work</h2>
            <div className="meta">
              <span>Four issues · 2018—2025</span>
            </div>
          </div>
        </Reveal>
        <BookRack />
      </div>
      <div className="wrap">
        <PublishersDesk />
        <ContactBlock />
      </div>
    </>
  );
}
