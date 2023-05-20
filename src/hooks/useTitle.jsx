import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `EduKids | ${title}`;
  }, [title]);
};
export default useTitle;
