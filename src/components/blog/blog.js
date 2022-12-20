import React from 'react';
import BlogBlock from "./blogBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Blog() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.blog.map((blog, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <BlogBlock image={blog.image} link={blog.link} title={blog.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};