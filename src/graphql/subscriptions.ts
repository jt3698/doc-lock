/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVersions = /* GraphQL */ `
  subscription OnCreateVersions($filter: ModelSubscriptionVersionsFilterInput) {
    onCreateVersions(filter: $filter) {
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
export const onUpdateVersions = /* GraphQL */ `
  subscription OnUpdateVersions($filter: ModelSubscriptionVersionsFilterInput) {
    onUpdateVersions(filter: $filter) {
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
export const onDeleteVersions = /* GraphQL */ `
  subscription OnDeleteVersions($filter: ModelSubscriptionVersionsFilterInput) {
    onDeleteVersions(filter: $filter) {
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
export const onCreateForms = /* GraphQL */ `
  subscription OnCreateForms($filter: ModelSubscriptionFormsFilterInput) {
    onCreateForms(filter: $filter) {
      id
      productName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateForms = /* GraphQL */ `
  subscription OnUpdateForms($filter: ModelSubscriptionFormsFilterInput) {
    onUpdateForms(filter: $filter) {
      id
      productName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteForms = /* GraphQL */ `
  subscription OnDeleteForms($filter: ModelSubscriptionFormsFilterInput) {
    onDeleteForms(filter: $filter) {
      id
      productName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
      id
      email
      admin
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
      id
      email
      admin
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
      id
      email
      admin
      createdAt
      updatedAt
    }
  }
`;
