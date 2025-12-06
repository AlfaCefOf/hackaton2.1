const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
        <p className="text-gray-600 dark:text-gray-300">Last updated: December 2025</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            By accessing and using Lost & Found, you accept and agree to be bound by the terms and provision of this agreement.
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Use License</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Permission is granted to temporarily use Lost & Found for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to decompile or reverse engineer any software contained on our service</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. User Responsibilities</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            When using our service, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
            <li>Provide accurate and truthful information</li>
            <li>Respect other users' privacy and safety</li>
            <li>Not engage in fraudulent or illegal activities</li>
            <li>Report found items honestly and promptly</li>
            <li>Meet in safe, public locations for item exchanges</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Content Policy</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Users are responsible for the content they post. We reserve the right to remove content that:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
            <li>Violates these terms of service</li>
            <li>Contains inappropriate or offensive material</li>
            <li>Infringes on intellectual property rights</li>
            <li>Appears to be fraudulent or misleading</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Privacy</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service,
            to understand our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Service Availability</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We strive to keep Lost & Found available 24/7, but we do not guarantee uninterrupted service.
            We reserve the right to modify or discontinue the service at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            In no event shall Lost & Found or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability
            to use the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">Email: legal@lostandfound.com</p>
            <p className="text-gray-600 dark:text-gray-300">Address: 123 Lost & Found Street, Recovery City, RC 12345</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;