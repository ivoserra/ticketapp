import TicketPriority from "@/components/TicketPriority";
import TicketStatusBadge from "@/components/TicketStatusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ticket } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { SearchParams } from "./page";

interface PropsDataTable {
  tickets: Ticket[];
  searchParams: SearchParams;
}

const DataTable = ({ tickets, searchParams }: PropsDataTable) => {
  console.log("tickets -> dataTable", tickets);

  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Link
                  href={{
                    query: {
                      ...searchParams,
                      orderBy: "title",
                      sortDir: searchParams.sortDir === "asc" ? "desc" : "asc",
                    },
                  }}
                >
                  Title
                  {"title" === searchParams.orderBy &&
                    (searchParams.sortDir === "asc" ? (
                      <ArrowUp className="inline p-1" />
                    ) : (
                      <ArrowDown className="inline p-1" />
                    ))}
                </Link>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <Link
                    href={{
                      query: {
                        ...searchParams,
                        orderBy: "status",
                        sortDir:
                          searchParams.sortDir === "asc" ? "desc" : "asc",
                      },
                    }}
                  >
                    Status
                    {"status" === searchParams.orderBy &&
                      (searchParams.sortDir === "asc" ? (
                        <ArrowUp className="inline p-1" />
                      ) : (
                        <ArrowDown className="inline p-1" />
                      ))}
                  </Link>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <Link
                    href={{
                      query: {
                        ...searchParams,
                        orderBy: "priority",
                        sortDir:
                          searchParams.sortDir === "asc" ? "desc" : "asc",
                      },
                    }}
                  >
                    Priority
                    {"priority" === searchParams.orderBy &&
                      (searchParams.sortDir === "asc" ? (
                        <ArrowUp className="inline p-1" />
                      ) : (
                        <ArrowDown className="inline p-1" />
                      ))}
                  </Link>
                </div>
              </TableHead>
              <TableHead>
                <Link
                  href={{
                    query: {
                      ...searchParams,
                      orderBy: "createdAt",
                      sortDir: searchParams.sortDir === "asc" ? "desc" : "asc",
                    },
                  }}
                >
                  CreatedAt
                  {"createdAt" === searchParams.orderBy &&
                    (searchParams.sortDir === "asc" ? (
                      <ArrowUp className="inline p-1" />
                    ) : (
                      <ArrowDown className="inline p-1" />
                    ))}
                </Link>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map((item) => (
                  <TableRow key={item.id} data-href="/">
                    <TableCell>
                      <Link href={`/tickets/${item.id}`}>{item.title}</Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <TicketStatusBadge status={item.status} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <TicketPriority priority={item.priority} />
                      </div>
                    </TableCell>
                    <TableCell>
                      {item.createdAt.toLocaleDateString("en-US", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
