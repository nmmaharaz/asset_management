const LimitedStockRow = ({limited}) => {
    const {product_name, hr_email, product_quantity} = limited || []
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
        <td className="p-3">
          <p>{product_name}</p>
        </td>
        <td className="p-3">
          <p>{hr_email}</p>
        </td>
        <td className="p-3 text-center">
          <p>{product_quantity}</p>
        </td>
        
      </tr>
    );
};

export default LimitedStockRow;