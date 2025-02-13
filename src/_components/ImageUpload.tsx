import { useState, useRef, ChangeEvent, DragEvent, KeyboardEvent } from "react";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string | File) => void;
  storedImgUrl?: string;
  error?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  storedImgUrl,
  error,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadImageToCloudinary = async (file: File) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload_1");

    try {
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

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
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
      tabIndex={0}
      role="button"
      aria-label="Upload an image"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="imageUrl"
        className="hidden"
        onChange={handleChange}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

      {isLoading ? (
        <div className="flex flex-col items-center space-y-4">
          <span>Uploading image...</span>
        </div>
      ) : selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected image"
          className="h-full w-full rounded-4xl object-cover"
        />
      ) : storedImgUrl ? (
        <img
          src={storedImgUrl}
          alt="Selected image"
          className="h-full w-full rounded-4xl object-cover"
        />
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
