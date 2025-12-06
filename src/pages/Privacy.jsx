const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-300">Last updated: December 2025</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We collect information you provide directly to us, such as when you create an account, report an item,
            or contact us for support. This may include:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
            <li>Name and contact information</li>
            <li>Account credentials</li>
            <li>Item descriptions and photos</li>
            <li>Communication records</li>
            <li>Device and usage information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
            <li>Provide and maintain our service</li>
            <li>Match lost items with found reports</li>
            <li>Facilitate communication between users</li>
            <li>Improve our service and develop new features</li>
            <li>Send you important updates and notifications</li>
            <li>Provide customer support</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Information Sharing</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
            except as described in this policy:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
            <li>With other users to facilitate item recovery</li>
            <li>With service providers who assist our operations</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Data Retention</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We retain your information for as long as necessary to provide our services and fulfill the purposes outlined
            in this policy, unless a longer retention period is required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
            <li>Access and update your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Request data portability</li>
            <li>Lodge a complaint with supervisory authorities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Cookies and Tracking</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.
            You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Third-Party Services</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our service may contain links to third-party websites or integrate with third-party services.
            We are not responsible for the privacy practices of these external services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our service is not intended for children under 13. We do not knowingly collect personal information
            from children under 13. If we become aware that we have collected such information, we will take steps
            to delete it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting
            the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">Email: privacy@lostandfound.com</p>
            <p className="text-gray-600 dark:text-gray-300">Address: 123 Lost & Found Street, Recovery City, RC 12345</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;