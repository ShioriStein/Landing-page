import CONSTANTS from "@/constants";

const { ROUTERS, PAGE_NAMES } = CONSTANTS;

const menus = [
  {
    icon: "mdi-comment-quote-outline",
    title: "New Feed",
    link: PAGE_NAMES[ROUTERS.HOME]
  },
  {
    icon: "mdi-comment-quote-outline",
    title: "Feeds Management",
    link: PAGE_NAMES[ROUTERS.FEEDS]
  },
  {
    icon: "mdi-comment-quote-outline",
    title: "My Feeds Management",
    link: PAGE_NAMES[ROUTERS.MY_POSTS]
  },
  {
    icon: "mdi-account-outline",
    title: "Employee",
    link: PAGE_NAMES[ROUTERS.EMPLOYEES]
  },
  {
    icon: "mdi-file-document-box-outline",
    title: "Department",
    link: PAGE_NAMES[ROUTERS.DEPARTMENTS]
  },
  {
    icon: "mdi-calendar-check-outline",
    title: "Calendar",
    link: "Calendar"
  },
  {
    icon: "mdi-message-outline",
    title: "Chat",
    link: "Chat"
  },
  {
    icon: "mdi-zip-disk",
    title: "Report",
    link: "Report"
  },
  {
    icon: "mdi-account-group-outline",
    title: "Role",
    link: PAGE_NAMES[ROUTERS.ROLES]
  },
  {
    icon: "mdi-account-group-outline",
    title: "Tasks Management",
    link: PAGE_NAMES[ROUTERS.TASK_MANAGEMENT]
  },
  {
    icon: "mdi-account-group-outline",
    title: "My Tasks",
    link: PAGE_NAMES[ROUTERS.MY_TASK]
  },
  {
    icon: "mdi-folder",
    title: "My Drives",
    link: PAGE_NAMES[ROUTERS.DRIVES]
  },
  {
    icon: "mdi-folder",
    title: "Company Drives",
    link: PAGE_NAMES[ROUTERS.DRIVES_COMPANY]
  }
];

export default menus;
