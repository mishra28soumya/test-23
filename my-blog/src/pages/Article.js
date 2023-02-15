import React, {useState, useEffect} from "react";
import articles from "./article-content";
import MyArticles from "../components/Articles.js";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { CommentsList } from "../components/CommentsList";
import { AddCommentForm } from "../components/AddCommentForm";

const Articles = () => {
  const params = useParams();
  const article = articles.find((article) => article.name === params.name);
  
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
      const fetchData = async () => {
        axios.get(`http://localhost:5001/api/article/${params.name}`).then(result => { 
          const data = result.data;
          console.log(data);
          setArticleInfo(data);
      });
      };
      fetchData();
  }, [params.name]);

  if(!article) return <h1>Article does not exist</h1>;

  const otherArticles = articles.filter((article) => article.name !== params.name);
  return (
<>
      <div className="mb-20">
        <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
          {article.title}
        </h1>
        {article.content.map((paragraph, index) =>
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
            {paragraph}
        </p>
      )}
      <AddCommentForm articleName={params} setArticleInfo={setArticleInfo}/>
      <CommentsList comments={articleInfo.comments} />
      <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">
        Other Articles:
      </h1>
      <div className="flex flex-wrap -m-4">
        <MyArticles articles={otherArticles} />
      </div>
      </div> 
</>
   
  );
};

export default Articles;