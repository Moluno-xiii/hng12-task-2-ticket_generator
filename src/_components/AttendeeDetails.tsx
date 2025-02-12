// import { useState } from "react";
import { useTabContext } from "../_contexts/TabContext";
import ImageUpload from "./ImageUpload";

const AttendeeDetails = () => {
  const { onNextTab, onPreviousTab } = useTabContext();
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     const file = event.target.files[0];
  //     setSelectedImage(file);
  //   }
  // };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (formData: any) => {
    // e.preventDefault();
    console.log("this has been submitted");
    console.log(formData);
    onNextTab();
  };
  return (
    <div className="md:border-border space-y-8 md:rounded-4xl md:border md:bg-[#08252B] md:p-8">
      <form
        aria-labelledby="attendee details form"
        className="flex w-full flex-col gap-y-6"
        action={onSubmit}
      >
        {/* <div className="flex flex-col gap-y-2">
          <label htmlFor="image">Select Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="border-border rounded-md border p-3"
          />
        </div> */}
        <div
          className="border-border bg-primary/30 rounded-2xl border p-3"
          aria-labelledby="form image input"
        >
          <div className="relative flex flex-col items-center justify-center gap-y-2">
            <label htmlFor="image" className="place-self-start">
              Upload Profile Photo
            </label>
            <ImageUpload />
            <div className="bg-primary absolute top-20 right-4 bottom-10 left-4"></div>
          </div>
        </div>

        <div className="bg-secondary h-1"></div>

        <div className="flex flex-col gap-y-2" aria-labelledby="name input">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            id="name"
            name="name"
            aria-labelledby="name input"
            className="border-border h-12 rounded-md border px-2"
          />
        </div>

        <div
          className="relative flex flex-col gap-y-2"
          aria-labelledby="email input"
        >
          <label htmlFor="email">Enter your email</label>
          <input
            type="text"
            className="border-border h-12 rounded-md border px-10"
            placeholder="hello@avioflagos.io"
            aria-labelledby="email input"
          />
          <img
            src="mail-icon.svg"
            alt="mail icon"
            className="absolute top-12 left-2"
            aria-labelledby="mail icon for email input"
          />
        </div>
        <div
          className="flex flex-col gap-y-2"
          aria-labelledby="project details input"
        >
          <label htmlFor="project">About the project</label>
          <textarea
            name="project"
            placeholder="Textarea"
            id="project"
            className="border-border h-[127px] rounded-md border px-2 py-1"
            aria-labelledby="project details input"
          ></textarea>
        </div>

        <div className="flex h-12 w-full flex-row justify-between gap-x-4">
          <button
            onClick={() => onPreviousTab(1)}
            className="hover:bg-primary flex-1 rounded-md border border-[#24A0B5] text-[#24A0B5] transition-all duration-300"
            aria-labelledby="previous form button"
          >
            Back
          </button>
          <button
            aria-labelledby="next form button"
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
