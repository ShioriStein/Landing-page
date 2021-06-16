export default {
  hasPermission: ({ permissions, roles }) => permission => {
    return (
      permissions.some(el => el === permission) || roles.includes("SupperAdmin")
    );
  }
};
