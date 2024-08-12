import { Link } from "react-router-dom";
import UnitsSkeleton from "../../../Components/Skeletons/UnitsSkeleton";
import Container from "../../../Components/ui/container";
import Header from "../../../Components/ui/Header";
import { Alert, AlertIcon, Button } from "@chakra-ui/react";
import {
  useGetFavouritesQuery,
  useRemoveFromFavouriteMutation,
} from "../../../app/ApiCalls/unitySlice";
import { useGetUserQuery } from "../../../app/ApiCalls/userSlice";

const WatchLater = () => {
  const { data: user } = useGetUserQuery();
  const { data, isLoading, isError } = useGetFavouritesQuery();
  const [removeUnity, { isSuccess }] = useRemoveFromFavouriteMutation();
  if (isLoading) {
    return <UnitsSkeleton />;
  }
  if (isError) {
    return <h1 className="text-4xl text-center font-bold">خطاء في التحميل</h1>;
  }
  return (
    <Container>
      <Header title="المشاهدة لاحقا" desc="الوحدات المحفوظة للمشاهدة لاحقا" />
      {isSuccess && (
        <Alert status="success" className="mb-5" variant="left-accent">
          <AlertIcon />
          تم حذف الوحدة من القائمة بنجاح
        </Alert>
      )}
      {data?.favourites?.length >= 1 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-10">
          {data?.favourites?.map((unity, key) => {
            return (
              <div
                key={key}
                className="border-2 p-5 relative w-full shadow-sm rounded-md hover:shadow-md transition-all"
              >
                <h1 className="text-2xl">{unity?.name}</h1>
                <h1 className="text-sm">{unity?.description}</h1>
                <Button
                  as={Link}
                  to={`/profile/${unity?.language?.slug}/units/${unity?.slug}`}
                  className="w-full py-5 mt-3.5 border-2"
                  colorScheme="green"
                >
                  مشاهدة
                </Button>
                <Button
                  onClick={() => {
                    removeUnity({ userId: user?.id, unityId: unity?.id });
                  }}
                  className="w-full py-5 mt-1 border-2"
                  colorScheme="green"
                >
                  حذف من القائمة
                </Button>
                {/* <div
                    onClick={() => {
                      removeUnity({ userId: user?.id, unityId: unity?.id });
                    }}
                    className="absolute bottom-full bg-primary text-white w-9 h-9 flex items-center justify-center rounded-lg border-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </div> */}
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="text-4xl text-center font-semibold mb-10">لا يوجد وحدات</h1>
      )}
    </Container>
  );
};

export default WatchLater;
