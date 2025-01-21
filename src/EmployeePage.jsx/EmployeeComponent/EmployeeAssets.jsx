const EmployeeAssets = ({asset}) => {
    const { _id, product_name, product_type, product_quantity, added_date } =
    asset || [];
    return (
        <div>
            <div>
                <p>{product_name}</p>
                <p>{product_name}</p>
            </div>
        </div>
    );
};

export default EmployeeAssets;