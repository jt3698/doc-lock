/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FormsCreateFormInputValues = {
    productName?: string;
};
export declare type FormsCreateFormValidationValues = {
    productName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormsCreateFormOverridesProps = {
    FormsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    productName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormsCreateFormProps = React.PropsWithChildren<{
    overrides?: FormsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FormsCreateFormInputValues) => FormsCreateFormInputValues;
    onSuccess?: (fields: FormsCreateFormInputValues) => void;
    onError?: (fields: FormsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FormsCreateFormInputValues) => FormsCreateFormInputValues;
    onValidate?: FormsCreateFormValidationValues;
} & React.CSSProperties>;
export default function FormsCreateForm(props: FormsCreateFormProps): React.ReactElement;
