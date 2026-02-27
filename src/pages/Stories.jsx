import Card from '../components/Card';
import { DollarSign, Leaf, Users, Star } from 'lucide-react';
import testimonialData from '../data/testimonials.json';
import Button from '../components/Button';
import AppStoreBadge from '../components/AppStoreBadge';
import GooglePlayBadge from '../components/GooglePlayBadge';

export default function Stories() {
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
              <p className="text-4xl font-bold text-nova-green">50K+</p>
              <p className="text-gray-700 font-semibold">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-nova-green">₦2B+</p>
              <p className="text-gray-700 font-semibold">Saved by Community</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-nova-green">500K+</p>
              <p className="text-gray-700 font-semibold">Completed Trips</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-nova-green">4.8★</p>
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
                  <span className="text-5xl flex-shrink-0">{testimonial.avatar}</span>
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
                      ? `Saved ₦${testimonial.savedAmount.toLocaleString()} on ${testimonial.trips} trips`
                      : `Earned ₦${testimonial.earnedAmount.toLocaleString()} on ${testimonial.trips} trips`
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
                  Before FeyRide, I was spending over ₦3,000 daily on Uber commutes. As someone passionate about sustainability, the high cost was frustrating. But FeyRide isn't just about savings—it's about community.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I've made genuine friendships on my commute, we carpool together several times a week, and I'm now saving ₦1,500 daily. Plus, knowing we're reducing traffic and emissions together feels amazing!
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you're on the fence: try it. The verification process made me feel safe immediately, and the app is incredibly intuitive.
                </p>
                <p className="font-semibold text-nova-charcoal">— Chioma Okafor, Tech Hub Nigeria</p>
              </div>

              <div className="bg-gradient-to-br from-nova-green/10 to-nova-green/5 rounded-xl p-8 flex flex-col justify-center">
                <div className="space-y-6 text-center">
                  <div>
                    <p className="text-4xl font-bold text-nova-green">₦1,500</p>
                    <p className="text-gray-700">Daily Savings</p>
                  </div>
                  <div className="h-1 bg-nova-green/20"></div>
                  <div>
                    <p className="text-4xl font-bold text-nova-green">45</p>
                    <p className="text-gray-700">Trips Completed</p>
                  </div>
                  <div className="h-1 bg-nova-green/20"></div>
                  <div>
                    <p className="text-4xl font-bold text-nova-green">₦67.5K</p>
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

      {/* Why Join */}
      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-nova-charcoal mb-16">Join Our Growing Community</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '💰', Icon: DollarSign, title: 'Save Money', desc: 'Cut commute costs in half with smart shared rides' },
              { emoji: '🌍', Icon: Leaf, title: 'Help The Planet', desc: 'Reduce traffic and carbon emissions' },
              { emoji: '👥', Icon: Users, title: 'Build Community', desc: 'Meet people on your route and make friends' },
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


