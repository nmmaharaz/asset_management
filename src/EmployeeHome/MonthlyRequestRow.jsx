import { format } from "date-fns";

const MonthlyRequestRow = ({request, index}) => {
    const {product_name, request_date, product_type, request_status} = request || []
    const date = format(request_date, "dd/MM/yyyy");
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                    <td className="p-3">
                      <p className="font-semibold text-sm">{index + 1}</p>
                    </td>
                    <td className="p-3">
                      <p>{product_name}</p>
                    </td>
                    <td className="p-3">
                      <p>{date}</p>
                    </td>
                    <td className="p-3">
                      <p>{product_type}</p>
                    </td>
                    <td className=" text-right">
                      <span className="px-3 py-1 font-semibold rounded-md bg-violet-600 text-gray-50">
                        <span>{request_status}</span>
                      </span>
                    </td>
                  </tr>
    );
};

export default MonthlyRequestRow;