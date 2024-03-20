import Input from "@/components/input";
import Nav from "@/components/nav";

export default function Create() {
    return (
        <main>
            <Nav />
            <form action="">
                <Input label="Name" type="text" name="name" placeholder="Name" />
                <Input label="Age" type="text" name="age" placeholder="Age" />
            </form>
        </main>
    )

}