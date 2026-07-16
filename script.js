const missions = [
  {
    start: 5 * 60 + 30,
    end: 6 * 60,

    displaystart: "5:30AM",
    displayend: "6:00AM",

    heading: "Wakeup",

    description:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",

    tasks: ["fresh", "water 500 ml", "bath"],
  },
  {
    start: 6 * 60,
    end: 7 * 60,

    displaystart: "6:00AM",
    displayend: "7:00AM",

    heading: "Workout",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["stretching", "pushups", "meditation"],
  },
  {
    start: 7 * 60,
    end: 8 * 60,

    displaystart: "7:00AM",
    displayend: "8:00AM",

    heading: "breakfast",

    description:
      "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्।ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना॥",

    tasks: ["without mobile"],
  },
  {
    start: 8 * 60,
    end: 10 * 60,

    displaystart: "8:00AM",
    displayend: "10:00AM",

    heading: "Deep Work 1",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["web development learning", "New Topic", "Notes", "practice"],
  },
  {
    start: 10 * 60,
    end: 10 * 60 + 20,
    displaystart: "10:00AM",
    displayend: "10:20AM",

    heading: "Break",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["Avoid Reels", "play music (optional)"],
  },
  {
    start: 10 * 60 + 20,
    end: 12 * 60,

    displaystart: "10:20AM",
    displayend: "12:00PM",

    heading: "Deep Work 2",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["coding practice ", "15 questions", "2 exercise", "1 mini feature"],
  },
  {
    start: 12 * 60,
    end: 13 * 60,

    displaystart: "12:00PM",
    displayend: "1:00PM",

    heading: "Break",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["lunch", "rest"],
  },
  {
    start: 13 * 60,
    end: 14 * 60,

    displaystart: "1:00PM",
    displayend: "2:00PM",

    heading: "social time",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["Power nap", "relax"],
  },
  {
    start: 14 * 60,
    end: 15 * 60,

    displaystart: "2:00PM",
    displayend: "3:00PM",

    heading: "3D Creation",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["enjoy your day"],
  },
  {
    start: 15 * 60,
    end: 17 * 60,

    displaystart: "3:00PM",
    displayend: "5:00PM",

    heading: "Project Time </>",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["Make projects", "deploy"],
  },
  {
    start: 17 * 60,
    end: 17 * 60 + 30,

    displaystart: "5:00PM",
    displayend: "5:30PM",

    heading: "Break",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["Walk", "read", "write"],
  },
  {
    start: 17 * 60 + 30,
    end: 18 * 60,

    displaystart: "5:30PM",
    displayend: "6:00PM",

    heading: "Recall time",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["recall todays notes", "recall another days notes"],
  },
  {
    start: 18 * 60,
    end: 19 * 60,

    displaystart: "6:00PM",
    displayend: "7:00PM",

    heading: "College Work",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["study of backlogs", "study of current papers"],
  },
  {
    start: 19 * 60,
    end: 20 * 60,

    displaystart: "7:00PM",
    displayend: "8:00PM",

    heading: "break",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["dinner", "family", "relax"],
  },
  {
    start: 20 * 60,
    end: 21 * 60 + 30,

    displaystart: "8:00PM",
    displayend: "9:30PM",

    heading: "Deep Work 3",

    description: "योगः कर्मसु कौशलम्",

    tasks: ["lightly coding", "chat with chatgpt", "English Communication"],
  },
  {
    start: 21 * 60 + 30,
    end: 22 * 60,
    displaystart: "9:30PM",
    displayend: "10:00PM",

    heading: "Reading",

    description: "योगः कर्मसु कौशलम्",

    tasks: [
      "read only",
      "Avoid Music & song",
      "Avoid Screen",
      "sleeping music (optional)",
    ],
  },
  {
    start: 22 * 60,
    end: 5 * 60 + 30,
    displaystart: "10:00PM",
    displayend: "5:30AM",

    heading: "Deep Sleeping",

    description:
      "Recharge your body. Sharpen your mind. Tomorrow, we build again.",

    tasks: [
      "read only",
      "Avoid Music & song",
      "Avoid Screen",
      "sleeping music (optional)",
    ],
  },
];



// =====================
// DOM Elements
// =====================

const currentHeading = document.getElementById("current-heading");
const currentDescription = document.getElementById("current-description");
const currentTaskContainer = document.getElementById("current-task-container");

const secondHeading = document.getElementById("second-heading");
const secondDescription = document.getElementById("second-description");
const secondTaskContainer = document.getElementById("second-task-container");

const startTime = document.getElementById("start-time");
const endTime = document.getElementById("End-time");


// =====================
// Get Current Mission
// =====================

function getCurrentMissionIndex() {

    const now = new Date();

    const currentTime = now.getHours() * 60 + now.getMinutes();

    return missions.findIndex((mission) => {

        // Normal Mission
        if (mission.start < mission.end) {

            return currentTime >= mission.start &&
                   currentTime < mission.end;

        }

        // Night Mission (10PM -> 5:30AM)
        return currentTime >= mission.start ||
               currentTime < mission.end;

    });

}


// =====================
// Display Tasks
// =====================

function displayTasks(container, tasks) {

    container.innerHTML = "";

    tasks.forEach(task => {

        const span = document.createElement("span");

        span.className = "tasks";

        span.textContent = task;

        container.appendChild(span);

    });

}


// =====================
// Update UI
// =====================

function updateUI() {

    const currentIndex = getCurrentMissionIndex();

    if (currentIndex === -1) return;

    const currentMission = missions[currentIndex];

    const nextMission = missions[(currentIndex + 1) % missions.length];


    // Current Mission

    currentHeading.textContent = currentMission.heading;

    currentDescription.textContent = currentMission.description;

    displayTasks(currentTaskContainer, currentMission.tasks);


    // Second Mission

    secondHeading.textContent = nextMission.heading;

    secondDescription.textContent = nextMission.description;

    displayTasks(secondTaskContainer, nextMission.tasks);


    // Footer Time

    startTime.textContent = currentMission.displaystart;

    endTime.textContent = currentMission.displayend;

}


// =====================
// Start
// =====================

updateUI();

setInterval(updateUI, 60000);


// about popup work

const profileBtn = document.querySelector(".open-btn");
const popup = document.getElementById("about-popup");
const closeBtn = document.getElementById("close-btn");

profileBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});