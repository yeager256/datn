import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

type props = {
  src: string;
  className?: string;
  alt?: string;
  type?: "image" | "video";
};
function Image({ src, className, alt, type, ...prop }: props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <div
       className={'flex justify-center items-center '+className}
        onClick={handleOpen}
      >
        {type == "video" ? (
          <video autoPlay controls className={' cursor-pointer'+className} {...prop}>
            <source src={src} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={src} {...prop} className={className} alt={alt} />
        )}
      </div>
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogBody>
          {type == "video" ? (
            <video autoPlay controls >
              <source src={src}  className="h-[48rem] w-full rounded-lg object-cover object-center" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={src}  className="h-[48rem] w-full rounded-lg object-cover object-center" alt={alt} />
          )}
        </DialogBody>
      </Dialog>
    </>
  );
}

export default Image;
