const STATUS = {
  APPROVED: "Approved",
  REJECTED: "Rejected",
  PENDING: "Pending"
};

const { APPROVED, REJECTED, PENDING } = STATUS;

const POSTS = {
  [APPROVED]: "success",
  [REJECTED]: "error",
  [PENDING]: "primary"
};

export default POSTS;
