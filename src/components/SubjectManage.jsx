import { Pencil, Trash2 } from 'lucide-react'

export default function Subject({ subjects, handleDelete, handleAddSubject, newSubject, setNewSubject }) {
  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Code</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id} className="border-t">
              <td className="p-2">{subject.name}</td>
              <td className="p-2">{subject.code}</td>
              <td className="p-2 text-right">
                <button className="mr-2 text-gray-500 hover:text-gray-700">
                  <Pencil className="inline h-4 w-4" />
                </button>
                <button onClick={() => handleDelete(subject.id)} className="text-gray-500 hover:text-gray-700">
                  <Trash2 className="inline h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-bold">Add New Subject</h2>
        <div className="grid gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-500"
              placeholder="Enter name"
              value={newSubject.name}
              onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Code</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-500"
              placeholder="Enter subject code"
              value={newSubject.code || ''}
              onChange={(e) => setNewSubject({ ...newSubject, code: e.target.value })}
            />
          </div>
        </div>
        <button
          className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleAddSubject}
        >
          Add Subject
        </button>
      </div>
    </div>
  )
}
