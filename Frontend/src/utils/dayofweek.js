function getDayOfWeek(dateTimeStr) {
    // Create a Date object from the date-time string
    const date = new Date(dateTimeStr);

    // Array to map numeric day of the week to string representation
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // Get the day of the week as a number (0-6)
    const dayIndex = date.getDay();

    // Return the corresponding day name
    return daysOfWeek[dayIndex];
}

// Example usage
const dateTimeStr = "2024-07-21 15:00:00";
const dayOfWeek = getDayOfWeek(dateTimeStr);
