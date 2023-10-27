import JuguetesContext from "@/context/JuguetesProvider";
import { useContext } from "react";

const useJuguetes = () => {
  return useContext(JuguetesContext);
};
export default useJuguetes;
