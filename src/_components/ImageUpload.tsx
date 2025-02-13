import { useState, useRef, ChangeEvent, DragEvent } from "react";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string | File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadImageToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload_1");

    try {
      setIsLoading(true);
      console.log("strting function call");
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();
      if (data.secure_url) {
        setSelectedImage(data.secure_url);
        onImageUpload(data.secure_url);
      }
      console.log(data);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      uploadImageToCloudinary(file);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      uploadImageToCloudinary(file);
    }
  };

  return (
    <div
      className="relative z-10 flex size-60 cursor-pointer flex-col items-center justify-center rounded-4xl border-2 border-[#24A0B5] bg-[#24A0B5]/25"
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
        aria-labelledby="image input"
      />
      {selectedImage ? (
        isLoading ? (
          <span>uploading image...</span>
        ) : (
          <img
            src={selectedImage}
            alt="Selected"
            className="h-full w-full rounded-4xl object-cover"
          />
        )
      ) : (
        <div className="flex flex-col items-center space-y-4 p-4 text-center">
          <img src="cloud-download.svg" alt="cloud icon" />
          <p className="text-sm">Drag & drop or click to upload</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
