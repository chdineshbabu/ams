import { Pencil, Trash2 } from "lucide-react";

export default function Subject() {
  return (
    <div className="flex  justify-around items-start">
      <table className="w-[50%] border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Code</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>
        {/* <tbody>
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
        </tbody> */}
      </table>

      <div className="mt-4 p-4 bg-white w-[30%] shadow-md rounded-md">
        <h2 className="text-lg font-bold">Add New Subject</h2>
        <div className="grid gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-500"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Code
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-500"
              placeholder="Enter subject code"
            />
          </div>
          <div className="flex w-full justify-between ">
            <label className="block text-sm font-medium text-gray-700">
              Teacher
            </label>
            <select name="teacher" id="teacher" className="border-gray-300">
              <option value="Reactjs">Reactjs</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Total classes
            </label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:border-blue-500"
              placeholder="Enter Total number of classes"
            />
          </div>
        </div>
        <button className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add Subject
        </button>
      </div>
    </div>
  );
}
