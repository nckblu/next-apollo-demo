import Cards from "../components/Cards";
import LoadMoreButton from "../components/LoadMoreButton";
import useSuperCoolGuys from "../hooks/useSuperCoolGuys";

const Page = () => {
  const { loadMore, superCoolGuys } = useSuperCoolGuys();

  return (
    <>
      <Cards data={superCoolGuys} />
      <LoadMoreButton onClick={loadMore} />
    </>
  );
};

export default Page;
