import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridPaginationModel } from '@mui/x-data-grid';
import { columns } from '../../constants/customList';
import { ListUser } from '../../types/User';
import { useNavigate } from 'react-router-dom';
import config from '../../config/config';

const ListDataUser: React.FC<ListUser> = ({ listDataUser, limit }) => {
    const navigate = useNavigate();
    const row =
        listDataUser &&
        listDataUser.map((el: any, i: number) => {
            return {
                id: i + 1,
                picture: el.picture.thumbnail,
                fullName: `${el.name.title} ${el.name.first} ${el.name.last}`,
                userName: el.login.username
            };
        });
    const [pages, setPages] = React.useState(0);
    return (
        <Box sx={{ height: 650, width: 'fit-content' }}>
            <DataGrid
                rows={row}
                rowCount={100}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: limit,
                            page: pages
                        }
                    }
                }}
                paginationMode='server'
                onPaginationModelChange={(params: GridPaginationModel) => {
                    setPages(params.page);
                    navigate(`${config.routes.listUser}?page=${params.page}`);
                }}
                pageSizeOptions={[limit]}
            />
        </Box>
    );
};

export default ListDataUser;
