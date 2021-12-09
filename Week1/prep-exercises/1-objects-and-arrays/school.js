const modules = [
  { name: 'html-css', displayName: 'HTML/CSS' },
  { name: 'javascript', displayName: 'JavaScript' },
  { name: 'browsers', displayName: 'Browsers' },
  { name: 'using-apis', displayName: 'Using APIs' },
  { name: 'node', displayName: 'Node.js' },
  { name: 'databases', displayName: 'Databases' },
  { name: 'react', displayName: 'React' },
  { name: 'project', displayName: 'Project' },
];

const classes = [
  {
    name: 'class32',
    startDate: '23-3-2021',
    active: false,
    graduationDate: '7-11-2021',
  },
  {
    name: 'class33',
    startDate: '28-5-2021',
    active: true,
    currentModule: 'project',
  },
  {
    name: 'class34',
    startDate: '2-9-2021',
    active: true,
    currentModule: 'node',
  },
  {
    name: 'class35',
    startDate: '14-11-2021',
    active: true,
    currentModule: 'javascript',
  },
];

const students = [
  { name: 'Fede', class: 'class34', gitHubName: 'fedefu', graduated: false },
  { name: 'Tjebbe', class: 'class32', gitHubName: 'Tjebbee', graduated: true },
];

const teachers = [
  {
    name: 'Stas',
    canTeach: ['javascript', 'browsers', 'using-apis'],
    nowTeaching: 'javascript',
  },
];
