import { useState } from 'react'
import Student from '../components/StudentManage'
import Teacher from '../components/TeacherManage'
import Subject from '../components/SubjectManage'

export default function Admin() {
  const [activeTab, setActiveTab] = useState('students')

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
          <Student />
        )}
        {activeTab === 'teachers' && (
          <Teacher />
        )}
        {activeTab === 'subjects' && (
          <Subject />
        )}
      </div>
    </div>
  )
}
