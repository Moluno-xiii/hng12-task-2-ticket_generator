import { useState, useRef, ChangeEvent, DragEvent } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
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
      setSelectedImage(URL.createObjectURL(file));
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
      />
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
          className="h-full w-full object-cover"
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
