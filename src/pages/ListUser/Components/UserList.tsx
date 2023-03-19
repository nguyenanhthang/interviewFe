import React from 'react';
import ListDataUser from '../../../components/CustomList/ListDataUser';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../../apis/ListUserApi';
import { useQueryString } from '../../../hook/useQueryString';
import Box from '@mui/material/Box';

const UserList = () => {
    const queryString: { page?: string } = useQueryString();
    const page = Number(queryString.page) || 0;
    const limit = 10;
    const ListUser = useQuery({
        queryKey: ['users', page],
        queryFn: () => getUsers(page, limit),
        staleTime: 60 * 1000,
        cacheTime: 3600 * 1000
    });
    return (
        <Box>
            <ListDataUser listDataUser={(!ListUser.isLoading && ListUser.data?.data?.results) || []} limit={limit} />
        </Box>
    );
};

export default UserList;
