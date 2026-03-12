import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Card from '../components/Card';
import blogHeroBg from '../assets/pexels-yelenaodintsova-10556711.jpg';

export default function Blog() {
  const [activePost, setActivePost] = useState(null);

  const posts = [
    {
      title: 'How to Save 40% on Your Commute',
      date: 'Feb 5, 2026',
      category: 'Rider Tips',
      excerpt:
        'Simple route planning habits, ride timing tricks, and shared-ride decisions that can cut weekly transport costs fast.',
      story: [
        'Commuters who save the most on FeyRide usually do three things well: they book consistent routes, travel at predictable times, and compare shared options before defaulting to solo trips.',
        'The first win comes from planning your ride around your actual weekly routine. If your pickup point stays consistent, it becomes easier to match with riders already heading your way, which reduces both delays and pricing pressure.',
        'The second win is timing. Booking earlier in the morning or before the evening rush gives you better match quality. You are not only improving your chances of finding a ride, you are also reducing the need for expensive last-minute alternatives.',
      ],
    },
    {
      title: 'Top 5 Routes With the Most Riders',
      date: 'Jan 28, 2026',
      category: 'Community',
      excerpt:
        'A quick look at the busiest corridors on FeyRide and why these routes keep attracting reliable daily commuters.',
      story: [
        'The busiest FeyRide routes usually connect residential hubs with office clusters, campuses, and commercial districts. These areas create a strong flow of people moving at similar times every day.',
        'Popular routes tend to perform well because both riders and passengers know they can count on more repeat matches. That repeat activity helps the platform feel dependable instead of random.',
        'For new users, high-traffic routes are often the easiest place to start. They offer more chances to find a suitable trip, understand the experience, and build trust through ratings and regular use.',
      ],
    },
    {
      title: 'Rider Safety Checklist for 2026',
      date: 'Jan 18, 2026',
      category: 'Safety',
      excerpt:
        'Before you accept a trip, use this practical checklist to confirm pickup details, identity, timing, and in-app safety basics.',
      story: [
        'Safety starts before the car moves. Confirm the ride details in the app, verify the rider or passenger profile, and make sure the pickup point is clear enough to avoid confusion in public areas.',
        'During the trip, keep communication inside the platform whenever possible and avoid last-minute route changes that have not been agreed clearly. Predictability lowers stress for everyone involved.',
        'The strongest safety habit is consistency. When users follow the same process every time, they spot unusual behavior faster and make better decisions before a trip starts.',
      ],
    },
    {
      title: 'From Traffic Stress to Smooth Mornings: Ada’s FeyRide Routine',
      date: 'Mar 2, 2026',
      category: 'Stories',
      excerpt:
        'See how one Lagos professional turned a chaotic two-hour commute into a calmer, cheaper, and more predictable weekday routine.',
      story: [
        'Ada used to start each workday already exhausted. Her route changed too often, pricing was unstable, and every morning felt like a scramble.',
        'After shifting to FeyRide, she built a repeat routine with similar pickup times and a smaller circle of trusted ride matches. That routine reduced both the emotional stress of commuting and the money she spent trying to get to work quickly.',
        'What changed most was not just cost. Ada said the predictability helped her arrive prepared, on time, and far less frustrated before the day even began.',
      ],
    },
    {
      title: 'How Riders Are Turning Empty Car Seats Into Extra Income',
      date: 'Feb 21, 2026',
      category: 'Driver Stories',
      excerpt:
        'FeyRide riders are already driving the route. This story breaks down how they reduce fuel pressure by filling spare seats.',
      story: [
        'For many riders, the biggest shift is mindset. They are not adding a brand-new job to the day, they are making an existing commute more productive.',
        'A rider with two empty seats on a route they already take can use FeyRide to offset fuel, tolls, and some routine maintenance costs. Over time, that can make regular driving much less expensive.',
        'The most successful riders usually focus on reliability. Clear timing, honest communication, and a smooth pickup process are what bring passengers back.',
      ],
    },
    {
      title: 'Best Times to Book Shared Rides During the Work Week',
      date: 'Feb 14, 2026',
      category: 'Commuter Guide',
      excerpt:
        'Booking earlier is only part of the answer. These timing patterns help commuters get better ride matches through the week.',
      story: [
        'Mondays and Thursdays often behave differently from the middle of the week because commuting demand shifts with office attendance patterns. That means booking habits should adjust too.',
        'Morning bookings generally perform best when made with enough lead time for riders to review and align their route. The same logic applies before the evening peak, when last-minute decisions can narrow your options quickly.',
        'Users who track their strongest booking windows for a week or two usually find a pattern. Once that pattern becomes routine, ride matching gets easier and more dependable.',
      ],
    },
    {
      title: 'Campus Commutes Made Easier With Trusted Ride Matches',
      date: 'Jan 30, 2026',
      category: 'Student Life',
      excerpt:
        'Students are using FeyRide to cut transport costs, coordinate schedules, and move around with more confidence every day.',
      story: [
        'Students often move between lectures, labs, hostels, and internships on tight budgets. Transport friction can quickly become a daily problem rather than an occasional inconvenience.',
        'Trusted ride matches make a difference because they reduce the uncertainty around who you are traveling with and what the route will cost. That predictability matters when schedules are already demanding.',
        'For many students, FeyRide is not just cheaper. It helps them coordinate movement around academic life without depending on unstable fare changes every day.',
      ],
    },
    {
      title: 'Why Community Ratings Matter More Than Ever',
      date: 'Jan 12, 2026',
      category: 'Trust & Safety',
      excerpt:
        'Ratings are not just social proof. They help commuters make safer, faster, and more informed ride decisions.',
      story: [
        'A strong rating system helps people decide quickly without guessing. It turns previous ride experiences into useful context for the next person on the route.',
        'Ratings also reward consistency. Users who communicate well, arrive on time, and keep trips smooth are easier to trust, which improves matching quality over time.',
        'As commuting choices become more crowded, transparent feedback becomes a core part of safety and reliability, not just a nice extra feature.',
      ],
    },
  ];

  useEffect(() => {
    if (!activePost) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActivePost(null);
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [activePost]);

  return (
    <div>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <img
          src={blogHeroBg}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-1 text-nova-charcoal mb-6">FeyRide Blog</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            Insights, updates, and commuter stories from the FeyRide community.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nova-green mb-3">
              Fresh Reads
            </p>
            <h2 className="heading-3 text-nova-charcoal mb-4">
              More blog posts for commuters, riders, and everyday city movement
            </h2>
            <p className="text-nova-charcoal-700 leading-relaxed">
              Explore practical commuting tips, rider wins, safety guidance, and real stories from
              people using FeyRide to move smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePost(post)}
                className="text-left"
              >
                <Card className="h-full border border-nova-charcoal-lighter hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="text-xs uppercase tracking-wide text-nova-green font-semibold">
                      {post.category}
                    </p>
                    <p className="text-xs text-nova-charcoal-600">{post.readTime}</p>
                  </div>
                  <h3 className="font-bold text-xl text-nova-charcoal mb-3">{post.title}</h3>
                  <p className="text-sm text-nova-charcoal-700 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-nova-charcoal-600">{post.date}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-nova-green">
                      Read story
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activePost && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm px-4 py-8 overflow-y-auto"
          onClick={() => setActivePost(null)}
          role="presentation"
        >
          <div
            className="mx-auto w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-story-title"
          >
            <Card className="p-0 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
              <div className="bg-nova-charcoal text-white px-6 py-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-nova-green-light mb-2">
                    {activePost.category}
                  </p>
                  <h2 id="blog-story-title" className="text-2xl font-bold leading-tight">
                    {activePost.title}
                  </h2>
                  <p className="text-sm text-white/80 mt-2">
                    {activePost.date} • {activePost.readTime}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  className="rounded-full p-2 hover:bg-white/10 transition-colors"
                  aria-label="Close story"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="bg-white px-6 py-6 md:px-8 md:py-8">
                <p className="text-lg text-nova-charcoal font-medium leading-relaxed mb-6">
                  {activePost.excerpt}
                </p>

                <div className="space-y-5 mb-8">
                  {activePost.story.map((paragraph) => (
                    <p key={paragraph} className="text-nova-charcoal-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}


