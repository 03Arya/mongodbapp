import Link from "next/link";



export default function Nav() {
    return (
        <nav className="bg-amber-500">
            <ul className="grid grid-cols-5 py-2">
                <li><Link className="font-sans font-semibold text-lg" href="/home">Home</Link></li>
                <li><Link className="font-sans font-semibold text-lg" href="/create">Create</Link></li>
                <li><Link className="font-sans font-semibold text-lg" href="/read">Read</Link></li>
                <li><Link className="font-sans font-semibold text-lg" href="/update">Update</Link></li>
                <li><Link className="font-sans font-semibold text-lg" href="/delete">Delete</Link></li>
            </ul>
        </nav>
    );
}