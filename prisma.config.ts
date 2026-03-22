import path from "path";

export default {
  schema: "prisma/schema.prisma",
  datasource: {
    url: "file:./dev.db",
  },
};