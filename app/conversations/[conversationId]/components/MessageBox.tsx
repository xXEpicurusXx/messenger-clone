"use client";

import clsx from "clsx";
import { useState } from "react";

import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";

import Avatar from "../../../components/Avatar";
import { FullMessageType } from "../../../types";
import ImageModal from "./ImageModal";

interface MessageBoxProps {
  data: FullMessageType;
  isLast?: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
  const session = useSession();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const isOwn = session.data?.user?.email === data?.sender?.email;
  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = clsx("flex gap-3 p-4", !isOwn && "justify-end");
  const avatar = clsx(!isOwn && "order-2");
  const body = clsx("flex flex-col", !isOwn && "items-end");
  const message = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn ? "bg-[#ff004f] text-white" : "bg-gray-600 text-white",
    data.image ? "rounded-md p-0" : "rounded-md py-2 px-3"
  );

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>

      <div className={body}>
        <div className="flex items-center gap-1">
          {/* {!isOwn && (
            <div className="text-sm text-gray-500">{data.sender.name}</div>
          )} */}
        </div>
        <div className={message}>
          <ImageModal
            src={data.image}
            isOpen={imageModalOpen}
            onClose={() => setImageModalOpen(false)}
          />
          {data.image ? (
            <Image
              alt="Image"
              height="288"
              width="288"
              onClick={() => setImageModalOpen(true)}
              src={data.image}
              className="
                object-cover 
                cursor-pointer 
                hover:scale-110 
                transition
              "
            />
          ) : (
            <div>{data.body}</div>
          )}
        </div>
        <div className="text-xs text-gray-300">
          {format(new Date(data.createdAt), "p")}
        </div>
        {isLast && isOwn && seenList.length > 0 && (
          <div
            className="
            text-xs 
            font-light 
            text-gray-300
            "
          >
            {`Seen`}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
