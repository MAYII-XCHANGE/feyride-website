import Card from '../components/Card';
import headshot4 from '../assets/istockphoto-2187993440-612x612.jpg';
import headshot1 from '../assets/priAda.jpg';
import headshot2 from '../assets/ebenOjo.jpg';
import headshot3 from '../assets/mayOye.jpg';
import leadershipBackground from '../assets/websubs-iocenters-2673327_1280.jpg';

const leadershipTeam = [
  {
    name: 'Princewill Adabanya',
    role: 'Chief Executive Officer',
    image: headshot1,
  },
  {
    name: 'Ebenezer Ojo',
    role: 'Chief Technology Officer',
    image: headshot2,
  },
  {
    name: 'Mayowa Oyeniran',
    role: 'Chief Operating Officer',
    image: headshot3,
  },
];

function TeamGrid({ title, subtitle, members }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-nova-green mb-3">{subtitle}</p>
          <h2 className="heading-2 text-nova-charcoal">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <Card key={member.name} elevated className="overflow-hidden group">
              <div className="h-72 w-full overflow-hidden bg-nova-charcoal-light">
                <img
                  src={member.image}
                  alt={`${member.name} headshot`}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-nova-charcoal mb-2">{member.name}</h3>
                <p className="text-sm text-nova-charcoal-700">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Team() {
  return (
    <div>
      <section
        className="py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 20, 28, 0.75), rgba(9, 20, 28, 0.35)), url(${leadershipBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-6">Meet the Team</h1>
          <p className="subheading text-white/90 max-w-3xl mx-auto">
            The people shaping a smarter, safer, and more connected commuting experience.
          </p>
        </div>
      </section>

      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="heading-2 text-nova-charcoal">Our Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <Card key={member.name} elevated className="overflow-hidden group">
                <div className="h-60 w-full overflow-hidden bg-nova-charcoal-light">
                  <img
                    src={member.image}
                    alt={`${member.name} headshot`}
                    className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold text-nova-charcoal mb-2">{member.name}</h3>
                  <p className="text-sm text-nova-charcoal-700">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
