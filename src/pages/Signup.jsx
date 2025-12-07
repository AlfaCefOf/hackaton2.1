import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { useNavigate, Link } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required')
})

const Signup = () => {
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password
        })
      })

      if (response.ok) {
        alert('Signup successful! Please login.')
        resetForm()
        navigate('/login')
      } else {
        alert('Signup failed. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
    setSubmitting(false)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FEFEFE] to-[#F1FAEE] relative overflow-hidden'>
      <div
        className='absolute top-16 left-16 text-[#A8DADC]/20 text-5xl animate-bounce'
        style={{ animationDelay: '0.5s' }}
      >
        🐾
      </div>
      <div
        className='absolute top-32 right-16 text-[#F4A261]/20 text-4xl animate-bounce'
        style={{ animationDelay: '1.5s' }}
      >
        🐾
      </div>
      <div
        className='absolute bottom-40 left-12 text-[#A8DADC]/15 text-4xl animate-bounce'
        style={{ animationDelay: '1s' }}
      >
        🐾
      </div>
      <div
        className='absolute bottom-24 right-24 text-[#F4A261]/15 text-5xl animate-bounce'
        style={{ animationDelay: '2.5s' }}
      >
        🐾
      </div>
      <div
        className='absolute top-1/2 left-8 text-[#A8DADC]/10 text-3xl animate-bounce'
        style={{ animationDelay: '0s' }}
      >
        🐾
      </div>
      <div className='auth-form glassmorphism rounded-xl shadow-lg relative z-10'>
        <h2 className='text-3xl font-bold text-[#2F3E46] text-center mb-8'>
          Join Pet Tashkent
        </h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='space-y-6'>
              <div className='relative'>
                <FiUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F3E46]/60' />
                <Field
                  type='text'
                  name='name'
                  placeholder='Full name'
                  className='w-full pl-10 pr-4 py-3 bg-white border border-[#A8DADC]/30 rounded-lg text-[#2F3E46] placeholder-[#2F3E46]/50 focus:outline-none focus:ring-2 focus:ring-[#A8DADC] focus:border-transparent transition-all duration-200'
                />
                <ErrorMessage
                  name='name'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>

              <div className='relative'>
                <FiMail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F3E46]/60' />
                <Field
                  type='email'
                  name='email'
                  placeholder='Email address'
                  className='w-full pl-10 pr-4 py-3 bg-white border border-[#A8DADC]/30 rounded-lg text-[#2F3E46] placeholder-[#2F3E46]/50 focus:outline-none focus:ring-2 focus:ring-[#A8DADC] focus:border-transparent transition-all duration-200'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>

              <div className='relative'>
                <FiLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F3E46]/60' />
                <Field
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='w-full pl-10 pr-4 py-3 bg-white border border-[#A8DADC]/30 rounded-lg text-[#2F3E46] placeholder-[#2F3E46]/50 focus:outline-none focus:ring-2 focus:ring-[#A8DADC] focus:border-transparent transition-all duration-200'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>

              <div className='relative'>
                <FiLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2F3E46]/60' />
                <Field
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm password'
                  className='w-full pl-10 pr-4 py-3 bg-white border border-[#A8DADC]/30 rounded-lg text-[#2F3E46] placeholder-[#2F3E46]/50 focus:outline-none focus:ring-2 focus:ring-[#A8DADC] focus:border-transparent transition-all duration-200'
                />
                <ErrorMessage
                  name='confirmPassword'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full btn-primary py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
              >
                {isSubmitting ? 'Creating account...' : 'Create Account'}
              </button>
            </Form>
          )}
        </Formik>
        <p className='text-[#2F3E46]/70 text-center mt-6'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='text-[#A8DADC] hover:text-[#A8DADC]/80 font-semibold transition-colors duration-200'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
