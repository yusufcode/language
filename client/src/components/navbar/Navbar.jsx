import React, { useState } from 'react'
import { MainContext, useContext } from '../../context'
import { Navbar, Button, Menu, Ul, Li} from './css'
import MenuIcon from '@mui/icons-material/Menu';

export default function NavbarFunc() {

  const [showMenu, setShowMenu] = useState(1)

  const {
    setScreenSelectLanguage, 
    setScreenSelectStudyType,
    setScreenSelectCategory,
    setScreenTest,
    setScreenTestFinished,
    firstLanguage, 
    secondLanguage, 
    studyType,
    category
  } = useContext(MainContext)

  function changeScreen(selectedScreen){

    if(selectedScreen == 'selectLanguage'){
      setScreenSelectLanguage(1)
      setScreenSelectStudyType(0)
      setScreenSelectCategory(0)
      setScreenTest(0)
      setScreenTestFinished(0)
    } else if (selectedScreen == 'selectStudyType'){
      setScreenSelectLanguage(0)
      setScreenSelectStudyType(1)
      setScreenSelectCategory(0)
      setScreenTest(0)
      setScreenTestFinished(0)
    } else if (selectedScreen == 'selectCategory'){
      setScreenSelectLanguage(0)
      setScreenSelectStudyType(0)
      setScreenSelectCategory(1)
      setScreenTest(0)
      setScreenTestFinished(0)
    }
    
  }
  
  return (
    <Navbar>
      <Button onClick={() => setShowMenu(!showMenu)}><MenuIcon/></Button>
      {
        showMenu ?
        <Menu>
          <Ul>
            {
              firstLanguage && secondLanguage ?
              <Li onClick={() => changeScreen('selectLanguage')}>Language</Li>
              : false
            }
            {
              studyType ?
              <Li onClick={() => changeScreen('selectStudyType')}>Study Type</Li>
              : false
            }
            {
              category ?
              <Li onClick={() => changeScreen('selectCategory')}>Category</Li>
              : false
            }
          </Ul>
        </Menu>
        : false
      }
    </Navbar>
  )
}
