import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function SubCategories() {
    async function getSubCategories(id) {
    const options = {
      url:`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
      method: "GET",
    };
    return axios.request(options);
  }
  let { data, isLoading } = useQuery({
    queryKey: ["subCategories"],
    queryFn: getSubCategories,
  });
  if (isLoading) {
    return<Loading/>
  }
  return (
    <>
      <div className="grid grid-cols-12">
        {data.data.data.map((sub) =>
          <div key={sub._id} className=" col-span-4 p-4 bg-slate-100 text-center rounded-md shadow-md">
            <h3 className=" text-xl font-semibold">{sub.name}</h3>
        </div>
        )}
      </div>
    </>
  )
}
