import { ApexOptions } from "apexcharts";

export interface PatientInfo {
    id?: number;
    name: string;
    age?: number;
    email?: string;
    phone?: string;
    gender: string; // Add gender field
    mrNo?: string,
    accession?: string,
    doctor?: string,
    notesImg?: string,
    uploadConsentImg?: string,
    stimReportImg?: string,
    result?: string,
    reportDataImg?: string,
    statusImg?: string,
}



export interface DashboardIcons {
    src: string;
    alt: string;
    path?: string;
}


export interface DashboardCardData {
    title: string;
    subtitle: string;
    value: string;
    icon: string;
}


export interface MenuItem {
    path: string;
    label: string;
    icon: string;
}


export interface Logo {
    path?: string;
    src: string;
    alt: string;
}


export interface PatientFormProps {
    form: any;
    formData: PatientInfo;
    onFormChange: (data: PatientInfo) => void;
}

export interface statusType {
    src: string;
    alt: string;
    msg: string;
}

export interface SourceTabItem {
    key: string;
    label: string;
    series : number[]
}
  
export interface EmbryoGradingTabItem {
    key: string;
    label: string;
    series: any[];
}


export interface GradingChartInfo {
    series: Array<{
        name: string;
        data: number[];
        color?: string;
    }>;
    options: ApexOptions;
}

export interface SourceChartInfo {
    series: number[];
    options: ApexOptions;
}
  