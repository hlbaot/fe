import React from 'react'
import '../assets/styles/managerFeedback.scss'

const data = [
  {
    email: "baotoanit1505@gmail.com",
    stars: "★★★★★",
    feedback: "cc",
  },
  {
    email: "baotoanit1505@gmail.com",
    stars: "★★★★★",
    feedback: "cc",
  },
  {
    email: "baotoanit1505@gmail.com",
    stars: "★★★★★",
    feedback: "cc",
  },
  {
    email: "baotoanit1505@gmail.com",
    stars: "★★★★★",
    feedback: "cc",
  },
]

const ManagerFeedback: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-2">Quản lí đánh giá</h1>
      <div className="overflow-x-auto px-2">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Sao</th>
              <th className="border px-4 py-2 text-left">Bình luận</th>
              <th className="border px-4 py-2 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2 text-yellow-500">{item.stars}</td>
                <td className="border px-4 py-2">{item.feedback}</td>
                <td className="border px-4 py-2">
                  <button type='submit' className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-9 px-4 py-2 duration-300 text-white bg-red-600 hover:bg-red-500">
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManagerFeedback;
