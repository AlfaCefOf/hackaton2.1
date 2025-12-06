const FAQ = () => {
  const faqs = [
    {
      question: "How do I report a lost item?",
      answer: "Click on 'Report Lost' in the navigation menu, fill out the form with details about your lost item including description, location, and date, and upload a photo if available. Our system will match it with found items."
    },
    {
      question: "How do I report a found item?",
      answer: "Use the 'Report Found' option, provide detailed information about the item you found, including where and when you found it. This helps the owner identify their lost item."
    },
    {
      question: "Is there a fee to use Lost & Found?",
      answer: "No, our service is completely free. We believe in helping people reunite with their belongings without any cost barriers."
    },
    {
      question: "How long do items stay listed?",
      answer: "Lost items remain active for 90 days. Found items stay listed for 30 days. You can renew listings if needed through your dashboard."
    },
    {
      question: "How do I contact someone about an item?",
      answer: "Click 'View Details' on any item, then use the 'Contact Owner' button. Messages are sent securely through our platform."
    },
    {
      question: "What should I do if I suspect fraud?",
      answer: "Never share personal information or meet in unsafe locations. Report suspicious activity to our support team immediately."
    },
    {
      question: "Can I edit my item listing?",
      answer: "Yes, go to your Dashboard and select 'My Lost Items' or 'My Found Items' to edit or update your listings."
    },
    {
      question: "How do I delete my account?",
      answer: "Contact our support team with your account details, and we'll assist you with account deletion and data removal."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Find answers to common questions about our service</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {faq.question}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Still have questions?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Can't find the answer you're looking for? Our support team is here to help.
        </p>
        <div className="space-x-4">
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Support
          </a>
          <a href="/help" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;