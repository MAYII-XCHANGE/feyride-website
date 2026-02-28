import Card from '../components/Card';
import headshot1 from '../assets/istockphoto-1138561236-612x612.jpg';
import headshot2 from '../assets/istockphoto-2187993440-612x612.jpg';
import headshot3 from '../assets/liam-pozz-yjmJBkKn26k-unsplash.jpg';
import headshot4 from '../assets/pexels-cottonbro-4606350.jpg';
import headshot5 from '../assets/pexels-gustavo-fring-4895405.jpg';
import headshot6 from '../assets/pexels-tim-samuel-5835591.jpg';
import leadershipBackground from '../assets/websubs-iocenters-2673327_1280.jpg';

const boardMembers = [
  {
    name: 'Princewill Adabanya',
    role: 'Founder',
    image: headshot1,
  },
  {
    name: 'Ebenezer Ojo',
    role: 'Flutter Developer',
    image: headshot2,
  },
  {
    name: 'Mayowa Oyeniran',
    role: 'Application Developer',
    image: headshot3,
  },
];

const leadershipTeam = [
  {
    name: 'Princewill Adabanya',
    role: 'Chief Executive Officer',
    image: headshot4,
  },
  {
    name: 'Ebenezer Ojo',
    role: 'Chief Operating Officer',
    image: headshot5,
  },
  {
    name: 'Mayowa Oyeniran',
    role: 'Chief Technology Officer',
    image: headshot6,
  },
  {
    name: 'Nzubechukwu Anyakwu',
    role: 'Chief Product Officer',
    image: headshot2,
  },
  {
    name: 'Chidiebere Ogbonna',
    role: 'Head of Customer Experience & Marketing Strategist',
    image: headshot5,
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
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} headshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nova-charcoal/80 via-nova-charcoal/20 to-transparent"></div>
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

      <TeamGrid
        title="Board of Directors"
        members={boardMembers}
      />

      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="heading-2 text-nova-charcoal">Leadership Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <Card key={member.name} elevated className="overflow-hidden group">
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} headshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nova-charcoal/70 via-nova-charcoal/10 to-transparent"></div>
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
