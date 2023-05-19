/* tslint:disable */
/* eslint-disable */

export const listVersionsWithoutForms = /* GraphQL */ `
  query listVersionsWithoutForms(
    $filter: ModelVersionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVersions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        version
        approvedOn
        createdAt
        updatedAt
        versionsFormsId
      }
      nextToken
    }
  }
`;