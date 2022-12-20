import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function BlogBlock(props) {
   const {image, link, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'blog Image'}  sx={{width:500}}/>
         <h1 style={{fontSize: '2rem',maxWidth:500}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={link} title={'Read'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default BlogBlock;