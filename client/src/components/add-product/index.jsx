import { useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../../features/dataSlice";
import FileBase64 from "react-file-base64";

export const AddProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(postData(formData));
      alert("Add Product Success");
      window.location.reload();
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label for="title" className="block mb-2 text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            name="title"
            onChange={handleChange}
            value={formData.title}
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="title"
            required
          />
        </div>
        <div className="mb-6">
          <label for="description" className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <input
            name="description"
            onChange={handleChange}
            value={formData.description}
            type="text"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="description"
            required
          />
        </div>
        <div className="mb-6">
          <label for="price" className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            name="price"
            onChange={handleChange}
            value={formData.price}
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="price"
            required
          />
        </div>
        <div className="mb-6">
          <label for="brand" className="block mb-2 text-sm font-medium text-gray-900">
            Brand
          </label>
          <input
            name="brand"
            onChange={handleChange}
            value={formData.brand}
            type="text"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="brand"
            required
          />
        </div>
        <div className="mb-6">
          <label for="category" className="block mb-2 text-sm font-medium text-gray-900">
            Category
          </label>
          <input
            name="category"
            onChange={handleChange}
            value={formData.category}
            type="text"
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="category"
            required
          />
        </div>
        <div className="mb-6">
          <label for="thumbnail" className="block mb-2 text-sm font-medium text-gray-900">
            Thumbnail
          </label>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, thumbnail: base64 })}
          />
        </div>
        <div className="mb-6">
          <label for="images" className="block mb-2 text-sm font-medium text-gray-900">
            Images
          </label>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, images: base64 })}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
};
