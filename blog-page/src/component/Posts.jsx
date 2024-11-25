
import { PostData } from "../data/PostData";

export const Posts = () => {

  console.log("aaa");
return (

<>
{PostData.map((post)=> {
  return(
    <div>{post.title}</div>
  );
})}

  <p>aaaa</p>
</>
);

}