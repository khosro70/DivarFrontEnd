import * as yup from "yup";
export const SignInFormschema = yup.object().shape({
  phone: yup
    .string()
    .required("شماره تلفن الزامی است")
    .matches(
      /^(?:0|\+98|0098)?9[0-9]{9}$/,
      "شماره تلفن همراه وارد شده معتبر نیست"
    ),
});

export const VerifyCodeFormschema = yup.object().shape({
  code: yup
    .string()
    .required("ورود کد الزامی است")
    .matches(/^\d{5}$/, "کد ارسال شده یک عدد 5 رقمی است"),
});

export const CreateCategoryFormschema = yup.object().shape({
  name: yup.string().required("وارد کردن نام دسته بندی الزامی است"),
  icon: yup.string().required("وارد کردن آیکن الزامی است"),
  slug: yup.string(),
});

export const AddPostFormSchema = yup.object().shape({
  title: yup.string().required("عنوان الزامی است"),
  amount: yup
    .string()
    .matches(/^\d+$/, "قیمت باید عددی باشد")
    .required("قیمت الزامی است"),
  city: yup.string().required("شهر الزامی است"),
  category: yup.string().required("دسته بندی الزامی است"),
  images: yup.mixed().required("آپلود عکس الزامی است"),
  content: yup.string().required("افزودن توضیحات الزامی است"),
});
