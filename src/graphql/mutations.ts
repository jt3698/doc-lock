/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVersions = /* GraphQL */ `
  mutation CreateVersions(
    $input: CreateVersionsInput!
    $condition: ModelVersionsConditionInput
  ) {
    createVersions(input: $input, condition: $condition) {
      id
      version
      Forms {
        id
        productName
        createdAt
        updatedAt
      }
      approvedOn
      createdAt
      updatedAt
      versionsFormsId
    }
  }
`;
export const updateVersions = /* GraphQL */ `
  mutation UpdateVersions(
    $input: UpdateVersionsInput!
    $condition: ModelVersionsConditionInput
  ) {
    updateVersions(input: $input, condition: $condition) {
      id
      version
      Forms {
        id
        productName
        createdAt
        updatedAt
      }
      approvedOn
      createdAt
      updatedAt
      versionsFormsId
    }
  }
`;
export const deleteVersions = /* GraphQL */ `
  mutation DeleteVersions(
    $input: DeleteVersionsInput!
    $condition: ModelVersionsConditionInput
  ) {
    deleteVersions(input: $input, condition: $condition) {
      id
      version
      Forms {
        id
        productName
        createdAt
        updatedAt
      }
      approvedOn
      createdAt
      updatedAt
      versionsFormsId
    }
  }
`;
export const createForms = /* GraphQL */ `
  mutation CreateForms(
    $input: CreateFormsInput!
    $condition: ModelFormsConditionInput
  ) {
    createForms(input: $input, condition: $condition) {
      id
      productName
      createdAt
      updatedAt
    }
  }
`;
export const updateForms = /* GraphQL */ `
  mutation UpdateForms(
    $input: UpdateFormsInput!
    $condition: ModelFormsConditionInput
  ) {
    updateForms(input: $input, condition: $condition) {
      id
      productName
      createdAt
      updatedAt
    }
  }
`;
export const deleteForms = /* GraphQL */ `
  mutation DeleteForms(
    $input: DeleteFormsInput!
    $condition: ModelFormsConditionInput
  ) {
    deleteForms(input: $input, condition: $condition) {
      id
      productName
      createdAt
      updatedAt
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      email
      admin
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      email
      admin
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      email
      admin
      createdAt
      updatedAt
    }
  }
`;
