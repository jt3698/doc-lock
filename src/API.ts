/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVersionsInput = {
  id?: string | null,
  version: number,
  approvedOn?: string | null,
  versionsFormsId: string,
};

export type ModelVersionsConditionInput = {
  version?: ModelIntInput | null,
  approvedOn?: ModelStringInput | null,
  and?: Array< ModelVersionsConditionInput | null > | null,
  or?: Array< ModelVersionsConditionInput | null > | null,
  not?: ModelVersionsConditionInput | null,
  versionsFormsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Versions = {
  __typename: "Versions",
  id: string,
  version: number,
  Forms: Forms,
  approvedOn?: string | null,
  createdAt: string,
  updatedAt: string,
  versionsFormsId: string,
};

export type Forms = {
  __typename: "Forms",
  id: string,
  productName?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVersionsInput = {
  id: string,
  version?: number | null,
  approvedOn?: string | null,
  versionsFormsId?: string | null,
};

export type DeleteVersionsInput = {
  id: string,
};

export type CreateFormsInput = {
  id?: string | null,
  productName?: string | null,
};

export type ModelFormsConditionInput = {
  productName?: ModelStringInput | null,
  and?: Array< ModelFormsConditionInput | null > | null,
  or?: Array< ModelFormsConditionInput | null > | null,
  not?: ModelFormsConditionInput | null,
};

export type UpdateFormsInput = {
  id: string,
  productName?: string | null,
};

export type DeleteFormsInput = {
  id: string,
};

export type CreateUsersInput = {
  id?: string | null,
  email: string,
  admin?: boolean | null,
};

export type ModelUsersConditionInput = {
  email?: ModelStringInput | null,
  admin?: ModelBooleanInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Users = {
  __typename: "Users",
  id?: string | null,
  email: string,
  admin?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUsersInput = {
  id: string,
  email?: string | null,
  admin?: boolean | null,
};

export type DeleteUsersInput = {
  id: string,
};

export type ModelVersionsFilterInput = {
  id?: ModelIDInput | null,
  version?: ModelIntInput | null,
  approvedOn?: ModelStringInput | null,
  and?: Array< ModelVersionsFilterInput | null > | null,
  or?: Array< ModelVersionsFilterInput | null > | null,
  not?: ModelVersionsFilterInput | null,
  versionsFormsId?: ModelIDInput | null,
};

export type ModelVersionsConnection = {
  __typename: "ModelVersionsConnection",
  items:  Array<Versions | null >,
  nextToken?: string | null,
};

export type ModelFormsFilterInput = {
  id?: ModelIDInput | null,
  productName?: ModelStringInput | null,
  and?: Array< ModelFormsFilterInput | null > | null,
  or?: Array< ModelFormsFilterInput | null > | null,
  not?: ModelFormsFilterInput | null,
};

export type ModelFormsConnection = {
  __typename: "ModelFormsConnection",
  items:  Array<Forms | null >,
  nextToken?: string | null,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  admin?: ModelBooleanInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionVersionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  version?: ModelSubscriptionIntInput | null,
  approvedOn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVersionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionVersionsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFormsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFormsFilterInput | null > | null,
  or?: Array< ModelSubscriptionFormsFilterInput | null > | null,
};

export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  admin?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateVersionsMutationVariables = {
  input: CreateVersionsInput,
  condition?: ModelVersionsConditionInput | null,
};

export type CreateVersionsMutation = {
  createVersions?:  {
    __typename: "Versions",
    id: string,
    version: number,
    Forms:  {
      __typename: "Forms",
      id: string,
      productName?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    approvedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    versionsFormsId: string,
  } | null,
};

export type UpdateVersionsMutationVariables = {
  input: UpdateVersionsInput,
  condition?: ModelVersionsConditionInput | null,
};

export type UpdateVersionsMutation = {
  updateVersions?:  {
    __typename: "Versions",
    id: string,
    version: number,
    Forms:  {
      __typename: "Forms",
      id: string,
      productName?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    approvedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    versionsFormsId: string,
  } | null,
};

export type DeleteVersionsMutationVariables = {
  input: DeleteVersionsInput,
  condition?: ModelVersionsConditionInput | null,
};

export type DeleteVersionsMutation = {
  deleteVersions?:  {
    __typename: "Versions",
    id: string,
    version: number,
    Forms:  {
      __typename: "Forms",
      id: string,
      productName?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    approvedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    versionsFormsId: string,
  } | null,
};

export type CreateFormsMutationVariables = {
  input: CreateFormsInput,
  condition?: ModelFormsConditionInput | null,
};

export type CreateFormsMutation = {
  createForms?:  {
    __typename: "Forms",
    id: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFormsMutationVariables = {
  input: UpdateFormsInput,
  condition?: ModelFormsConditionInput | null,
};

export type UpdateFormsMutation = {
  updateForms?:  {
    __typename: "Forms",
    id: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFormsMutationVariables = {
  input: DeleteFormsInput,
  condition?: ModelFormsConditionInput | null,
};

export type DeleteFormsMutation = {
  deleteForms?:  {
    __typename: "Forms",
    id: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id?: string | null,
    email: string,
    admin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id?: string | null,
    email: string,
    admin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id?: string | null,
    email: string,
    admin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetVersionsQueryVariables = {
  id: string,
};

export type GetVersionsQuery = {
  getVersions?:  {
    __typename: "Versions",
    id: string,
    version: number,
    Forms:  {
      __typename: "Forms",
      id: string,
      productName?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    approvedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    versionsFormsId: string,
  } | null,
};

export type ListVersionsQueryVariables = {
  filter?: ModelVersionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVersionsQuery = {
  listVersions?:  {
    __typename: "ModelVersionsConnection",
    items:  Array< {
      __typename: "Versions",
      id: string,
      version: number,
      Forms:  {
        __typename: "Forms",
        id: string,
        productName?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      approvedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      versionsFormsId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFormsQueryVariables = {
  id: string,
};

export type GetFormsQuery = {
  getForms?:  {
    __typename: "Forms",
    id: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFormsQueryVariables = {
  filter?: ModelFormsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormsQuery = {
  listForms?:  {
    __typename: "ModelFormsConnection",
    items:  Array< {
      __typename: "Forms",
      id: string,
      productName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id?: string | null,
    email: string,
    admin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id?: string | null,
      email: string,
      admin?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateVersionsSubscriptionVariables = {
  filter?: ModelSubscriptionVersionsFilterInput | null,
};

export type OnCreateVersionsSubscription = {
  onCreateVersions?:  {
    __typename: "Versions",
    id: string,
    version: number,
    Forms:  {
      __typename: "Forms",
      id: string,
      productName?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    approvedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    versionsFormsId: string,
  } | null,
};

export type OnUpdateVersionsSubscriptionVariables = {
  filter?: ModelSubscriptionVersionsFilterInput | null,
};

export type OnUpdateVersionsSubscription = {
  onUpdateVersions?:  {
    __typename: "Versions",
    id: string,
    version: number,
    Forms:  {
      __typename: "Forms",
      id: string,
      productName?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    approvedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    versionsFormsId: string,
  } | null,
};

export type OnDeleteVersionsSubscriptionVariables = {
  filter?: ModelSubscriptionVersionsFilterInput | null,
};

export type OnDeleteVersionsSubscription = {
  onDeleteVersions?:  {
    __typename: "Versions",
    id: string,
    version: number,
    Forms:  {
      __typename: "Forms",
      id: string,
      productName?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    approvedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    versionsFormsId: string,
  } | null,
};

export type OnCreateFormsSubscriptionVariables = {
  filter?: ModelSubscriptionFormsFilterInput | null,
};

export type OnCreateFormsSubscription = {
  onCreateForms?:  {
    __typename: "Forms",
    id: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFormsSubscriptionVariables = {
  filter?: ModelSubscriptionFormsFilterInput | null,
};

export type OnUpdateFormsSubscription = {
  onUpdateForms?:  {
    __typename: "Forms",
    id: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFormsSubscriptionVariables = {
  filter?: ModelSubscriptionFormsFilterInput | null,
};

export type OnDeleteFormsSubscription = {
  onDeleteForms?:  {
    __typename: "Forms",
    id: string,
    productName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id?: string | null,
    email: string,
    admin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id?: string | null,
    email: string,
    admin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id?: string | null,
    email: string,
    admin?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
