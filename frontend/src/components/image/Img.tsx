import React, { useState, forwardRef } from "react";
// import defaultFallback from "../../assets/images/no_image.png"
import no_img_text from "../../assets/images/no_img_text.png"
const img = "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/anh-avatar-cute-gau-buon.jpg?ssl=1"
interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string; 
}

const Img = forwardRef<HTMLImageElement, ImgProps>(
  ({ src, alt, className, fallback: customFallback = img, ...props }, ref) => {
    const [fallback, setFallback] = useState<string>("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={className}
        ref={ref}
        src={fallback || src ||no_img_text}
        alt={alt}
        onError={handleError}
        {...props}
      />
    );
  }
);

export default Img;