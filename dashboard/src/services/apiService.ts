import axios from "axios";
import { PatientInfo } from "../Types/type";


//get patient List
const getPatientList = async () => {
    try {
        const response = await axios.get<PatientInfo[]>('/patientList');
        return response.data;
    } catch (error) {
        throw error;
    }
};


// add Patient 
const addNewPatient = async (Patient : PatientInfo ) =>{
    try {
        const response = await axios.post("/patientList", Patient);
        return response.data;
    } catch (error) {
        throw error;
    }
}







export { getPatientList , addNewPatient };