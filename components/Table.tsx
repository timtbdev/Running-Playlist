"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DataGrid, DataGridContainer } from "@/components/ui/data-grid";
import { DataGridColumnHeader } from "@/components/ui/data-grid-column-header";
import { DataGridPagination } from "@/components/ui/data-grid-pagination";
import { DataGridTable } from "@/components/ui/data-grid-table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Activity,
  LinkIcon,
  Mail,
  MapPinCheckInside,
  Music,
  User,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

interface IData {
  id: string;
  music: string;
  artist: string;
  addedBy: string;
  bpm: string;
  link: string;
}

const demoData: IData[] = [
  {
    id: "1",
    music: "Bohemian Rhapsody",
    artist: "Queen",
    addedBy: "John Smith",
    bpm: "120",
    link: "https://www.spotify.com/track/1",
  },
  {
    id: "2",
    music: "Hotel California",
    artist: "Eagles",
    addedBy: "Sarah Johnson",
    bpm: "75",
    link: "https://www.spotify.com/track/2",
  },
  {
    id: "3",
    music: "Stairway to Heaven",
    artist: "Led Zeppelin",
    addedBy: "Mike Wilson",
    bpm: "63",
    link: "https://www.spotify.com/track/3",
  },
  {
    id: "4",
    music: "Imagine",
    artist: "John Lennon",
    addedBy: "Lisa Davis",
    bpm: "76",
    link: "https://www.spotify.com/track/4",
  },
  {
    id: "5",
    music: "Yesterday",
    artist: "The Beatles",
    addedBy: "Tom Brown",
    bpm: "95",
    link: "https://www.spotify.com/track/5",
  },
  {
    id: "6",
    music: "Hey Jude",
    artist: "The Beatles",
    addedBy: "Emma Wilson",
    bpm: "73",
    link: "https://www.spotify.com/track/6",
  },
  {
    id: "7",
    music: "Let It Be",
    artist: "The Beatles",
    addedBy: "David Lee",
    bpm: "79",
    link: "https://www.spotify.com/track/7",
  },
  {
    id: "8",
    music: "Wonderwall",
    artist: "Oasis",
    addedBy: "Anna Garcia",
    bpm: "87",
    link: "https://www.spotify.com/track/8",
  },
  {
    id: "9",
    music: "Creep",
    artist: "Radiohead",
    addedBy: "Chris Martin",
    bpm: "92",
    link: "https://www.spotify.com/track/9",
  },
  {
    id: "10",
    music: "Smells Like Teen Spirit",
    artist: "Nirvana",
    addedBy: "Kurt Cobain",
    bpm: "117",
    link: "https://www.spotify.com/track/10",
  },
];

export default function DataGridDemo() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: "music", desc: false },
  ]);

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        accessorKey: "music",
        id: "music",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Music"
            icon={<Music />}
            column={column}
          />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarImage
                  src={`/media/avatars/${row.original.id}.png`}
                  alt={row.original.music}
                />
                <AvatarFallback>{row.original.music.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-foreground font-medium">
                  {row.original.music}
                </div>
                <div className="text-muted-foreground">
                  {row.original.addedBy}
                </div>
              </div>
            </div>
          );
        },
        size: 200,
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: "addedBy",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Added by"
            icon={<User />}
            column={column}
          />
        ),
        cell: (info) => (
          <Link
            href={`mailto:${info.getValue()}@example.com`}
            className="hover:text-primary hover:underline"
          >
            {info.getValue() as string}
          </Link>
        ),
        size: 150,
        enableSorting: true,
      },
      {
        accessorKey: "bpm",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="BPM"
            icon={<Activity />}
            column={column}
          />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-1.5">
              <div className="text-foreground font-medium">
                {row.original.bpm} BPM
              </div>
            </div>
          );
        },
        size: 100,
        enableSorting: true,
      },
      {
        accessorKey: "link",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Link"
            icon={<LinkIcon className="size-4" />}
            column={column}
          />
        ),
        cell: (info) => (
          <Link
            href={info.getValue() as string}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:underline"
          >
            Link
          </Link>
        ),
        size: 80,
        enableSorting: false,
      },
    ],
    [],
  );

  const table = useReactTable({
    columns,
    data: demoData,
    pageCount: Math.ceil((demoData?.length || 0) / pagination.pageSize),
    getRowId: (row: IData) => row.id,
    state: {
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <DataGrid table={table} recordCount={demoData?.length || 0}>
      <div className="w-full space-y-2.5">
        <DataGridContainer>
          <ScrollArea>
            <DataGridTable />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </DataGridContainer>
        <DataGridPagination />
      </div>
    </DataGrid>
  );
}
