import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('homepage-api-check-2', {
  name: 'GET - check user data',
  alertChannels: [],
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    url: 'https://reqres.in/api/users/1',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      //AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
  }
})