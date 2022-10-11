
import React, { useCallback, useState } from "react"
import { createPost } from "../../store/features/posts/functions"
import { IPost } from "../../store/features/posts/model"
import { useAppDispatch } from "../../store/hook"

const CreatePost = () => {
    const dispatch = useAppDispatch()
    const [newPost, setNewPost] = useState<IPost>({
        body: '',
        id: Math.random(),
        title: '',
        userId: Math.random()
    })
    const handleAddPost = useCallback(() => {
        dispatch(createPost(newPost))
    }, [newPost, dispatch])

    const handleChangeNewPost = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div>
            <div>
                <input
                    name='title'
                    type="text"
                    placeholder="post title"
                    value={newPost.title}
                    onChange={handleChangeNewPost}
                />
            </div>
            <div>
                <input
                    name='body'
                    type="text"
                    placeholder="post body"
                    value={newPost.body}
                    onChange={handleChangeNewPost}
                />
            </div>


            <button onClick={handleAddPost}>Create Post</button>
        </div>
    )
}

export default CreatePost