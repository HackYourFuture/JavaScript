const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Rob', age: 36 },
    { name: 'Tjebbe', age: 22 },
];

const getAge = (member) => {
    return member.age;
}

const collectiveAge = (members) => {
    return members.reduce((total, member) => {
        return total + getAge(member);
    }, 0);
}

console.log('The collective age of the HYF team is: ' + collectiveAge(hackYourFutureMembers));