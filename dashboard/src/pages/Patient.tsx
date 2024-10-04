import React, { useState } from 'react'
import Footer from '../components/Footer'

import addIcon from '../Assets/SVG/addIcon.svg'
import filterIcon from '../Assets/SVG/filterIcon.svg'
import { Link } from 'react-router-dom';


import viewTable from '../Assets/SVG/viewTable.svg';
import uploadTable from '../Assets/SVG/uploadTable.svg';
import completedTable from "../Assets/SVG/completedTable.svg";
import pendingTable from '../Assets/SVG/pendingTable.svg'
import ArrowLeft from '../Assets/SVG/arrow-square-left.svg'
import ArrowRight from '../Assets/SVG/arrow-square-right.svg'

import { Button, Form, Modal } from 'antd';
import PatientForm from '../components/PatientFrom';
import { DashboardIcons, PatientInfo } from '../Types/type';

const dashboardIcons: DashboardIcons[] = [
    { src: addIcon, alt: 'addIcon' },
    { src: filterIcon, alt: 'filterIcon' },

];

const patientInformation : PatientInfo[]= [
    {
        id: 1,
        name: "Ralph Edwards",
        mrNo: "SDF45678543",
        gender: "Female",
        accession: "123RND",
        doctor: "Cody Fisher",
        email: 'Ralph@mail.com',
        phone: '1252634526',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "Released",
        reportDataImg: viewTable,
        statusImg: completedTable,
    },
    {
        id: 2,
        name: "John Doe",
        mrNo: "SDF98765432",
        gender: "Male",
        accession: "456ABC",
        doctor: "Alice Smith",
        email: 'John@mail.com',
        phone: '9856242553',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "Released",
        reportDataImg: viewTable,
        statusImg: pendingTable,
    },
    {
        id: 3,
        name: "Jane Smith",
        mrNo: "SDF23456789",
        gender: "Female",
        accession: "789XYZ",
        doctor: "Bob Johnson",
        email: 'Jane@mail.com',
        phone: '9876543210',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "In Progress",
        reportDataImg: viewTable,
        statusImg: pendingTable,
    },
    {
        id: 4,
        name: "Mark Wilson",
        mrNo: "SDF12345678",
        gender: "Male",
        accession: "567DEF",
        doctor: "Emily Davis",
        email: 'Mark@mail.com',
        phone: '9654321876',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "Released",
        reportDataImg: viewTable,
        statusImg: completedTable,
    },
    {
        id: 5,
        name: "Lucy Brown",
        mrNo: "SDF54321678",
        gender: "Female",
        accession: "345GHI",
        doctor: "Chris Lee",
        email: 'Lucy@mail.com',
        phone: '9512634879',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "Pending",
        reportDataImg: viewTable,
        statusImg: pendingTable,
    },
    {
        id: 6,
        name: "Robert Johnson",
        mrNo: "SDF87654321",
        gender: "Male",
        accession: "654JKL",
        doctor: "Anna White",
        email: 'Robert@mail.com',
        phone: '9546371825',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "Released",
        reportDataImg: viewTable,
        statusImg: completedTable,
    },
    {
        id: 7,
        name: "Emma Davis",
        mrNo: "SDF34567890",
        gender: "Female",
        accession: "234MNO",
        doctor: "Paul Green",
        email: 'Emma@mail.com',
        phone: '9871234569',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "Pending",
        reportDataImg: viewTable,
        statusImg: pendingTable,
    },
    {
        id: 8,
        name: "Michael Brown",
        mrNo: "SDF09876543",
        gender: "Male",
        accession: "789PQR",
        doctor: "Nancy Adams",
        email: 'Michael@mail.com',
        phone: '9845632178',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "Released",
        reportDataImg: viewTable,
        statusImg: completedTable,
    },
    {
        id: 9,
        name: "Sophia White",
        mrNo: "SDF56743210",
        gender: "Female",
        accession: "456STU",
        doctor: "David Parker",
        email: 'Sophia@mail.com',
        phone: '9638527410',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "In Progress",
        reportDataImg: viewTable,
        statusImg: pendingTable,
    },
    {
        id: 10,
        name: "James Miller",
        mrNo: "SDF23415678",
        gender: "Male",
        accession: "123VWX",
        doctor: "Sarah Clark",
        email: 'James@mail.com',
        phone: '9123456789',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "Released",
        reportDataImg: viewTable,
        statusImg: completedTable,
    },
    {
        id: 11,
        name: "Olivia Martinez",
        mrNo: "SDF32165487",
        gender: "Female",
        accession: "654YZA",
        doctor: "James Lewis",
        email: 'Olivia@mail.com',
        phone: '9874561230',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "Pending",
        reportDataImg: viewTable,
        statusImg: pendingTable,
    },
    {
        id: 12,
        name: "Ethan Rodriguez",
        mrNo: "SDF65432198",
        gender: "Male",
        accession: "789BCD",
        doctor: "Karen Scott",
        email: 'Ethan@mail.com',
        phone: '9564123789',
        notesImg: viewTable,
        uploadConsentImg: uploadTable,
        stimReportImg: viewTable,
        result: "Released",
        reportDataImg: viewTable,
        statusImg: completedTable,
    },
];



