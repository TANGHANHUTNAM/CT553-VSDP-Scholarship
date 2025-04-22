import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";
const BackToTop: React.FC = () => {
  const [showBackTop, setShowBackTop] = useState<boolean>(false);

  const handleScroll = (): void => {
    const scrollTop = document.documentElement.scrollTop;
    setShowBackTop(scrollTop > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showBackTop && (
        <div
          className="back-top bg-primary fixed bottom-6 right-6 z-10 flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border-2 border-white text-xl text-white"
          onClick={() =>
            scroll.scrollToTop({ duration: 400, smooth: "linear" })
          }
        >
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
};

export default BackToTop;
