import { createContext, useContext, useState } from "react";
import Inputs from "./inputs/Inputs";
import DisplayInputs from "./displayInputs/DisplayInputs";
import "./ageCalculator.css";

// context
const AgeContext = createContext();

// custom hooks
export const useAgeContext = () => {
    return useContext(AgeContext);
};

const AgeCalculator = () => {
    const [error, setError] = useState({
        error: false,
        day: { isError: false, type: "", text: "" },
        month: { isError: false, type: "", text: "" },
        year: { isError: false, type: "", text: "" },
    });

    const [data, setData] = useState({
        day: "",
        month: "",
        year: "",
    });

    const [age, setAge] = useState([
        { label: "years", value: "--" },
        { label: "months", value: "--" },
        { label: "days", value: "--" },
    ]);

    return (
        <AgeContext.Provider
            value={{ error, setError, data, setData, age, setAge }}
        >
            <main className="section__center ">
                <div className="age-calculator">
                    <Inputs />
                    <DisplayInputs />
                </div>
            </main>
        </AgeContext.Provider>
    );
};
export default AgeCalculator;
