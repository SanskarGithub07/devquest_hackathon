export default function Table({ data }) {
    return (
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Serial Number
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Website
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.serialNumber}
              </th>
              <td className="px-6 py-4">{item.productName}</td>
              <td className="px-6 py-4">${item.price}</td>
              <td className="px-6 py-4">
                <a
                  href={item.website}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  {item.website}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  