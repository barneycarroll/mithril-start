export const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 3,
      maxItems: 12,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            faker: 'random.number'
          },
          name: {
            type: 'string',
            faker: 'name.findName'
          },
          email: {
            type: 'string',
            format: 'email',
            faker: 'internet.email'
          },
          address: {
            type: 'object',
            properties: {
              streetAddress: {
                type: 'string',
                faker: 'address.streetAddress'
              },
              city: {
                type: 'string',
                faker: 'address.city'
              },
              county: {
                type: 'string',
                faker: 'address.county'
              },
              zipCode: {
                type: 'string',
                faker: 'address.zipCode'
              }
            },
            required: ['streetName', 'zipCode']
          }
        },
        required: ['id', 'name', 'email']
      }
    }
  },
  required: ['users']
}
