import Card from "@/components/modules/HomePage/Card";
import HomeSidebar from "@/components/modules/HomePage/HomeSidebar";
import { Grid } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = async () => {
  async function getData() {
    const postsRes = await fetch("http://localhost:3400", {
      cache: "no-cache",
    });
    const categoriesRes = await fetch("http://localhost:3400/category", {
      cache: "force-cache",
    });
    if (postsRes.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const postsData = await postsRes.json();
    const categoris = await categoriesRes.json();
    return { postsData, categoris };
  }
  const data = await getData();
  // console.log(data.posts[0]);
  return (
    <Grid container display="flex" spacing={2} marginTop={3}>
      <HomeSidebar categories={data.categoris} />
      <Grid item container spacing={2} sm={12} md={9} lg={10}>
        {data.postsData.posts.map((post: any) => (
          <Card key={post._id} post={post} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
