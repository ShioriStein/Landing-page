import CONSTANTS from "@/constants";

const { PAGE_NAMES, ROUTERS } = CONSTANTS;

const menuItems = [
  {
    icon: "mdi-comment-quote-outline",
    title: "New Feeds",
    to: {
      name: PAGE_NAMES[ROUTERS.HOME]
    }
  },
  {
    icon: "mdi-cogs",
    title: "Management",
    children: [
      {
        icon: "mdi-comment-quote-outline",
        title: "Feeds",
        to: {
          name: PAGE_NAMES[ROUTERS.ALL_POSTS]
        }
      },
      {
        icon: "mdi-comment-quote-outline",
        title: "My Feeds",
        to: {
          name: PAGE_NAMES[ROUTERS.MY_POSTS]
        }
      },
      {
        icon: "mdi-account-outline",
        title: "Employees",
        to: { name: PAGE_NAMES[ROUTERS.EMPLOYEES] }
      },
      {
        icon: "mdi-file-document-box-outline",
        title: "Departments",
        to: { name: PAGE_NAMES[ROUTERS.DEPARTMENTS] }
      },
      {
        icon: "mdi-account-group-outline",
        title: "Roles",
        to: { name: PAGE_NAMES[ROUTERS.ROLES] }
      },
      {
        icon: "mdi-file-tree",
        title: "Tasks",
        to: { name: PAGE_NAMES[ROUTERS.TASK_MANAGEMENT] }
      },
      {
        icon: "mdi-file-tree",
        title: "My Tasks",
        to: { name: PAGE_NAMES[ROUTERS.MY_TASK] }
      },
      {
        icon: "mdi-calendar-month-outline",
        title: "Calendar",
        to: { name: PAGE_NAMES[ROUTERS.CALENDAR] }
      },
      {
        icon: "mdi-calendar-month-outline",
        title: "Work times",
        to: { name: PAGE_NAMES[ROUTERS.WORK_TIMES] }
      }
    ]
  },
  {
    icon: "mdi-comment-quote-outline",
    title: "Chat",
    to: {
      name: PAGE_NAMES[ROUTERS.CHAT]
    }
  },
  {
    icon: "mdi-folder",
    title: "Drives",
    children: [
      {
        icon: "mdi-folder-account",
        title: "My Drives",
        to: { name: PAGE_NAMES[ROUTERS.DRIVES] }
      },
      {
        icon: "mdi-folder-network",
        title: "Company Drives",
        to: { name: PAGE_NAMES[ROUTERS.DRIVES_COMPANY] }
      },
      {
        icon: "mdi-folder-sync",
        title: "Share Drives",
        to: { name: PAGE_NAMES[ROUTERS.DRIVES_SHARE] }
      },
      {
        icon: "mdi-delete",
        title: "Trash Drives",
        to: { name: PAGE_NAMES[ROUTERS.DRIVES_TRASH] }
      }
    ]
  }
];

export default menuItems;
