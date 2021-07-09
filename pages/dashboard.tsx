import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me").catch((error) => {
      console.error(error);
    });
  }, []);

  return <h1>Dashboard: {user?.email}</h1>;
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
