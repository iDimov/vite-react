import { useFormikContext } from "formik";
import { useEffect } from "react";

interface Props {
  searchLocked: boolean;
  setSearchLocked: (v: boolean) => void;
}

const SearchLogic: React.FC<Props> = ({ searchLocked, setSearchLocked }) => {
  const { dirty } = useFormikContext();

  useEffect(() => {
    if (dirty && searchLocked) {
      setSearchLocked(false);
    }
  }, [dirty, searchLocked, setSearchLocked]);

  return null;
};

export default SearchLogic;
