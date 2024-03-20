import Link from "next/link";



export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/create">Create</Link></li>
                <li><Link href="/">Read</Link></li>
                <li><Link href="/">Update</Link></li>
                <li><Link href="/">Delete</Link></li>
            </ul>
        </nav>
    );
}