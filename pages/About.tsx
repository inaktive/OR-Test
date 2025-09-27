
import React from 'react';
import Hero from '../components/Hero';

const ValueCard: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-stone-dark p-6">
    <h3 className="font-serif text-2xl text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{children}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div>
      <Hero
        title="About Obsidian Rowe"
        subtitle="We are a council of strategists, technologists, and operators dedicated to providing clarity and influence at the highest levels of global enterprise."
      />

      <div className="py-20 bg-obsidian">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Mythos Section */}
          <section className="text-center">
            <h2 className="font-serif text-4xl text-white mb-6">Our Mythos</h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                <span className="font-semibold text-white">Obsidian:</span> The name is drawn from the volcanic glass, prized by ancient civilizations for its use in crafting tools of unparalleled sharpness and as a scrying mirror for seeing with clarity. It represents the incisive analysis and strategic foresight we bring to our clients' most complex challenges.
              </p>
              <p>
                <span className="font-semibold text-white">Rowe:</span> A "rowe" signifies a line, a council, or a deliberate arrangement. It reflects our structure as a discreet collective of senior advisors, working in concert to shape outcomes. We are not a traditional consultancy; we are a dedicated council.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mt-24">
            <h2 className="font-serif text-4xl text-white mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone">
              <ValueCard title="Discretion">
                Our work is conducted in confidence. Our influence is felt, not seen. We prioritize our clients' privacy and security above all else.
              </ValueCard>
              <ValueCard title="Rigor">
                Our analysis is unsparing and intellectually honest. We challenge assumptions, stress-test strategies, and hold ourselves to the highest standard of analytical rigor.
              </ValueCard>
              <ValueCard title="Impact">
                We are defined by the results we deliver. We engage in a limited number of mandates where we can create decisive, lasting, and meaningful impact.
              </ValueCard>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
