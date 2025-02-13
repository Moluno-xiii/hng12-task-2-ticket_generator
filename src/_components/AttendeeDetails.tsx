import { useTabContext } from "../_contexts/TabContext";
import ImageUpload from "./ImageUpload";
import { useFormContext } from "../_contexts/FormContext";

const AttendeeDetails = () => {
  const {
    dispatch,
    state: { imageUrl },
  } = useFormContext();
  const { onNextTab, onPreviousTab } = useTabContext();

  const handleImageUpload = (url: string | File) => {
    dispatch({ type: "UPDATE_IMAGE_URL", payload: url });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    if (imageUrl) {
      formObject.imageUrl = imageUrl;
    }

    console.log("Form Data:", formObject);
    // set the formdata to localstorage
    onNextTab();
  };

  return (
    <div className="md:border-border space-y-8 md:rounded-4xl md:border md:bg-[#08252B] md:p-8">
      <form
        aria-labelledby="attendee details form"
        className="flex w-full flex-col gap-y-6"
        onSubmit={onSubmit}
      >
        <div
          className="border-border bg-primary/30 rounded-2xl border p-3"
          aria-labelledby="form image input"
        >
          <div className="relative flex flex-col items-center justify-center gap-y-2">
            <label htmlFor="image" className="place-self-start">
              Upload Profile Photo
            </label>
            <ImageUpload onImageUpload={handleImageUpload} />
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
            onChange={(e) =>
              dispatch({ type: "UPDATE_NAME", payload: e.target.value })
            }
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
            onChange={(e) =>
              dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
            }
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
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SPECIAL_REQUEST",
                payload: e.target.value,
              })
            }
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