export default function Patient() {

    const [patientData , setPatientData] = useState<any[]>(patientInformation)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState<PatientInfo>({
        name: '',
        age: 0,
        email: '',
        phone: '',
        gender: '', // Initialize gender
    });

    const [form] = Form.useForm();
    const handlePageChange = (key: any) => {
        console.log(key);
    }

    const showModal = (patient?: PatientInfo) => {
        if (patient) {
            setFormData(patient);
            form.setFieldsValue(patient); 
        } else {
            setFormData({ name: '', age: 0, email: '', phone: '', gender: '' });
            form.resetFields();
        }
        setIsModalOpen(true);
    };



    const handleCancel = () => {
        setIsModalOpen(false);
        setFormData({ name: '', age: 0, email: '', phone: '', gender: '' });
        form.resetFields();
    };

    const handleFormChange = (updatedFormData: PatientInfo) => {
        setFormData(updatedFormData);
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();

            if (formData.id) {
                await updatePatient(formData.id, values);
            } else {
                await addPatient(values);
            }

            setIsModalOpen(false);
            setFormData({ name: '', age: 0, email: '', phone: '', gender: '' });
            form.resetFields();

        } catch (errorInfo) {
            console.log('Validation Failed:', errorInfo);
        }
    };

    // add a patient
    const addPatient = async (patientInfo: PatientInfo) => {
        console.log('Adding patient:', patientInfo);

    
       const patientRecord = {
            ...patientData[0],
            ...patientInfo 
        };

        patientRecord.id = patientData.length + 1;

        console.log('Adding patient:', patientRecord);
        patientData.push(patientRecord)
    };

    // update a patient
    const updatePatient = async (id: number, patientInfo: PatientInfo) => {
        const updatedPatientData = patientData.map((patient) => {
            if (patient.id === id) {
                return {
                    ...patient,
                    ...patientInfo  
                };
            }
            return patient;
        });
    
        console.log('Updated patient data:', updatedPatientData);
        setPatientData(updatedPatientData)
    };

    // load patient data
    const loadPatientData = async (id?: number) => {

        if (id) {
            const patient = patientData.filter((res: any) => res.id === id)
            const patients: PatientInfo = patient[0];
            return patients;
        }
    
        return formData;
    };

    return (
        <>

            <div className='d-flex flex-column flex-grow-1' style={{ minHeight: '100%' }}>
                <div className='flex-grow-1 mb-3 card p-2'>
                    <div className='subTitleFont p-2'>
                        <div className=' d-flex justify-content-between align-items-center flex-wrap'>

                            <div>Patient</div>

                            <div className="d-flex flex-wrap gap-2 align-items-center ">
                                <div className="search-container">
                                    <input type="text" className="form-control border" placeholder="Search by Name, Case ID, Accession" />
                                </div>
                                <div className="d-flex flex-wrap">
                                    {dashboardIcons.map((icon, index) => (
                                        <div key={index} className="row text-decoration-none text-reset"  >
                                            {icon.path ? (
                                                <Link to={`/${icon.path}`} className="d-flex align-items-center">
                                                    <img className='dashBoardIcon pointerClass' src={icon.src} alt={icon.alt} />
                                                </Link>
                                            ) : (
                                                <img className='dashBoardIcon pointerClass' src={icon.src} alt={icon.alt} onClick={async () => {
                                                    if (icon.alt === 'addIcon') {
                                                        const patient = await loadPatientData(); 
                                                        showModal(patient);
                                                    }
                                                }} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-2 p-1 bg-light rounded patientPara px-4">
                        <div className="col-lg-3 col-md-6 p-1">
                            <div className="form-check p-1 px-2">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                    No Transferable Embryos
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-1">
                            <div className="form-check p-1 px-2">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault2" />
                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                    All Transferable Embryos
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-1">
                            <div className="form-check p-1 px-2">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault3" />
                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                    Draft Patients
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-1">
                            <div className="form-check p-1 px-2">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault4" />
                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                    International Patients
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className='m-2 flex-grow-1' style={{ overflow: 'auto' }} >
                        <table className="table table-hover">
                            <thead>
                                <tr className='patientPara'>
                                    <th scope="col">Patient Name, MR No., Gender</th>
                                    <th scope="col">Accession#</th>
                                    <th scope="col">Doctor</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Upload Consent</th>
                                    <th scope="col">Stim Report</th>
                                    <th scope="col">Result</th>
                                    <th scope="col">Report Data</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patientData.map((patient, index) => (
                                    <tr key={index} className='customRow' onClick={async () => {

                                        const patient = await loadPatientData(index + 1); 
                                        showModal(patient);


                                    }}             >
                                        <td>
                                            <p className='tableTitle m-0'>{patient.name}</p>
                                            <a className='tableTitle' href="/patient">{patient.mrNo} | {patient.gender}</a>
                                        </td>
                                        <td className='tableTitle'>{patient.accession}</td>
                                        <td className='tableTitle'>{patient.doctor}</td>
                                        <td className='p-1'>
                                            <img src={patient.notesImg} alt="viewTable" />
                                        </td>
                                        <td className='p-1'>
                                            <img src={patient.uploadConsentImg} alt="uploadTable" />
                                        </td>
                                        <td className='p-1'>
                                            <img src={patient.stimReportImg} alt="viewTable" />
                                        </td>
                                        <td className='tableTitle'>{patient.result}</td>
                                        <td className='p-1'>
                                            <img src={patient.reportDataImg} alt="viewTable" />
                                        </td>
                                        <td>
                                            <img src={patient.statusImg} alt="status" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>



                    </div>

                    <div className='paginationDiv'>
                        <span>Showing 1 to 3 of 10 entries</span>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                    <button className="page-link" disabled aria-label="Previous">
                                        <img src={ArrowLeft} alt="Previous" />
                                    </button>
                                </li>
                                <li className="page-item"><button className="page-link" onClick={() => handlePageChange(1)}>1</button></li>
                                <li className="page-item"><button className="page-link" onClick={() => handlePageChange(2)}>2</button></li>
                                <li className="page-item"><button className="page-link" onClick={() => handlePageChange(3)}>3</button></li>
                                <li className="page-item">
                                    <button className="page-link" onClick={() => handlePageChange('next')} aria-label="Next">
                                        <img src={ArrowRight} alt="Next" />
                                    </button>
                                </li>
                            </ul>
                        </nav>

                    </div>


                </div>
                <div>
                    <Footer />
                </div>
            </div>

            <Modal title="Add/Update Patient" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <PatientForm
                    form={form}
                    formData={formData}
                    onFormChange={handleFormChange}
                />
            </Modal>
        </>

    )
}
