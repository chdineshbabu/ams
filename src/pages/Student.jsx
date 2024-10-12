import { useState } from 'react'
import { CalendarIcon } from "lucide-react"

// Mock data for the student and attendance records
const studentData = {
  name: "John Doe",
  id: "S12345",
  grade: "10th",
  attendanceRecords: [
    { subject: "Mathematics", totalClasses: 20, attended: 18 },
    { subject: "English", totalClasses: 18, attended: 16 },
    { subject: "Science", totalClasses: 22, attended: 20 },
    { subject: "History", totalClasses: 15, attended: 14 },
  ]
}

export default function Student() {
  const [dateRange, setDateRange] = useState({
    from: undefined,
    to: undefined,
  })

  const calculateOverallAttendance = () => {
    const totalClasses = studentData.attendanceRecords.reduce((sum, record) => sum + record.totalClasses, 0)
    const totalAttended = studentData.attendanceRecords.reduce((sum, record) => sum + record.attended, 0)
    return ((totalAttended / totalClasses) * 100).toFixed(2)
  }

  return (
    <div className="container mx-auto p-4">
      {/* Student Information Card */}
      <div className="mb-6 p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Student Attendance</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Name: {studentData.name}</p>
            <p>Student ID: {studentData.id}</p>
            <p>Grade: {studentData.grade}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">Overall Attendance</p>
            <p className="text-2xl font-bold text-green-600">{calculateOverallAttendance()}%</p>
          </div>
        </div>
      </div>

      {/* Attendance Records Table */}
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Attendance Records</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Subject</th>
              <th className="border-b p-2">Total Classes</th>
              <th className="border-b p-2">Classes Attended</th>
              <th className="border-b p-2">Attendance Percentage</th>
            </tr>
          </thead>
          <tbody>
            {studentData.attendanceRecords.map((record, index) => (
              <tr key={index}>
                <td className="border-b p-2">{record.subject}</td>
                <td className="border-b p-2">{record.totalClasses}</td>
                <td className="border-b p-2">{record.attended}</td>
                <td className="border-b p-2">
                  <span className={record.attended / record.totalClasses >= 0.75 ? "text-green-600" : "text-red-600"}>
                    {((record.attended / record.totalClasses) * 100).toFixed(2)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
