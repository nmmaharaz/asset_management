import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Asset from "../Shered/Asset";
import { axiosSecure } from "../Hook/useAxiosSecure";

const AssetList = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const {
        data: allAssets = [],
        isLoading,
        refetch:reload,
      } = useQuery({
        queryKey: ["allAssets"],
        queryFn: async () => {
          const { data } = await axiosSecure(
            `/allassets/${user?.email}`
          );
          setLoading(false);
          return data;
        },
      });
      console.log("Asset List", allAssets);
      if (loading) return <Loading></Loading>;
    return (
        <div className="w-10/12 mx-auto">
            {allAssets?.length}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    allAssets?.map(asset=><Asset asset={asset} reload={reload} key={asset._id}></Asset>)
                }
            </div>
        </div>
    );
};

export default AssetList;