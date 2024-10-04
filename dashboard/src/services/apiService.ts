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








export { getPatientList };