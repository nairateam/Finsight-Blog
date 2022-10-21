import React, { useState } from 'react'
// import Nav from '../components/Header/Navigation'
import './CreatePost.css'
import { db, auth } from '../FirebaseConfig'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router'
import { Editor } from 'react-draft-wysiwyg';
// import './testEditor.css'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function CreatePost({isAuth}) {
    const [title, setTitle] = useState('')
    // const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')
    const [trend, setTrend] = useState('')

    let navigate = useNavigate();
    const postsCollectRef = collection(db, "posts")

    const deliver = async () => {
        await addDoc(postsCollectRef, {title, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}, photo: {image: auth.currentUser.photoURL}, date: serverTimestamp() , content, image, trend, category});
        navigate("/")
    }

    // useEffect(()=>{
    //     if(!isAuth) {
    //         navigate('/login');
    //     }
    // })

  return (
    <>
    <div className='container cp'>
        <h2>Create Post</h2>
        <div className="form_contain">
            {/* <form action=""> */}
                <div className="form_control">
                    <label htmlFor="Title">Title:</label>
                    <input type="text" name="title" id="title" onChange={(e)=>{
                        setTitle(e.target.value);
                        }} />
                </div>
                {/* <div className="form_control">
                    <label htmlFor="Title">Author:</label>
                    <input type="text" name="author" id="author" onChange={(e)=>{
                        setAuthor(e.target.value);
                        }} />
                </div> */}
                <div className="form_control">
                    <label htmlFor="Image">Image (URL):</label>
                    <input type="text" placeholder='https://' name="image" id="image" onChange={(e)=>{
                        setImage(e.target.value);
                        }} />
                </div>
                <div className="form_control">
                    <label htmlFor="Title">Content:</label>
                    <textarea name="content" id="content" onChange={(e)=>{
                        setContent(e.target.value);
                        }} />
                </div>
                {/* <div className="form_control">
                    <label htmlFor="Title">Content:</label>
                    <Editor
    wrapperClassName="wrapper-class"
    editorClassName="editor-class"
    toolbarClassName="toolbar-class"
    id="content" onChange={(e)=>{
        setContent(e.target.value);
    }}
    />
                </div> */}
                <div className="form_control split_control">
                    <div className="control_one">
                        <label htmlFor="Title">Category:</label>
                        <select name='category' id='category' onChange={(e)=>{
                            setCategory(e.target.value);
                            }}>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Fullstack">Fullstack</option>
                            <option value="Mobile App">Mobile App</option>
                            <option value="DevOps">Dev-Ops</option>
                            <option value="Product Design">Product Design</option>
                        </select>
                    </div>
                    <div className="control_two">
                        <p>Should post be featured?</p><br/>
                        <div className="wrap_radio">
                            <input type="radio" value='yes' name="radio" id="radio" checked={trend === 'yes'} onChange={(e)=>{
                            setTrend(e.target.value);
                            }} />
                            <label htmlFor="yes">Yes</label>
                            <input type="radio" value='no' name="radio" id="radio" checked={trend === 'no'} onChange={(e)=>{
                            setTrend(e.target.value);
                            }} />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                </div>
                <div className="form_control">
                    <button onClick={deliver}>Create Post</button>
                </div>
            {/* </form> */}
        </div>
    </div>
    </>

  )
}

export default CreatePost