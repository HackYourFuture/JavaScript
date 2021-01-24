const numChildren = [0, 1, 2, 3, 4];
const partnerNames = ['John', 'Saeed', 'Jane', 'Marwa', 'Kim'];
const locations = ['France', 'The Netherlands', 'Russia', 'South Africa', 'Singapore'];
const jobs = ['Frontend developer', 'Product owner', 'Scrum master', 'CTO', 'Backend developer'];

const getRandomElement = (arrayArgument) => {
    return arrayArgument[Math.floor(Math.random() * arrayArgument.length)];
}

const tellFortune = (numberOfChildrenOptions, partnerNameOptions, locationOptions, jobTitleOptions) => {
    const randomNumberOfChildren = getRandomElement(numberOfChildrenOptions);
    const randomPartnerName = getRandomElement(partnerNameOptions);
    const randomLocation = getRandomElement(locationOptions);
    const randomJobTitle = getRandomElement(jobTitleOptions);

    console.log(`You will be a ${randomJobTitle} in ${randomLocation}, married to ${randomPartnerName} with ${randomNumberOfChildren} kids.`)
}

tellFortune(numChildren, partnerNames, locations, jobs);