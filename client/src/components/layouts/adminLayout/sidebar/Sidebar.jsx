import React from 'react'
import {Sidebar, Ul, Li, StyledLink} from './css'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';

export default function SidebarFunc() {
  return (
    <Sidebar>
      <Ul>
        <Li><StyledLink to="/admin"><HomeIcon/> Home</StyledLink></Li>
        <Li><StyledLink to="/admin/add-word"><AddIcon/> Add Word</StyledLink></Li>
        <Li><StyledLink to="/admin/add-word-multiple"><AddIcon/> Add Word (Multiple)</StyledLink></Li>
        <Li><StyledLink to="/admin/list-word"><ListIcon/> List Word</StyledLink></Li>
        <Li><StyledLink to="/admin/add-category"><AddIcon/> Add Category</StyledLink></Li>
        <Li><StyledLink to="/admin/list-category"><ListIcon/> List Category</StyledLink></Li>
      </Ul>
    </Sidebar>
  )
}
