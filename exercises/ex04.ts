interface Participant {
  name: string;
  role: string;
};

type EventX = {
  date: Date;
  title: string;
  participants: Participant[];
}

const event1: EventX = {
  date: new Date(),
  title: "Title",
  participants: [
    { name: "Leni", role: "Student" },
    { name: "Elisson", role: "Dev" },
  ],
};

console.log(event1);

/* output
{date: 2024-10-12T21:12:55.416Z,
title: 'Title',
participants: [
    { name: 'Leni', role: 'Student' },
    { name: 'Elisson', role: 'Dev' }
    ]
} 
*/
