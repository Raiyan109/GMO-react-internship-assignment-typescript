// components/PostTable.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Post from '../models/Post';

const PostTable: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userId', headerName: 'User ID', width: 100 },
        { field: 'title', headerName: 'Title', flex: 1 },
        { field: 'body', headerName: 'Body', flex: 1 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={posts}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
            />
        </div>
    );
};

export default PostTable;
