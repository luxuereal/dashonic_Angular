/**
 * Projects Grid
 */
const taskList = [
  {
    id: 'DS-045',
    title: 'Dashboard UI',
    date: '09 Mar, 2020',
    status: 'Open',
    bg_color: 'badge-soft-primary',
    users: [
      {
        name: 'Emily Surface',
        variant: 'bg-primary'
      }
    ]
  },
  {
    id: 'DS-044',
    title: 'Calendar App Page',
    date: '08 Mar, 2020',
    status: 'Open',
    bg_color: 'badge-soft-primary',
    users: [
      {
        name: 'James Scott',
        profile: 'assets/images/users/avatar-2.jpg'
      },
      {
        name: 'Lynn Hackett',
        variant: 'bg-info'
      }
    ]
  },
  {
    id: 'DS-043',
    title: 'Authentication Page Design',
    date: '07 Mar, 2020',
    status: 'Inprogress',
    bg_color: 'badge-soft-warning ',
    users: [
      {
        name: 'Emily Surface',
        variant: 'bg-danger'
      }
    ]
  },
  {
    id: 'DS-042',
    title: 'Component Pages',
    date: '06 Mar, 2020',
    status: 'Inprogress',
    bg_color: 'badge-soft-warning ',
    users: [
      {
        name: 'James Scott',
        profile: 'assets/images/users/avatar-2.jpg'
      }
    ]
  },
  {
    id: 'DS-041',
    title: 'Admin layout design',
    date: '05 Mar, 2020',
    status: 'Completed',
    bg_color: 'badge-soft-success',
    users: [
      {
        name: 'James Scott',
        profile: 'assets/images/users/avatar-2.jpg'
      },
      {
        name: 'Lynn Hackett',
        variant: 'bg-info'
      }
    ]
  }
];

/**
* Team List
*/
const teamData = [
  {
    id: 1,
    image: 'assets/images/users/avatar-1.jpg',
    name: 'Donald Risher',
    designation: 'Full Stack Developer'
  },
  {
    id: 2,
    image: 'assets/images/users/avatar-1.jpg',
    name: 'Helen Barron',
    designation: 'Web Designer'
  },
  {
    id: 3,
    image: 'assets/images/users/avatar-3.jpg',
    name: 'Philip Theroux',
    designation: 'UI/UX Designer'
  },
  {
    id: 4,
    image: 'assets/images/users/avatar-4.jpg',
    name: 'Donald Risher',
    designation: 'Backend Developer'
  },
  {
    id: 5,
    image: 'assets/images/users/avatar-5.jpg',
    name: 'Gerald Moyer',
    designation: 'Backend Developer'
  },
  {
    id: 6,
    image: 'assets/images/users/avatar-6.jpg',
    name: 'Sharon Carver',
    designation: 'Frontend Developer'
  },
  {
    id: 7,
    image: 'assets/images/users/avatar-7.jpg',
    name: 'Jody Tondreau',
    designation: 'PHP Developer'
  },
  {
    id: 8,
    image: 'assets/images/users/avatar-8.jpg',
    name: 'Dennis Goulet',
    designation: 'Graphic Designer'
  },
  {
    id: 9,
    image: 'assets/images/users/avatar-9.jpg',
    name: 'Cecelia Farrell',
    designation: 'Angular Developer'
  }
];

/**
* Activity Message List
*/
const messageData = [
  {
    profile: 'assets/images/users/avatar-2.jpg',
    name: 'John Patino',
    content: 'Donec quam felis ultricies nec, pellentesque eu pretium quis',
    date: '09:34 AM'
  },
  {
    profile: 'assets/images/users/avatar-1.jpg',
    name: 'Kate Daniels',
    content: 'Aenean imperdiet. etiam ultricies nisi vel augue.',
    date: '09:45 AM'
  },
  {
    profile: 'assets/images/users/avatar-2.jpg',
    name: 'John Patino',
    image: [
      {
        icon: 'uil-scenery',
        name: 'Image-1.jpg',
        size: '1.2 MB'
      }
    ],
    date: '10:15 AM'
  },
  {
    name: 'Jerry Macleod',
    content: 'Sed consequat, leo eget augue velit',
    date: '11:34 AM'
  }
];

/**
* Attachments Message List
*/
const attachmentsData = [
  {
    icon: 'uil-scenery',
    name: 'Image-1.jpg',
    size: '1.2 MB'
  },
  {
    icon: 'uil-scenery',
    name: 'Image-2.jpg',
    size: '1.3 MB'
  },
  {
    icon: 'uil-folder',
    name: 'Pages changes.zip',
    size: '2.1 MB'
  },
  {
    icon: 'uil-scenery',
    name: 'Image-3.jpg',
    size: '1.2 MB'
  },
];

export { taskList, teamData, messageData, attachmentsData };
