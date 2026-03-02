import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { MdGridView } from "react-icons/md";
import { CiGrid2H } from "react-icons/ci";
import { API_BASE_URL } from "../../config/api";

const SliderManagementComponent = () => {
  const [SliderImages, setSliderImages] = useState(null);
  const [GridView, setGridView] = useState(true);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null); // Track which image is being deleted

  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");

  const [Title, setTitle] = useState("");
  const [Caption, setCaption] = useState("");
  const [ImageLink, setImageLink] = useState("");

  // Fetch slider images
  const getSliderImages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE_URL}/api/sliders`);
      setSliderImages(res.data);
    } catch (err) {
      console.error("Failed to fetch sliders:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load images on component mount
  useEffect(() => {
    getSliderImages();
  }, []);

  // Refetch when upload/delete happens
  useEffect(() => {
    if (shouldRefetch) {
      getSliderImages();
      setShouldRefetch(false); // Reset toggle
    }
  }, [shouldRefetch]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    // Only accept single file for slider upload
    const validFiles = selectedFiles
      .slice(0, 1)
      .filter((file) => file.size <= 5 * 1024 * 1024);
    if (validFiles.length === 0) {
      setMessage("No valid file selected. Max file size 5MB.");
    } else if (selectedFiles.length > 1) {
      setMessage("Only one file allowed. Using the first file.");
    } else {
      setMessage("");
    }

    setFiles(validFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    // Append single file with key "image" to match multer.single("image")
    formData.append("image", files[0]);
    formData.append("title", Title);
    formData.append("link", ImageLink);
    formData.append("caption", Caption);

    try {
      setIsUploading(true);
      const response = await axios.post(
        `${API_BASE_URL}/api/sliders/admin/slider-upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      if (response.status === 200) {
        setMessage("File uploaded successfully!");
        setFiles([]);
        setShouldRefetch(true); // Trigger refetch after upload
      } else {
        setMessage("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage(
        `Upload error: ${error.response?.data?.message || error.message}`,
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this slider?")) {
      return;
    }

    try {
      setDeletingId(id);
      const res = await axios.delete(
        `${API_BASE_URL}/api/sliders/admin/slider/${id}`,
      );

      if (res.status === 200) {
        alert("Image deleted successfully!");
        setShouldRefetch(true); // Trigger refetch after delete
      } else {
        alert("Delete failed.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert(`Delete error: ${error.response?.data?.message || error.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      <div className="p-6 overflow-y-scroll font-barlow">
        <header className="mb-6 border-b border-b-gray-300 ">
          <h2 className="text-2xl font-semibold mb-4">Slider Management</h2>
        </header>
        <p className="text-gray-600 mb-6">
          Here you can manage the homepage slider images and settings.
        </p>
        <div className="bg-white  p-4 rounded-lg shadow">
          <h3 className="text-xl font-medium mb-3">Current Slider Images</h3>
          <div className="w-50 h-10 flex justify-around border rounded-lg border-gray-300 mb-2 items-center gap-2">
            <h1 className="text-lg font-barlow font-semibold"> View:</h1>
            <button
              onClick={() => {
                setGridView(true);
              }}
              className={`${GridView ? "bg-orange-600 text-white" : ""} border p-1 rounded-md border-gray-300 hover:bg-orange-600 hover:text-white`}
            >
              {" "}
              <CiGrid2H />{" "}
            </button>
            <button
              onClick={() => {
                setGridView(false);
              }}
              className={`${GridView ? "" : "bg-orange-600 text-white"} border p-1 rounded-md border-gray-300 hover:bg-orange-600 hover:text-white`}
            >
              {" "}
              <MdGridView />{" "}
            </button>
          </div>
          <div
            className={` grid grid-cols-1 gap-4 ${GridView ? "md:grid-cols-1" : "md:grid-cols-4"} `}
          >
            {loading ? (
              <p className="text-gray-500">Loading sliders...</p>
            ) : SliderImages && SliderImages.length > 0 ? (
              SliderImages.map((images) => (
                <div
                  className="relative border border-gray-300 rounded-lg overflow-hidden"
                  key={images._id}
                >
                  <img
                    src={images.imageUrl}
                    alt="Slider 1"
                    className="w-full h-fit object-contain  rounded-lg"
                  />
                  <button
                    onClick={() => {
                      handleDelete(images._id);
                    }}
                    disabled={deletingId === images._id}
                    className={`absolute bottom-2 right-2 text-white px-2 py-1 rounded ${
                      deletingId === images._id
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {deletingId === images._id ? (
                      <span className="flex items-center gap-1">
                        <span className="inline-block w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Deleting...
                      </span>
                    ) : (
                      "Delete"
                    )}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No sliders found. Upload one to get started.
              </p>
            )}
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-3">Add New Slider Image</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-blue-600">Title </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="border border-gray-300 p-2 rounded-lg h-10"
                  placeholder="Enter Image Title"
                />
                <label className="text-blue-600"> Caption </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setCaption(e.target.value);
                  }}
                  className="border border-gray-300 p-2 rounded-lg h-10"
                  placeholder="Enter Image Caption"
                />
                <label className="text-blue-600">Link For Redirect </label>
                <input
                  type="text"
                  onChange={(e)=>{ setImageLink(e.target.value) }}
                  placeholder="Enter Link"
                  className="border border-gray-300 p-2 rounded-lg h-10"
                />
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.webp"
                className="border border-gray-300 bg-orange-600 text-white font-barlow rounded px-3 py-2"
              />
              <button
                onClick={handleUpload}
                disabled={isUploading}
                className={`font-barlow text-white px-4 py-2 rounded ${
                  isUploading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {isUploading ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Uploading...
                  </span>
                ) : (
                  "Upload"
                )}
              </button>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderManagementComponent;
