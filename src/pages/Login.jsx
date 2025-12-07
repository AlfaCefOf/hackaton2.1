import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FiMail, FiLock } from 'react-icons/fi'
import { useNavigate, Link } from 'react-router-dom'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required')
})

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('http://localhost:5000/users')
      const users = await response.json()

      const user = users.find(
        u => u.email === values.email && u.password === values.password
      )

      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        if (user.name.toLowerCase().endsWith('admin')) {
          navigate('/admin')
        } else {
          navigate('/')
        }
      } else {
        alert("Noto'g'ri email yoki parol")
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
    setSubmitting(false)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FEFEFE] to-[#F1FAEE] relative overflow-hidden'>
      {/* Floating paw decorations */}
      <div className='absolute top-20 left-10 text-[#A8DADC]/20 text-6xl animate-bounce' style={{animationDelay: '0s'}}>🐾</div>
      <div className='absolute top-40 right-20 text-[#F4A261]/20 text-4xl animate-bounce' style={{animationDelay: '1s'}}>🐾</div>
      <div className='absolute bottom-32 left-20 text-[#A8DADC]/15 text-5xl animate-bounce' style={{animationDelay: '2s'}}>🐾</div>
      <div className='absolute bottom-20 right-10 text-[#F4A261]/15 text-3xl animate-bounce' style={{animationDelay: '0.5s'}}>🐾</div>
      <div className='auth-form glassmorphism rounded-xl shadow-lg relative z-10'>
        <h2 className='text-3xl font-bold text-[#2F3E46] text-center mb-8'>
          Welcome Back
        </h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='space-y-6'>
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

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full btn-primary py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </button>
            </Form>
          )}
        </Formik>
        <p className='text-[#2F3E46]/70 text-center mt-6'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-[#A8DADC] hover:text-[#A8DADC]/80 font-semibold transition-colors duration-200'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
