import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getWorker } from "../../api";
import { LoaderComponent } from "../../components/LoaderComponent";
import { WorkerPage } from "../../components/_Pages/WorkerPage";
import { IWorker } from "../../constants/types";

const Worker = () => {
  const router = useRouter();
  const { id } = router.query;
  const [worker, setWorker] = useState<IWorker>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      setLoading(true);
      const res = await getWorker(Number(id));
      if (res) {
        const { data } = res;
        setWorker(data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      {loading ? <LoaderComponent /> : <WorkerPage {...worker} />}
    </React.Fragment>
  );
};

export default Worker;
