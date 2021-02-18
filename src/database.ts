

export const users = [
  { id: '000', name: 'Alice', orgId: '111' },
  { id: '001', name: 'Bob', orgId: '111' },
  { id: '002', name: 'Carol', orgId: '222' },
  { id: '003', name: 'Dave', orgId: '222' },
  { id: '004', name: 'Eve', orgId: '111' },
];

export const orgs = [
  { id: '111', name: 'Cascade8', userIds: ['000', '001', '004'] },
  { id: '222', name: 'Waterfall7', userIds: ['002', '003'] },
];

export const messages = [
  { id: 'm_987', fromId: '000', toId: '003', text: 'Hello World!' },
  { id: 'm_986', fromId: '004', toId: '003', text: 'GraphQL is really cool!' },
  { id: 'm_985', fromId: '000', toId: '002', text: '🚀🚀👋🍻🍻' },
  { id: 'm_984', fromId: '002', toId: '004', text: 'HODL GANG!' },
  { id: 'm_983', fromId: '000', toId: '001', text: 'HTML is the best programming language' },
  { id: 'm_982', fromId: '001', toId: '000', text: '[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]]' },
];