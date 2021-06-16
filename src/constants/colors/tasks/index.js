const STATUS = {
  PROCESSING: "Processing",
  OVER_DATE: "Over date",
  COMPLETE: "Complete"
};

const { PROCESSING, OVER_DATE, COMPLETE } = STATUS;

const COLORS = {
  [COMPLETE]: "success",
  [OVER_DATE]: "error",
  [PROCESSING]: "primary"
};

const TASKS = {
  STATUS,
  COLORS
};

export default TASKS;
