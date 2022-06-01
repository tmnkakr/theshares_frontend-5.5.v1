import React from "react";

import {Routes,Route} from 'react-router-dom'
import EditorPage from './components/editor/classbased/editorPage'
import LoginPage from './components/panel/articleverficationpanel/classbased/loginPage'
import HomePageForArticalVerificationPanel from './components/panel/articleverficationpanel/classbased/homePage'
import ArticlePageForArticalVerificationPanel from './components/panel/articleverficationpanel/classbased/articlePage'
import axios from "axios";
import SavedArticles from './components/panel/articleverficationpanel/classbased/SavedArticles/SavedArticles';
import PublishArticle from './components/panel/articleverficationpanel/classbased/PublishArticle/PublishArticle';
import PublishedArticles from './components/panel/articleverficationpanel/classbased/PublishedArticles/PublishedArticles';
import VerificationPannel from './components/panel/articleverficationpanel/classbased/VeriFicationPannel/VerificationPannel';
import PanelArticle
    from './components/panel/articleverficationpanel/classbased/PanelArticle/PanelArticle';
import Article from './components/panel/articleverficationpanel/classbased/Article/Article';
axios.defaults.withCredentials = true
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authorised: JSON.parse(localStorage.getItem("authorized")) ?? false,
      adminId: parseInt(JSON.parse(localStorage.getItem("adminId"))) ?? undefined,
      extras:{}
    }
  }

 
  
  componentDidUpdate(prevProps, prevState) {
    // Persist authorized state changes to localStorage
    if (prevState.authroised !== this.state.authorised) {
      console.log('changed')
      localStorage.setItem("authorized", JSON.stringify(this.state.authorised));
      localStorage.setItem("adminId", JSON.stringify(this.state.adminId));
    }
  }
  authorizeUser = (authorizeState,adminId) => {
    this.setState({
      authorised:authorizeState,
      adminId:adminId
    })
  }
  render() {
    return (
      <>
        {/* <Routes>
            <Route path='/editor' element={<EditorPage />} />
            <Route path='/saved' element={<SavedArticles />} />
            <Route path='/publish' element={<PublishArticle />} />
            <Route path='/verificationpannel' element={<VerificationPannel />} />
            <Route path='/published' element={<PublishedArticles />} />
            <Route path='/panelarticle' element={<PanelArticle />} />
            <Route path='/article' element={<Article />} />
            <Route path='/' element={<LoginPage authorizeUser={this.authorizeUser}/>} />
            <Route path='/panel/articleverification/homepage' element={<HomePageForArticalVerificationPanel authorized={this.state.authorised}/>} />
            <Route path='/panel/articleverification/articlepage' element={<ArticlePageForArticalVerificationPanel authorized={this.state.authorised} adminId={this.state.adminId}/>} />

        </Routes> */}
        ji
      </>
    );
  }
}
export default App;
