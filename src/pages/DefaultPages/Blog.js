import React, {useEffect} from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import Banner from '../../components/HomeComponents/BlogComponents/Banner'
import BlogContant from '../../components/HomeComponents/BlogComponents/BlogContant'
import {useDispatch, useSelector} from "react-redux";
import {blogGetAction} from "./redux/blog/blog.actions";
function Blog() {
    let count = 0;
    const blogStateData = useSelector(
        (state) => state.blogState
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if(count == 0)
            { setTimeout(()=>{
                dispatch(blogGetAction());
                count = count + 1;
            },500)
        }
    }, [count]);
  return (
    <div> 
        <DefaultLayout>
            <Banner slider={blogStateData.blogData?.data?.slider} loading={blogStateData.loading} />
            <BlogContant blog={blogStateData.blogData?.data?.blog} archives={blogStateData.blogData?.data?.archives} loading={blogStateData.loading}  />
        </DefaultLayout> 
    </div>
  )
}

export default Blog
