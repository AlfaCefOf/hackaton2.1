import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiPlus, FiImage, FiDollarSign } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Validation schema for pet listing
const PetListingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Pet name is required'),
  type: Yup.string()
    .required('Pet type is required'),
  breed: Yup.string()
    .required('Breed is required'),
  age: Yup.string()
    .required('Age is required'),
  price: Yup.number()
    .min(0, 'Price must be positive')
    .required('Price is required'),
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters')
    .required('Description is required'),
  location: Yup.string()
    .required('Location is required'),
});

const SellPets = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      const user = JSON.parse(localStorage.getItem('user'));

      const newPet = {
        ...values,
        id: Date.now(), // Simple ID generation
        image: getPetEmoji(values.type),
        tags: ['For Sale'],
        badges: ['New Listing'],
        category: values.type + 's', // Convert to plural category
      };

      const response = await fetch('http://localhost:3001/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPet),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        resetForm();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert('Failed to list pet. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
    setIsSubmitting(false);
  };

  const getPetEmoji = (type) => {
    const emojis = {
      'Dog': '🐶',
      'Cat': '🐱',
      'Bird': '🐦',
      'Fish': '🐠',
      'Rabbit': '🐰',
      'Hamster': '🐹',
      'Other': '🐾'
    };
    return emojis[type] || '🐾';
  };

  const petTypes = ['Dog', 'Cat', 'Bird', 'Fish', 'Rabbit', 'Hamster', 'Other'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sell Your Pet</h1>
            <p className="text-xl text-gray-600">List your pet for adoption or sale</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {submitSuccess && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Pet listed successfully! It will appear in the marketplace.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Formik
              initialValues={{
                name: '',
                type: '',
                breed: '',
                age: '',
                price: '',
                description: '',
                location: 'Tashkent',
              }}
              validationSchema={PetListingSchema}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pet Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pet Name *
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter pet name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Pet Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pet Type *
                      </label>
                      <Field
                        as="select"
                        name="type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select type</option>
                        {petTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </Field>
                      <ErrorMessage name="type" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Breed */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Breed *
                      </label>
                      <Field
                        type="text"
                        name="breed"
                        placeholder="Enter breed"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <ErrorMessage name="breed" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age *
                      </label>
                      <Field
                        type="text"
                        name="age"
                        placeholder="e.g., 2 years, 6 months"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Price */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price (UZS) *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiDollarSign className="text-gray-400" />
                        </div>
                        <Field
                          type="number"
                          name="price"
                          placeholder="0"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
                      <p className="text-xs text-gray-500 mt-1">Enter 0 for free adoption</p>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location *
                      </label>
                      <Field
                        type="text"
                        name="location"
                        placeholder="City, Uzbekistan"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <ErrorMessage name="location" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description *
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      rows={4}
                      placeholder="Describe your pet's personality, health condition, and any special needs..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Preview */}
                  {values.name && values.type && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Preview</h3>
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{getPetEmoji(values.type)}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{values.name}</h4>
                          <p className="text-sm text-gray-600">{values.breed} • {values.age}</p>
                          <p className="text-sm text-gray-600">{values.location}</p>
                          <p className="text-sm font-medium text-green-600">
                            {values.price === 0 ? 'Free Adoption' : `${values.price.toLocaleString()} UZS`}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FiPlus className="mr-2" />
                      {isSubmitting ? 'Listing Pet...' : 'List Pet for Sale'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellPets;