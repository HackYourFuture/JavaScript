const mondayTasks = [
    {
        name: 'Daily standup',
        duration: 30, // specified in minutes
    },
    {
        name: 'Feature discussion',
        duration: 120,
    },
    {
        name: 'Development time',
        duration: 240,
    },
    {
        name: 'Talk to different members from the product team',
        duration: 60,
    },
];

const earnings = (tasks) => {
    const hourlyRate = 25;
    const durations = tasks.map(task => task.duration);

    const earning = durations.reduce((currentValue, duration) => {
        console.log(duration);
        return currentValue + (duration / 60 * hourlyRate);
    }, 0);

    return `€${earning.toFixed(2)}`;
}

console.log(earnings(mondayTasks))