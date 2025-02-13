// import { useTabContext } from "../_contexts/TabContext";
// import ImageUpload from "./ImageUpload";
// import { useFormContext } from "../_contexts/FormContext";
// import { useForm, SubmitHandler } from "react-hook-form";

// interface FormData {
//   name: string;
//   email: string;
//   project: string;
// }

// const AttendeeDetails = () => {
//   const { dispatch } = useFormContext();
//   const { onNextTab, onPreviousTab } = useTabContext();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     defaultValues: {
//       name: "",
//       email: "",
//       project: "",
//     },
//   });

//   const handleImageUpload = (url: string | File) => {
//     dispatch({ type: "UPDATE_IMAGE_URL", payload: url });
//   };

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log("Form Data:", data);
//     onNextTab();
//   };
//   const storedState = localStorage.getItem("formData");
//   const stateObj = storedState ? JSON.parse(storedState) : null;

//   console.log(storedState);

//   return (
//     <div className="md:border-border space-y-8 md:rounded-4xl md:border md:bg-[#08252B] md:p-8">
//       <form
//         aria-labelledby="attendee details form"
//         className="flex w-full flex-col gap-y-6"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <div
//           className="border-border bg-primary/30 rounded-2xl border p-3"
//           aria-labelledby="form image input"
//         >
//           <div className="relative flex flex-col items-center justify-center gap-y-2">
//             <label htmlFor="image" className="place-self-start">
//               Upload Profile Photo
//             </label>
//             <ImageUpload
//               onImageUpload={handleImageUpload}
//               storedImgUrl={stateObj.imageUrl}
//             />
//             <div className="bg-primary absolute top-20 right-4 bottom-10 left-4"></div>
//           </div>
//         </div>

//         <div className="bg-secondary h-1"></div>

//         <div className="flex flex-col gap-y-2" aria-labelledby="name input">
//           <label htmlFor="name">Enter your name</label>
//           <input
//             type="text"
//             value={stateObj ? stateObj.name : ""}
//             id="name"
//             {...register("name", {
//               required: "Name is required",
//             })}
//             aria-labelledby="name input"
//             onChange={(e) =>
//               dispatch({ type: "UPDATE_NAME", payload: e.target.value })
//             }
//             className="border-border h-12 rounded-md border px-2"
//           />
//           {errors.name && (
//             <p className="mt-2 text-sm text-red-500" aria-labelledby="name input error message">{errors.name.message}</p>
//           )}
//         </div>

//         <div
//           className="relative flex flex-col gap-y-2"
//           aria-labelledby="email input"
//         >
//           <label htmlFor="email">Enter your email</label>
//           <input
//             type="text"
//             value={stateObj ? stateObj.email : ""}
//             className="border-border h-12 rounded-md border px-10"
//             placeholder="hello@avioflagos.io"
//             aria-labelledby="email input"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                 message: "Invalid email address",
//               },
//             })}
//             onChange={(e) =>
//               dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
//             }
//           />
//           {errors.email && (
//             <p className="mt-2 text-sm text-red-500" aria-labelledby="email input error message">{errors.email.message}</p>
//           )}
//           <img
//             src="mail-icon.svg"
//             alt="mail icon"
//             className="absolute top-12 left-2"
//             aria-labelledby="mail icon for email input"
//           />
//         </div>
//         <div
//           className="flex flex-col gap-y-2"
//           aria-labelledby="project details input"
//         >
//           <label htmlFor="project">About the project</label>
//           <textarea
//             value={stateObj ? stateObj.specialRequest : ""}
//             id="project"
//             {...register("project", {
//               required: "Project details are required",
//             })}
//             onChange={(e) =>
//               dispatch({
//                 type: "UPDATE_SPECIAL_REQUEST",
//                 payload: e.target.value,
//               })
//             }
//             name="project"
//             placeholder="Textarea"
//             className="border-border h-[127px] rounded-md border px-2 py-1"
//             aria-labelledby="project details input"
//           ></textarea>
//           {errors.project && (
//             <p className="mt-2 text-sm text-red-500" aria-labelledby="project details input error message">
//               {errors.project.message}
//             </p>
//           )}
//         </div>

//         <div className="flex h-12 w-full flex-row justify-between gap-x-4">
//           <button
//             onClick={() => onPreviousTab(1)}
//             className="hover:bg-primary flex-1 rounded-md border border-[#24A0B5] text-[#24A0B5] transition-all duration-300"
//             aria-labelledby="previous form button"
//           >
//             Back
//           </button>
//           <button
//             aria-labelledby="next form button"
//             type="submit"
//             className="flex-1 rounded-md border border-[#24A0B5] bg-[#24A0B5] text-white transition-all duration-300 hover:bg-[#24A0B5]/70"
//           >
//             Get My Free Ticket
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AttendeeDetails;

import { useTabContext } from "../_contexts/TabContext";
import ImageUpload from "./ImageUpload";
import { useFormContext } from "../_contexts/FormContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  project: string;
}

const AttendeeDetails = () => {
  const { dispatch } = useFormContext();
  const { onNextTab, onPreviousTab } = useTabContext();

  const storedState = localStorage.getItem("formData");
  const stateObj = storedState ? JSON.parse(storedState) : null;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const storedState = localStorage.getItem("formData");
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      reset(parsedState);
    }
  }, [reset]);

  const handleImageUpload = (url: string | File) => {
    dispatch({ type: "UPDATE_IMAGE_URL", payload: url });
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    localStorage.setItem("formData", JSON.stringify(data));
    onNextTab();
  };

  return (
    <div className="md:border-border space-y-8 md:rounded-4xl md:border md:bg-[#08252B] md:p-8">
      <form
        aria-labelledby="attendee details form"
        className="flex w-full flex-col gap-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="border-border bg-primary/30 rounded-2xl border p-3"
          aria-labelledby="form image input"
        >
          <div className="relative flex flex-col items-center justify-center gap-y-2">
            <label htmlFor="image" className="place-self-start">
              Upload Profile Photo
            </label>
            <ImageUpload
              onImageUpload={handleImageUpload}
              storedImgUrl={stateObj?.imageUrl}
            />
          </div>
        </div>

        <div className="bg-secondary h-1"></div>

        <div className="flex flex-col gap-y-2" aria-labelledby="name input">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="border-border h-12 rounded-md border px-2"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
          )}
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
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
            id="project"
            {...register("project", {
              required: "Project details are required",
            })}
            placeholder="Textarea"
            className="border-border h-[127px] rounded-md border px-2 py-1"
            aria-labelledby="project details input"
          ></textarea>
          {errors.project && (
            <p className="mt-2 text-sm text-red-500">
              {errors.project.message}
            </p>
          )}
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
