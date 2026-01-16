"use client";
//클라이언 컴포넌트용 useParams 함수, 주소표시줄의 id 파악
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Control() {
  const params = useParams();
  const id = params?.id;

  console.log(params);
  return (
    <ul className="nav gap-1">
      <li>
        <Link href="/create" className="btn btn-primary">Create</Link>
      </li>
      {
        id && <>
          <li>
            <Link href={`/update/${id}`} className="btn btn-secondary">Update</Link>
          </li>
          <li><button type="button" className="btn btn-danger">Delete</button></li>
        </>
      }
    </ul>
  )
}
