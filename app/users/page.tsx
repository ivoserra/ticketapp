import UserForm from "@/components/UserForm";
import React from "react";
import DataTableSimple from "./data-table-simple";
import prisma from "@/prisma/db";

const Users = async () => {
  const users = await prisma.user.findMany();

  if (!users) {
    console.log("no users");
  }

  return (
    <div>
      <UserForm />
      <DataTableSimple users={users} />
    </div>
  );
};

export default Users;
