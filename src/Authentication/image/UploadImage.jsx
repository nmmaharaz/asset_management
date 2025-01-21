const UploadImage = () => {
  return (
    <div className="space-y-1 text-sm">
      <label htmlFor="fullname" className="block dark:text-gray-600">
        Upload Photo
      </label>
      <div className="flex">
        <input
          type="file"
          name="photo"
          id="files"
          className="px-8 w-full py-4 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100"
        />
      </div>
    </div>
  );
};

export default UploadImage;
