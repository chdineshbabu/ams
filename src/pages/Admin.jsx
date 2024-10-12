import { useState } from 'react'
import Student from '../components/StudentManage'
import Teacher from '../components/TeacherManage'
import Subject from '../components/SubjectManage'

export default function Admin() {
  const [activeTab, setActiveTab] = useState('students')

  // Students
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', grade: 'A' },
    { id: 2, name: 'Jane Smith', grade: 'B' },
  ])
  const [newStudent, setNewStudent] = useState({ name: '', grade: '' })
  const handleAddStudent = () => {
    const newId = students.length + 1
    setStudents([...students, { id: newId, name: newStudent.name, grade: newStudent.grade }])
    setNewStudent({ name: '', grade: '' })
  }
  const handleDeleteStudent = (id) => setStudents(students.filter((student) => student.id !== id))

  // Teachers
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Mr. Anderson', subject: 'Math' },
    { id: 2, name: 'Ms. Taylor', subject: 'Science' },
  ])
  const [newTeacher, setNewTeacher] = useState({ name: '', subject: '' })
  const handleAddTeacher = () => {
    const newId = teachers.length + 1
    setTeachers([...teachers, { id: newId, name: newTeacher.name, subject: newTeacher.subject }])
    setNewTeacher({ name: '', subject: '' })
  }
  const handleDeleteTeacher = (id) => setTeachers(teachers.filter((teacher) => teacher.id !== id))

  // Subjects
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Mathematics', code: 'MTH101' },
    { id: 2, name: 'Biology', code: 'BIO102' },
  ])
  const [newSubject, setNewSubject] = useState({ name: '', code: '' })
  const handleAddSubject = () => {
    const newId = subjects.length + 1
    setSubjects([...subjects, { id: newId, name: newSubject.name, code: newSubject.code }])
    setNewSubject({ name: '', code: '' })
  }
  const handleDeleteSubject = (id) => setSubjects(subjects.filter((subject) => subject.id !== id))

  return (
    <div>
      <nav className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 font-semibold text-white rounded-md ${
            activeTab === 'students' ? 'bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'
          }`}
          onClick={() => setActiveTab('students')}
        >
          Students
        </button>
        <button
          className={`px-4 py-2 font-semibold text-white rounded-md ${
            activeTab === 'teachers' ? 'bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'
          }`}
          onClick={() => setActiveTab('teachers')}
        >
          Teachers
        </button>
        <button
          className={`px-4 py-2 font-semibold text-white rounded-md ${
            activeTab === 'subjects' ? 'bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'
          }`}
          onClick={() => setActiveTab('subjects')}
        >
          Subjects
        </button>
      </nav>

      <div>
        {activeTab === 'students' && (
          <Student
            students={students}
            handleDelete={handleDeleteStudent}
            handleAddStudent={handleAddStudent}
            newStudent={newStudent}
            setNewStudent={setNewStudent}
          />
        )}
        {activeTab === 'teachers' && (
          <Teacher
            teachers={teachers}
            handleDelete={handleDeleteTeacher}
            handleAddTeacher={handleAddTeacher}
            newTeacher={newTeacher}
            setNewTeacher={setNewTeacher}
          />
        )}
        {activeTab === 'subjects' && (
          <Subject
            subjects={subjects}
            handleDelete={handleDeleteSubject}
            handleAddSubject={handleAddSubject}
            newSubject={newSubject}
            setNewSubject={setNewSubject}
          />
        )}
      </div>
    </div>
  )
}
