import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import faqsData from '../data/faqs.json';

export default function FAQ() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Frequently Asked Questions</h1>
          <p className="subheading text-gray-700 max-w-2xl mx-auto">
            Got questions? We've got answers. Here's everything you need to know about FeyRide.
          </p>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {faqsData.faqs.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="heading-2 text-nova-charcoal mb-8 pb-4 border-b-2 border-nova-green">
                  {category.category}
                </h2>

                <Accordion
                  items={category.questions.map((q) => ({
                    title: q.title,
                    content: q.content,
                  }))}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-padding bg-nova-charcoal-light">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-nova-charcoal mb-6">Can't Find Your Answer?</h2>
          <p className="subheading text-gray-700 mb-8">
            Our support team is here to help 24/7
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}


