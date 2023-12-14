import CardList from "../components/Post/CardList";
import ViewUserButton from "../components/Post/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = async () => {
  const response = await fetch(base_url);
  const posts: Iposts[] = await response.json();

  return (
    <>
      <div className="text-fuchsia-500 text-3xl">Post</div>
      {posts.map((post) => (
        <div key={post.id}>
          <CardList>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        </div>
      ))}
    </>
  );
};

export default Post;
