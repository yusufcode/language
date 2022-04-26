import React from 'react'
import {Sidebar, Ul, Dropdown, DropdownHeader, DropdownHeaderTitle, DownIconStyled, DropdownBody, LinkStyled} from './css'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import AddMultipleIcon from '@mui/icons-material/AddCommentOutlined';
import ListIcon from '@mui/icons-material/ListAltOutlined';

function toggleDropdown(e){
  const dropdown = e.target.closest(Dropdown)

  if(!dropdown.classList.contains('drop')){
    dropdown.classList.add('drop')
  } else{
    dropdown.classList.remove('drop')
  }
}

export default function SidebarFunc() {
  return (
    <Sidebar>
      <Ul>
        <Dropdown>
          <DropdownHeader className='dropdownHeader' onClick={(e)=>toggleDropdown(e)}>
            <DropdownHeaderTitle>Main</DropdownHeaderTitle>
            <DownIconStyled/>
          </DropdownHeader>
          <DropdownBody className='dropdownBody'>
            <LinkStyled to="/admin"><HomeIcon/>Home</LinkStyled>
          </DropdownBody>
        </Dropdown>

        <Dropdown>
          <DropdownHeader className='dropdownHeader' onClick={(e)=>toggleDropdown(e)}>
            <DropdownHeaderTitle>Word</DropdownHeaderTitle>
            <DownIconStyled/>
          </DropdownHeader>
          <DropdownBody className='dropdownBody'>
            <LinkStyled to="/admin/add-word"><AddIcon/>Add Word</LinkStyled>
            <LinkStyled to="/admin/add-word-multiple"><AddMultipleIcon/>Add Word (Multiple)</LinkStyled>
            <LinkStyled to="/admin/list-word"><ListIcon/>List Word</LinkStyled>
          </DropdownBody>
        </Dropdown>

        <Dropdown>
          <DropdownHeader className='dropdownHeader' onClick={(e)=>toggleDropdown(e)}>
            <DropdownHeaderTitle>Category</DropdownHeaderTitle>
            <DownIconStyled/>
          </DropdownHeader>
          <DropdownBody className='dropdownBody'>
            <LinkStyled to="/admin/add-category"><AddIcon/>Add Category</LinkStyled>
            <LinkStyled to="/admin/add-category-multiple"><AddMultipleIcon/>Add Category (Multiple)</LinkStyled>
            <LinkStyled to="/admin/list-category"><ListIcon/>List Category</LinkStyled>
          </DropdownBody>
        </Dropdown>

      </Ul>
    </Sidebar>
  )
}
