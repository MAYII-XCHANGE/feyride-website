import Card from '../components/Card';
import { DollarSign, Leaf, Users, Star } from 'lucide-react';
import testimonialData from '../data/testimonials.json';
import Button from '../components/Button';
import AppStoreBadge from '../components/AppStoreBadge';
import GooglePlayBadge from '../components/GooglePlayBadge';
import headshot1 from '../assets/istockphoto-1138561236-612x612.jpg';
import headshot2 from '../assets/istockphoto-2187993440-612x612.jpg';
import headshot3 from '../assets/liam-pozz-yjmJBkKn26k-unsplash.jpg';
import headshot4 from '../assets/pexels-cottonbro-4606350.jpg';

export default function Stories() {
  const testimonialAvatars = {
    'headshot-1': headshot1,
    'headshot-2': headshot2,
    'headshot-3': headshot3,
    'headshot-4': headshot4,
  };

  const featuredStories = [
    {
      title: 'A Better Start Before 8AM',
      person: 'Mariam Afolabi',
      role: 'Operations Lead',
      summary:
        'Mariam swapped unpredictable bus changes for a repeat commute match on FeyRide and now gets to work earlier with less stress.',
      highlight: 'Saves about NGN 1,200 each workday',
    },
    {
      title: 'Turning Daily Traffic Into Extra Earnings',
      person: 'David Eze',
      role: 'Product Designer and Rider',
      summary:
        'David already drove from Lekki to Yaba every weekday. Listing his spare seats on FeyRide helped him offset fuel and toll costs.',
      highlight: 'Earns on recurring routes twice a week',
    },
    {
      title: 'Safer Late Classes for Students',
      person: 'Amaka Nwosu',
      role: 'Final-Year Student',
      summary:
        'After evening labs, Amaka uses verified ride matches to get home without the usual rush-hour uncertainty or inflated fares.',
      highlight: 'Cuts late-night commute pressure and cost',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Community Stories</h1>
          <p className="subheading text-gray-700 max-w-2xl mx-auto">
            Real people sharing their FeyRide journeys
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <p className="text-4xl font-bold text-nova-green">1K+</p>
              <p className="text-gray-700 font-semibold">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-nova-green">NGN 3M</p>
              <p className="text-gray-700 font-semibold">Saved by Community</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-nova-green">500+</p>
              <p className="text-gray-700 font-semibold">Completed Trips</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-nova-green inline-flex items-center gap-2">
                4.8
                <Star size={22} className="text-nova-green fill-nova-green" />
              </p>
              <p className="text-gray-700 font-semibold">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <h2 className="heading-2 text-nova-charcoal text-center mb-16">What Our Community Says</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} elevated>
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonialAvatars[testimonial.avatar]}
                    alt={`${testimonial.name} headshot`}
                    className="w-14 h-14 rounded-full object-cover border border-nova-charcoal-lighter flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-nova-charcoal">{testimonial.name}</h3>
                    <p className="text-sm text-gray-700 mb-2">{testimonial.company}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-lg italic text-gray-700 mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-nova-charcoal-lighter">
                  <p className="text-sm font-semibold text-nova-green">
                    {testimonial.savedAmount 
                      ? `Saved NGN ${testimonial.savedAmount.toLocaleString()} on ${testimonial.trips} trips`
                      : `Earned NGN ${testimonial.earnedAmount.toLocaleString()} on ${testimonial.trips} trips`
                    }
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-nova-charcoal text-center mb-16">Featured Community Insight</h2>

          <Card elevated className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="heading-3 text-nova-charcoal">
                  "FeyRide Changed My Daily Commute"
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Before FeyRide, I was spending over NGN 3,000 daily on Uber commutes. As someone passionate about sustainability, the high cost was frustrating. But FeyRide isn't just about savings - it's about community.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I've made genuine friendships on my commute, we carpool together several times a week, and I'm now saving NGN 1,500 daily. Plus, knowing we're reducing traffic and emissions together feels amazing!
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you're on the fence: try it. The verification process made me feel safe immediately, and the app is incredibly intuitive.
                </p>
                <p className="font-semibold text-nova-charcoal"> -  Chioma Okafor, Tech Hub Nigeria</p>
              </div>

              <div className="bg-gradient-to-br from-nova-green/10 to-nova-green/5 rounded-xl p-8 flex flex-col justify-center">
                <div className="space-y-6 text-center">
                  <div>
                    <p className="text-4xl font-bold text-nova-green">NGN 1,500</p>
                    <p className="text-gray-700">Daily Savings</p>
                  </div>
                  <div className="h-1 bg-nova-green/20"></div>
                  <div>
                    <p className="text-4xl font-bold text-nova-green">45</p>
                    <p className="text-gray-700">Trips Completed</p>
                  </div>
                  <div className="h-1 bg-nova-green/20"></div>
                  <div>
                    <p className="text-4xl font-bold text-nova-green">NGN 67.5K</p>
                    <p className="text-gray-700">Total Saved</p>
                  </div>
                  <div className="h-1 bg-nova-green/20"></div>
                  <div className="flex gap-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl"><Star size={20} className="text-yellow-400 fill-yellow-400" /></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nova-green mb-3">
              Catching Stories
            </p>
            <h2 className="heading-2 text-nova-charcoal mb-5">More stories worth reading</h2>
            <p className="text-gray-700 leading-relaxed">
              Beyond quick testimonials, these snapshots show how different people are using
              FeyRide to save money, reduce stress, and make daily travel feel more reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <Card key={story.title} elevated className="h-full">
                <p className="text-xs uppercase tracking-[0.18em] text-nova-green font-semibold mb-3">
                  {story.role}
                </p>
                <h3 className="heading-4 text-nova-charcoal mb-4">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{story.summary}</p>
                <div className="pt-4 border-t border-nova-charcoal-lighter">
                  <p className="font-semibold text-nova-charcoal">{story.person}</p>
                  <p className="text-sm text-nova-green mt-1">{story.highlight}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-nova-charcoal mb-16">Join Our Growing Community</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: 'Money', Icon: DollarSign, title: 'Save Money', desc: 'Cut commute costs in half with smart shared rides' },
              { emoji: 'Planet', Icon: Leaf, title: 'Help The Planet', desc: 'Reduce traffic and carbon emissions' },
              { emoji: 'Community', Icon: Users, title: 'Build Community', desc: 'Meet people on your route and make friends' },
            ].map((item, idx) => (
              <Card key={idx}>
                <div className="text-5xl mb-4"><item.Icon size={48} className="text-nova-green" /></div>
                <h3 className="heading-4 text-nova-charcoal mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-nova-green-dark to-nova-green-darker text-white text-center">
        <div className="container-custom">
          <h2 className="heading-2 text-white mb-6">Be Part of the FeyRide Story</h2>
          <p className="subheading text-white/90 mb-8">Your journey to smarter commuting starts today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <a 
              href="https://apps.apple.com/ng/app/FeyRide-rides/id1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity w-full sm:w-auto"
            >
              <AppStoreBadge className="h-14 w-full" />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.FeyRiderider.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity w-full sm:w-auto"
            >
              <GooglePlayBadge className="h-14 w-full" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}



