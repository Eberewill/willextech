import Image from "next/image";
import { PostType } from "../types/PostType";
import { CommentIcon, LikeIcon } from "./icons";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <a
      href={`https://blog.avneesh.tech/${post.slug}`}
      key={post._id}
      target="_blank"
      rel="noreferrer"
      className="relative m-5 flex flex-col my-5 mt-5 rounded-lg md:mb-0 md:mx-5 w-96 dark:bg-darkerblue"
    >
      {post.coverImage && (
        <Image
          objectFit="cover"
          width={1500}
          height={786}
          className="rounded-lg"
          src={post.coverImage}
          alt={post.title}
        />
      )}

      <div className="flex flex-col p-4 pb-0">
        <h2 className="text-2xl font-semibold text-neongreen">{post.title}</h2>
        <p className="text-base break-words text-text mt-4">{post.brief}</p>
      </div>
      <div className="flex justify-between w-full p-4 mt-auto">
        <div className="flex">
          <LikeIcon className="w-6 h-6 mr-2 fill-current text-text" />
          <p className="text-text">{post.totalReactions}</p>
        </div>
        <div className="flex">
          <CommentIcon className="w-6 h-6 mr-2 fill-current text-text" />
          <p className="text-text">{post.replyCount + post.responseCount}</p>
        </div>
      </div>
    </a>
  );
};

export default Post;
