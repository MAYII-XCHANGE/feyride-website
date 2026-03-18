import Card from '../components/Card';
import Button from '../components/Button';

export default function Careers() {
  const careersEmail = 'careers@feyride.co';
  const roles = [
    {
      title: 'Frontend Engineer',
      location: 'Lagos, Nigeria (Hybrid)',
      type: 'Full-time',
      summary: 'Build delightful, reliable commuter experiences across web and mobile.'
    },
    {
      title: 'Backend Engineer',
      location: 'Lagos, Nigeria (Hybrid)',
      type: 'Full-time',
      summary: 'Design and maintain the APIs, matching logic, and core platform services that power trip discovery and bookings.'
    },
    {
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full-time',
      summary: 'Craft intuitive rider and driver experiences across onboarding, booking, safety, and profile flows.'
    },
    {
      title: 'Operations Associate',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      summary: 'Support daily ride operations and improve host/rider success metrics.'
    },
    {
      title: 'Community & Safety Specialist',
      location: 'Remote',
      type: 'Full-time',
      summary: 'Strengthen trust, safety workflows, and community engagement programs.'
    },
    {
      title: 'Growth Marketing Manager',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      summary: 'Lead campaigns, partnerships, and experiments that grow rider adoption and host participation.'
    },
    {
      title: 'Customer Support Specialist',
      location: 'Remote',
      type: 'Full-time',
      summary: 'Help riders and hosts resolve issues quickly while turning support insights into product improvements.'
    },
    {
      title: 'Data Analyst',
      location: 'Remote',
      type: 'Full-time',
      summary: 'Translate trip, demand, and safety data into insights that improve marketplace performance and service quality.'
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Careers at FeyRide</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            Join us to make everyday commuting safer, more affordable, and more connected.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <Card key={role.title} elevated>
                <h2 className="heading-4 text-nova-charcoal mb-3">{role.title}</h2>
                <p className="text-sm text-nova-charcoal-700 mb-1">{role.location}</p>
                <p className="text-sm text-nova-charcoal-700 mb-4">{role.type}</p>
                <p className="text-sm text-nova-charcoal-700 mb-6">{role.summary}</p>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  href={`mailto:${careersEmail}?subject=${encodeURIComponent(`Application for the Role of ${role.title}`)}`}
                >
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

