import { Avatar } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
export const columns: GridColDef[] = [
    {
        field: 'picture',
        headerName: 'Picture',
        sortable: false,
        width: 100,
        renderCell: (params) => {
            return (
                <>
                    <Avatar src={params.row.picture} />
                </>
            );
        }
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: true,
        width: 200
    },
    {
        field: 'userName',
        headerName: 'User Name',
        sortable: true,
        width: 200
    }
];
