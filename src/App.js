import { useState, useEffect } from 'react';
import Home from './components/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BlogDetails from './components/Sections/Posts/BlogDetails';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { getDocs, collection } from 'firebase/firestore';
import { db, auth } from './FirebaseConfig'
import { signOut } from 'firebase/auth';
import Nav from './components/Header/Navigation';
import Blogs from './pages/Blogs';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true)
  const postsCollectRef = collection(db, "posts")

  let navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      navigate('/login');
    })
  }

  useEffect(()=>{
    const getPosts = async () => {
      const data = await getDocs(postsCollectRef);
      setBlogs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      setLoading(false)
    };
    getPosts();
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <h1>Finsight: Fetching data</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <Nav isAuth={isAuth} signOutUser={signOutUser} />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} isAuth={isAuth} />} />
        <Route path="blogs/:id" element={<BlogDetails blogs={blogs} />} />
        <Route path="blogs" element={<Blogs blogs={blogs} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
