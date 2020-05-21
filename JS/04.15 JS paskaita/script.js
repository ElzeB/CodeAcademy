// const users = [
//     { id: 13, name: 'Stasys' },
//     { id: 22, name: 'Gitanas', lastName: 'Benit' },
//     { id: 43, name: 'Mindaugas' },
//     { id: 14, name: 'Ana', lastName: 'Fanfara' },
//     { id: 15, name: 'Vitoldas' } 
//   ] 


//   const a = users.forEach((user) => {
//     if (!user.lastName) { user.lastName = '-' }
// })
// console.log(users);

// Iš šio masyvo paverskite į Objektą:
const users = [
    { id: 13, name: 'user1', banned: false },
    { id: 22, name: 'user2', banned: true },
    { id: 43, name: 'user3', banned: false },
    { id: 14, name: 'user4', banned: true },
    { id: 15, name: 'user5', banned: false }
  ];

    users.reduce ((acc, curr) => {
    acc[curr.id] = curr;
    return acc;  
}, {})


  // resultatas:
  // const usersMap = {
  //  13: {
  //    id: 13, 
  //    name: 'user1',
  //    banned: false
  //  }, 
  //  22: {
  //    id: 22,
  //    name: 'userč',
  //    banned: true 
  //  }, .......
  // }