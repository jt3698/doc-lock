/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVersions = /* GraphQL */ `
  query GetVersions($id: ID!) {
    getVersions(id: $id) {
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
export const listVersions = /* GraphQL */ `
  query ListVersions(
    $filter: ModelVersionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVersions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getForms = /* GraphQL */ `
  query GetForms($id: ID!) {
    getForms(id: $id) {
      id
      productName
      createdAt
      updatedAt
    }
  }
`;
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      email
      admin
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        admin
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
