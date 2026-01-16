import Link from "next/link";

export default function Control() {
  return (
    <ul className="nav gap-1">
      <li>
        <Link href="/create" className="btn btn-primary">Create</Link>
      </li>
      <li>
        <Link href="/update/1" className="btn btn-secondary">Update</Link>
      </li>
      <li><button type="button" className="btn btn-danger">Delete</button></li>
    </ul>
  )
}
