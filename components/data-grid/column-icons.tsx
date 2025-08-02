import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DataGrid, DataGridContainer } from '@/components/ui/data-grid';
import { DataGridColumnHeader } from '@/components/ui/data-grid-column-header';
import { DataGridPagination } from '@/components/ui/data-grid-pagination';
import { DataGridTable } from '@/components/ui/data-grid-table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Mail, MapPinCheckInside, User, Wallet } from 'lucide-react';

interface IData {
  id: string;
  name: string;
  availability: 'online' | 'away' | 'busy' | 'offline';
  avatar: string;
  status: 'active' | 'inactive';
  flag: string; // Emoji flags
  email: string;
  company: string;
  role: string;
  joined: string;
  location: string;
  balance: number;
}

const demoData: IData[] = [
  {
    id: '1',
    name: 'Kathryn Campbell',
    availability: 'online',
    avatar: '1.png',
    status: 'active',
    flag: '🇺🇸',
    email: 'kathryn@apple.com',
    company: 'Apple',
    role: 'CEO',
    joined: '2021-04-15',
    location: 'San Francisco, USA',
    balance: 5143.03,
  },
  {
    id: '2',
    name: 'Robert Smith',
    availability: 'away',
    avatar: '2.png',
    status: 'inactive',
    flag: '🇬🇧',
    email: 'robert@openai.com',
    company: 'OpenAI',
    role: 'CTO',
    joined: '2020-07-20',
    location: 'London, UK',
    balance: 4321.87,
  },
  {
    id: '3',
    name: 'Sophia Johnson',
    availability: 'busy',
    avatar: '3.png',
    status: 'active',
    flag: '🇨🇦',
    email: 'sophia@meta.com',
    company: 'Meta',
    role: 'Designer',
    joined: '2019-03-12',
    location: 'Toronto, Canada',
    balance: 7654.98,
  },
  {
    id: '4',
    name: 'Lucas Walker',
    availability: 'offline',
    avatar: '4.png',
    status: 'inactive',
    flag: '🇦🇺',
    email: 'lucas@tesla.com',
    company: 'Tesla',
    role: 'Developer',
    joined: '2022-01-18',
    location: 'Sydney, Australia',
    balance: 3456.45,
  },
  {
    id: '5',
    name: 'Emily Davis',
    availability: 'online',
    avatar: '5.png',
    status: 'active',
    flag: '🇩🇪',
    email: 'emily@sap.com',
    company: 'SAP',
    role: 'Lawyer',
    joined: '2023-05-23',
    location: 'Berlin, Germany',
    balance: 9876.54,
  },
  {
    id: '6',
    name: 'James Lee',
    availability: 'away',
    avatar: '6.png',
    status: 'active',
    flag: '🇲🇾',
    email: 'james@keenthemes.com',
    company: 'Keenthemes',
    role: 'Director',
    joined: '2018-11-30',
    location: 'Kuala Lumpur, MY',
    balance: 6214.22,
  },
  {
    id: '7',
    name: 'Isabella Martinez',
    availability: 'busy',
    avatar: '7.png',
    status: 'inactive',
    flag: '🇪🇸',
    email: 'isabella@bbva.es',
    company: 'BBVA',
    role: 'Product Manager',
    joined: '2021-06-14',
    location: 'Barcelona, Spain',
    balance: 5321.77,
  },
  {
    id: '8',
    name: 'Benjamin Harris',
    availability: 'offline',
    avatar: '8.png',
    status: 'active',
    flag: '🇯🇵',
    email: 'benjamin@sony.jp',
    company: 'Sony',
    role: 'Marketing Lead',
    joined: '2020-10-22',
    location: 'Tokyo, Japan',
    balance: 8452.39,
  },
  {
    id: '9',
    name: 'Olivia Brown',
    availability: 'online',
    avatar: '9.png',
    status: 'active',
    flag: '🇫🇷',
    email: 'olivia@lvmh.fr',
    company: 'LVMH',
    role: 'Data Scientist',
    joined: '2019-09-17',
    location: 'Paris, France',
    balance: 7345.1,
  },
  {
    id: '10',
    name: 'Michael Clark',
    availability: 'away',
    avatar: '10.png',
    status: 'inactive',
    flag: '🇮🇹',
    email: 'michael@eni.it',
    company: 'ENI',
    role: 'Engineer',
    joined: '2023-02-11',
    location: 'Milan, Italy',
    balance: 5214.88,
  },
  {
    id: '11',
    name: 'Ava Wilson',
    availability: 'busy',
    avatar: '11.png',
    status: 'active',
    flag: '🇧🇷',
    email: 'ava@vale.br',
    company: 'Vale',
    role: 'Software Engineer',
    joined: '2022-12-01',
    location: 'Rio de Janeiro, Brazil',
    balance: 9421.5,
  },
  {
    id: '12',
    name: 'David Young',
    availability: 'offline',
    avatar: '12.png',
    status: 'active',
    flag: '🇮🇳',
    email: 'david@tata.in',
    company: 'Tata',
    role: 'Sales Manager',
    joined: '2020-03-27',
    location: 'Mumbai, India',
    balance: 4521.67,
  },
];

export default function DataGridDemo() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([{ id: 'name', desc: true }]);

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        accessorKey: 'name',
        id: 'name',
        header: ({ column }) => <DataGridColumnHeader title="User" icon={<User />} column={column} />,
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarImage src={`/media/avatars/${row.original.avatar}`} alt={row.original.name} />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-foreground">{row.original.name}</div>
                <div className="text-muted-foreground">{row.original.email}</div>
              </div>
            </div>
          );
        },
        size: 200,
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: 'email',
        header: ({ column }) => <DataGridColumnHeader title="Email" icon={<Mail />} column={column} />,
        cell: (info) => (
          <Link href={`mailto:${info.getValue()}`} className="hover:text-primary hover:underline">
            {info.getValue() as string}
          </Link>
        ),
        size: 150,
        enableSorting: false,
      },
      {
        accessorKey: 'location',
        header: ({ column }) => <DataGridColumnHeader title="Location" icon={<MapPinCheckInside />} column={column} />,
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-1.5">
              {row.original.flag}
              <div className="font-medium text-foreground">{row.original.location}</div>
            </div>
          );
        },
        size: 170,
        enableSorting: false,
      },
      {
        accessorKey: 'balance',
        header: ({ column }) => <DataGridColumnHeader title="Balance" icon={<Wallet />} column={column} />,
        cell: (info) => <span className="font-semibold">${(info.getValue() as number).toFixed(2)}</span>,
        size: 100,
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
