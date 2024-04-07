"use client";
import Card from "@/components/modules/HomePage/Card";
import Loader from "@/components/sheared/Loader";
import { filterPosts } from "@/helpers/filterPostsByCategory";
import { allPosts } from "@/reactQuery/Queries";
import { signInErrorTost } from "@/utils/tostErrors";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const Category: React.FC = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allPosts"],
    queryFn: allPosts,
  });
  const posts = data?.data?.posts;
  if (isError) return signInErrorTost();
  const postsData = filterPosts(posts, categoryId);

  return (
    <>
      {isLoading && <Loader width="60" height="60" color="#374151" />}
      {postsData?.length === 0 ? (
        <div
          style={{
            width: "100vw",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "20px" }}>هیچ آگهی برای نمایش وجود ندارد!</p>
        </div>
      ) : (
        postsData?.map((post: any) => <Card key={post._id} post={post} />)
      )}
    </>
  );
};

export default Category;
