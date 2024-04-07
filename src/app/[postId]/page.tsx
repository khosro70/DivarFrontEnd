import { Box, Divider, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import { paramsInterface } from "@/Types/Contracts";
import { convertToJalali } from "@/helpers/dateStringToJalali";
import { eTpWithComma } from "@/helpers/etp";

const PostDetails: NextPage<paramsInterface> = async (params) => {
  const postId = params.params.postId;
  async function getData() {
    const postRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
      cache: "no-cache",
    });
    if (postRes.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const postData = await postRes.json();
    return { postData };
  }
  const data = await getData();
  const postData = data.postData.posts.find((post: any) => post._id === postId);
  console.log(postData);

  return (
    <Grid container display="flex" maxWidth="md" margin="auto" spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography
          component="p"
          variant="h6"
          fontWeight="bold"
          textAlign="center"
        >
          {postData.options.title}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{ marginTop: "15px" }}
        >
          <Box display="flex" justifyContent="start" gap={1}>
            <FmdGoodOutlinedIcon sx={{ color: "red" }} />
            <Typography>
              <span style={{ fontWeight: "bold" }}>شهر</span>:
              {postData.options.city}
            </Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="start" gap={1}>
            <DateRangeIcon sx={{ color: "green" }} />
            <Typography>
              <span style={{ fontWeight: "bold" }}>آگهی شده در تاریخ</span> :
              {convertToJalali(postData.createdAt)}
            </Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="start" gap={1}>
            <AttachMoneyIcon sx={{ color: "brown" }} />
            <Typography>
              <span style={{ fontWeight: "bold" }}>قیمت</span> :{" "}
              {eTpWithComma(postData.amount)}
            </Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="start" gap={1}>
            <DescriptionIcon sx={{ color: "purple" }} />
            <Typography textAlign="justify">
              <span style={{ fontWeight: "bold" }}>توضیحات</span>:
              {postData.options.content
                ? postData.options.content
                : "توضیحات وجود ندارد"}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Image
          src="/images/postimagedivar.jpg"
          alt="تصویر محصول"
          width={500}
          height={500}
        />
      </Grid>
    </Grid>
  );
};

export default PostDetails;
