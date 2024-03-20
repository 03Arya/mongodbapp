import Nav from "@/components/nav";

export default function Create() {
    return (
        <main>
            <Nav />
            <form>
                <label>
                    Title
                    <input type="text" name="title" />
                </label>
                <label>
                    Description
                    <input type="text" name="description" />
                </label>
                <button type="submit">Create</button>
            </form>
        </main>
    )

}