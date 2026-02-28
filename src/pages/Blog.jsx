import Card from '../components/Card';

export default function Blog() {
  const posts = [
    {
      title: 'How to Save 40% on Your Commute',
      date: 'Feb 5, 2026',
      category: 'Rider Tips'
    },
    {
      title: 'Top 5 Routes With the Most Riders',
      date: 'Jan 28, 2026',
      category: 'Community'
    },
    {
      title: 'Host Safety Checklist for 2026',
      date: 'Jan 18, 2026',
      category: 'Safety'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">FeyRide Blog</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            Insights, updates, and commuter stories from the FeyRide community.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
              <Card key={idx}>
                <p className="text-xs uppercase tracking-wide text-nova-green mb-2">{post.category}</p>
                <h3 className="font-bold text-nova-charcoal mb-3">{post.title}</h3>
                <p className="text-sm text-nova-charcoal-600">{post.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


