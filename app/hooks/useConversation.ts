import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();

  const conversatonId = useMemo(() => {
    if (!params?.conversatonId) {
      return "";
    }

    return params.conversatonId as string;
  }, [params?.conversatonId]);

  const isOpen = useMemo(() => !!conversatonId, [conversatonId]);

  return useMemo(
    () => ({
      isOpen,
      conversatonId,
    }),
    [isOpen, conversatonId]
  );
};

export default useConversation;
