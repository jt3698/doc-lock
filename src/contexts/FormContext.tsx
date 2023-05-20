import { createContext, useContext, useState } from "react";

export interface VersionForm {
    version: number;
    form: string;
}

export interface FormContextType {
    latestApprovedForm: VersionForm;
    saveLatestApprovedForm: (versionForm: VersionForm) => void;

    latestNotApprovedForm: VersionForm;
    saveLatestNotApprovedForm: (versionForm: VersionForm) => void;
}

export const FormContext = createContext<FormContextType | null>(null);

export function FormProvider(props: { children: any; }) {
    const [latestApprovedForm, setLatestApprovedForm] = useState<VersionForm>(
        {
            version: 0,
            form: '',
        });
    
    const [latestNotApprovedForm, setLatestNotApprovedForm] = useState<VersionForm>(
        {
            version: 0,
            form: '',
        });

    const saveLatestApprovedForm = (versionForm: VersionForm) => {
        setLatestApprovedForm(versionForm);
    }

    const saveLatestNotApprovedForm = (versionForm: VersionForm) => {
        setLatestNotApprovedForm(versionForm);
    }

    return (
        <FormContext.Provider value={{ 
            latestApprovedForm, latestNotApprovedForm, 
            saveLatestApprovedForm, saveLatestNotApprovedForm }}>
          {props.children}
        </FormContext.Provider>
      );
};

export const useCurrentForm = () => {
    const currentFormContext = useContext(FormContext);
  
    if (!currentFormContext) {
      throw new Error(
        "useCurrentForm has to be used within <FormContext.Provider>"
      );
    }
  
    return currentFormContext;
};