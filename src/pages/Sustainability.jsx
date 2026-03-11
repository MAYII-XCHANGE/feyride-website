import { Leaf, Car, Users, Route, Trees, BatteryCharging } from 'lucide-react';
import Card from '../components/Card';

export default function Sustainability() {
  const pillars = [
    {
      title: 'Fewer Cars, Smarter Commutes',
      description: 'We help riders share available seats so fewer cars travel with empty space.',
      icon: Car,
    },
    {
      title: 'Cleaner City Movement',
      description: 'Route matching reduces repeated trips and helps cut avoidable fuel use.',
      icon: Route,
    },
    {
      title: 'Community-First Impact',
      description: 'Every shared trip supports affordable mobility and stronger local communities.',
      icon: Users,
    },
  ];

  const commitments = [
    {
      title: 'Ride-Sharing by Default',
      detail: 'Prioritize matching passengers to existing rider routes before creating new trips.',
      icon: Leaf,
    },
    {
      title: 'Data-Driven Efficiency',
      detail: 'Use route data to reduce idle time, detours, and repeat journeys.',
      icon: BatteryCharging,
    },
    {
      title: 'Greener Growth',
      detail: 'Support sustainability initiatives and practical climate actions in our operating cities.',
      icon: Trees,
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Sustainability at FeyRide</h1>
          <p className="subheading text-nova-charcoal-700 max-w-3xl mx-auto">
            We are building a cleaner transport future by making ride-sharing simple, trusted, and part of daily life.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.title} elevated>
                  <Icon size={30} className="text-nova-green mb-4" />
                  <h2 className="heading-4 text-nova-charcoal mb-3">{pillar.title}</h2>
                  <p className="text-nova-charcoal-700 text-sm">{pillar.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-nova-charcoal mb-4">Our Commitments</h2>
            <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
              We focus on practical steps that reduce environmental impact while improving daily mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <Icon size={26} className="text-nova-green mb-3" />
                  <h3 className="font-bold text-nova-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-nova-charcoal-700">{item.detail}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

