import { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [userType, setUserType] = useState('student')
  const [email, setId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError('');if (!email || !password) {
      setError('Please enter both ID and password');
      return; 
    }
    try {
      console.log(`Logging in ${userType} with ID: ${email}`);
       const res = await axios.post('http://127.0.0.1:3001/login', {
        email: email,
        password: password,
        userType: userType
      });
      console.log(res);
      if (res.data.success) {
        alert(`Login successful for ${userType} with ID: ${email}`);
      } else {
        setError(res.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred during login. Please try again.');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg py-12">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-center">Atendance Management System</h2>
        </div>
        <div className="px-6 py-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="student"
                  id="student"
                  checked={userType === 'student'}
                  onChange={() => setUserType('student')}
                  className="form-radio"
                />
                <label htmlFor="student" className="text-gray-700">
                  Student
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="teacher"
                  id="teacher"
                  checked={userType === 'teacher'}
                  onChange={() => setUserType('teacher')}
                  className="form-radio"
                />
                <label htmlFor="teacher" className="text-gray-700">
                  Teacher
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="id" className="text-gray-700">
                {userType === 'student' ? 'Student' : 'Teacher'} ID
              </label>
              <input
                id="id"
                type="text"
                placeholder={`Enter your ${userType} ID`}
                value={email}
                onChange={(e) => setId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </div>
        <div className="px-6 py-4">
          <button
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
