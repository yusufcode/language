import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {MainContext} from './context'
import { toast } from 'react-toastify';

import HomePage from './pages/improveLanguage/home'
import AdminLayout from './components/layouts/adminLayout'
import AdminHomePage from './pages/admin/home'
import AdminAddWordPage from './pages/admin/addWord'
import AdminAddWordMultiplePage from './pages/admin/addWordMultiple/AddWordMultiple'
import AdminListWordPage from './pages/admin/listWord'
import AdminAddCategoryPage from './pages/admin/addCategory'
import AdminAddCategoryMultiplePage from './pages/admin/addCategoryMultiple'
import AdminListCategoryPage from './pages/admin/listCategory'


function App() {

  const [screenSelectLanguage, setScreenSelectLanguage] = useState(1)
  const [screenSelectStudyType, setScreenSelectStudyType] = useState(0)
  const [screenSelectCategory, setScreenSelectCategory] = useState(0)
  const [screenTest, setScreenTest] = useState(0)
  const [screenTestFinished, setScreenTestFinished] = useState(0)

  const [firstLanguage, setFirstLanguage] = useState('')
  const [secondLanguage, setSecondLanguage] = useState('')

  const [studyType, setStudyType] = useState('')

  const [category, setCategory] = useState()

  const [allWords, setAllWords] = useState()
  const [neverAskedWords, setNeverAskedWords] = useState()

  function notification(status, message){
    if(status === 'success'){
      toast.success(`Success! ${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false
      })
    } else if(status === 'error'){
      toast.error(`Error! ${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false
      })
    }
  }

  const data = {
    screenSelectLanguage, setScreenSelectLanguage,
    screenSelectStudyType, setScreenSelectStudyType,
    screenSelectCategory, setScreenSelectCategory,
    screenTest, setScreenTest,
    screenTestFinished, setScreenTestFinished,
    notification,
    firstLanguage, setFirstLanguage,
    secondLanguage, setSecondLanguage,
    studyType, setStudyType,
    category, setCategory,
    allWords, setAllWords,
    neverAskedWords, setNeverAskedWords
  }
  
  return (
    <MainContext.Provider value={data}>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/admin" exact element={<AdminLayout><AdminHomePage/></AdminLayout>} />

          <Route path="/admin/add-word" element={<AdminLayout><AdminAddWordPage/></AdminLayout>} />
          <Route path="/admin/add-word-multiple" element={<AdminLayout><AdminAddWordMultiplePage/></AdminLayout>} />
          <Route path="/admin/list-word" element={<AdminLayout><AdminListWordPage/></AdminLayout>} />

          <Route path="/admin/add-category" element={<AdminLayout><AdminAddCategoryPage/></AdminLayout>} />
          <Route path="/admin/add-category-multiple" element={<AdminLayout><AdminAddCategoryMultiplePage/></AdminLayout>} />
          <Route path="/admin/list-category" element={<AdminLayout><AdminListCategoryPage/></AdminLayout>} />
          </Routes>
      </Router>
    </MainContext.Provider>
  );
}

export default App;
