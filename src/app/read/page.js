import GetPeople from "@/actions/get-people";
import Nav from "@/components/nav";

export default async function Read() {
    const people = await GetPeople()
    return (
        <>
            <Nav />
            <ul>
                {people?.map(person => (
                    <li key={person._id}>
                    </li>
                ))}
            </ul>
        </>
    )
}
// <Link href={`/read/${person._id}`} className="hover:underline">{person.name}, {person.age}</Link>
 