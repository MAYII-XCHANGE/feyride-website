export default function PrivacyPolicy() {
  return (
    <div>
      <section className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-nova-charcoal mb-6">Privacy Policy</h1>
          <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
            We respect your privacy and protect your personal data with industry-standard security.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-3 text-nova-charcoal mb-4">What We Collect</h2>
          <ul className="space-y-2 text-nova-charcoal-700">
            <li>Account details like name, phone, and email</li>
            <li>Verification data such as ID and vehicle documents</li>
            <li>Trip information including route and payment records</li>
          </ul>

          <h2 className="heading-3 text-nova-charcoal mt-10 mb-4">How We Use Data</h2>
          <ul className="space-y-2 text-nova-charcoal-700">
            <li>Match riders and hosts on the same routes</li>
            <li>Process payments and detect fraud</li>
            <li>Improve safety tools and service quality</li>
          </ul>

          <h2 className="heading-3 text-nova-charcoal mt-10 mb-4">Your Choices</h2>
          <ul className="space-y-2 text-nova-charcoal-700">
            <li>Update your account details anytime</li>
            <li>Request data export or deletion</li>
            <li>Opt out of marketing emails</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

