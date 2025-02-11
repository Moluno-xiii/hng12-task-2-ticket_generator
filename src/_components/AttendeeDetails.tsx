import { useState } from "react";

const AttendeeDetails = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (formData: any) => {
    // e.preventDefault();
    console.log("this has been submitted");
    console.log(formData);
  };
  return (
    <div className="md:border-border md:ounded-4xl space-y-8 md:border md:bg-[#08252B] md:p-8">
      <form className="flex w-full flex-col gap-y-6" action={onSubmit}>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="image">Select Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="border-border rounded-md border p-3"
          />
        </div>

        {selectedImage && (
          <div>
            <p>Selected Image:</p>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="mt-2 h-32 w-32 object-cover"
            />
          </div>
        )}

        <div className="bg-secondary h-1"></div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-border h-12 rounded-md border px-2"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">Enter your email</label>
          <input
            type="text"
            className="border-border h-12 rounded-md border px-2"
            placeholder="hello@avioflagos.io"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="project">About the project</label>
          <textarea
            name="project"
            placeholder="Textarea"
            id="project"
            className="border-border h-[127px] rounded-md border px-2 py-1"
          ></textarea>
        </div>

        <div className="flex h-12 w-full flex-row justify-between gap-x-4">
          <button className="hover:bg-primary flex-1 rounded-md border border-[#24A0B5] text-[#24A0B5] transition-all duration-300">
            Back
          </button>
          <button
            type="submit"
            className="flex-1 rounded-md border border-[#24A0B5] bg-[#24A0B5] text-white transition-all duration-300 hover:bg-[#24A0B5]/70"
          >
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;
