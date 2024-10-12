import { useState } from 'react'
import { CalendarIcon, CheckCircle } from "lucide-react"

const classes = [
  { id: '1', name: '10th Grade Mathematics' },
  { id: '2', name: '11th Grade Physics' },
  { id: '3', name: '9th Grade English' },
]

const students = [
  { id: '1', name: 'Alice Johnson' },
  { id: '2', name: 'Bob Smith' },
  { id: '3', name: 'Charlie Brown' },
  { id: '4', name: 'Diana Ross' },
  { id: '5', name: 'Edward Norton' },
]

export default function TeacherAttendancePage() {
  const [selectedClass, setSelectedClass] = useState('')
  const [attendance, setAttendance] = useState({})

  const handleAttendanceChange = (studentId, isPresent) => {
    setAttendance(prev => ({ ...prev, [studentId]: isPresent }))
  }

  const handleSubmit = () => {
    if (!selectedClass) {
      alert('Please select a class and date')
      return
    }
    const date = new Date();
    // Here you would typically send the attendance data to your backend
    console.log('Submitting attendance:', { class: selectedClass, date: date, attendance })
    alert('Attendance submitted successfully!')
  }

  return (
    <div className="container mx-auto p-4">
    <h1 className='text-3xl font-bold py-6'>Teacher Portal</h1>
      {/* Class and Date Picker */}
      <div className="mb-6 p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Provide Attendance</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Class</label>
            <select
              className="w-full border rounded-lg p-2"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="" disabled>Select a class</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>{cls.name}</option>
              ))}
            </select>
          </div>
    </div>
      </div>

      {/* Attendance Table */}
      {selectedClass && (
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Mark Attendance</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Student Name</th>
                <th className="border-b p-2">Present</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="border-b p-2">{student.name}</td>
                  <td className="border-b p-2">
                    <input
                      type="checkbox"
                      checked={attendance[student.id] || false}
                      onChange={(e) => handleAttendanceChange(student.id, e.target.checked)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              <CheckCircle className="mr-2 h-4 w-4" /> Submit Attendance
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
