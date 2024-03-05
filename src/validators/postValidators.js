import * as yup from "yup";
export const postSchema = yup.object().shape({
  Content: yup.string().required("Content is required"),
});
