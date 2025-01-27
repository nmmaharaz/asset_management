const TopRequestTable = ({request}) => {
    const {product_name, hr_email, totalQuantity} = request || []
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
        <td className="p-3">
          <p>{product_name}</p>
        </td>
        <td className="p-3">
          <p>{hr_email}</p>
        </td>
        <td className="p-3 text-center">
          <p>{totalQuantity}</p>
        </td>
        
      </tr>
    );
};

export default TopRequestTable;