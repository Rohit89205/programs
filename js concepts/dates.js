function validateMissionEndingDate(selectedDays, endingDate) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const endingDay = endingDate.getDay();
    const endingYear = endingDate.getFullYear(); // Get the day of the week for the ending date
    const endingMonth = endingDate.getMonth(); // Get the day of the week for the ending date

    console.log(endingDay, 'edn day')
    
    // Check if the selected days include Wednesday and the ending date is not 5th Jan 2024
    if (selectedDays.includes('Wednesday') && 
        !(endingDate.getFullYear() === endingYear && endingDate.getMonth() === endingMonth && endingDate.getDate() === endingDay)) {
        if (endingDay !== 3) { // Wednesday is represented as 3 in JavaScript Date object
            return false; // Return false if ending date day is not Wednesday
        }
    }

    // Other validation logic for the mission if needed...

    return true; // Return true if the validation passes
}

// Example usage:
const selectedDays = ['Monday', 'Saturday']; // Replace with user-selected days
const endingDate = new Date('2024-01-05'); // Replace with user-selected ending date

const isValidMission = validateMissionEndingDate(selectedDays, endingDate);

if (isValidMission) {
    console.log('Mission created successfully!');
}else {
    console.log('Error: The selected days are not available in the ending date.');
}