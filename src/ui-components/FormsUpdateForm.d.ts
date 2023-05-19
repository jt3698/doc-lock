/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Forms } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FormsUpdateFormInputValues = {
    productName?: string;
};
export declare type FormsUpdateFormValidationValues = {
    productName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormsUpdateFormOverridesProps = {
    FormsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    productName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FormsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    forms?: Forms;
    onSubmit?: (fields: FormsUpdateFormInputValues) => FormsUpdateFormInputValues;
    onSuccess?: (fields: FormsUpdateFormInputValues) => void;
    onError?: (fields: FormsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FormsUpdateFormInputValues) => FormsUpdateFormInputValues;
    onValidate?: FormsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FormsUpdateForm(props: FormsUpdateFormProps): React.ReactElement;
