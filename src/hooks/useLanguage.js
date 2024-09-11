import { useContext } from "react";
import LanguageContext from "../context/LanguageProvider";

const useLanguage = () => {
    // const { language } = useContext(AuthContext);
    // console.log(auth, "auth auth")
    // useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(LanguageContext);
}

export default useLanguage;