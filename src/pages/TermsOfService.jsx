export default function TermsOfService() {
  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Terms of Service</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            These terms govern use of the FeyRide platform for passengers and riders.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-3 text-nova-charcoal mb-4">Platform Use</h2>
          <ul className="space-y-2 text-nova-charcoal-700">
            <li>Users must provide accurate registration details</li>
            <li>Riders must comply with local transport regulations</li>
            <li>Accounts are not transferable</li>
          </ul>

          <h2 className="heading-3 text-nova-charcoal mt-10 mb-4">Payments and Fees</h2>
          <ul className="space-y-2 text-nova-charcoal-700">
            <li>Passengers pay fares through the app only</li>
            <li>Riders receive instant payouts after fees</li>
            <li>Cancellations incur a fee of 10%</li>
          </ul>

          <h2 className="heading-3 text-nova-charcoal mt-10 mb-4">Safety and Conduct</h2>
          <ul className="space-y-2 text-nova-charcoal-700">
            <li>Respectful behavior is required at all times</li>
            <li>Harassment or unsafe conduct leads to suspension</li>
            <li>Report incidents through the in-app tools</li>
          </ul>
        </div>
      </section>
    </div>
  );
}


