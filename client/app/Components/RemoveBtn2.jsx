"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RemoveBtn({ id }) {
  const { data: session } = useSession();
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/category?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  let addButton;

  if (session?.user?.email === "admin123@gmail.com") {
    addButton = (
      <button onClick={removeTopic} className="text-[#ff3333]">
        <HiOutlineTrash size={24} />
      </button>
    );
  }

  return <>{addButton}</>;
}
