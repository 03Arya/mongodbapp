"use client"
import { useFormState } from "react-dom"
import CreatePerson from "@/actions/create-person"
import { useEffect, useRef } from "react"
import { toast } from "react-toastify"
import Input from "@/components/input"
import Button from "@/components/button"
import Nav from "@/components/nav"

export default function Create() {
	const [formState, formAction] = useFormState(CreatePerson)
	const formRef = useRef(null)

	useEffect(function() {
		if (formState && !formState?.success) {
			toast.error("There was an error creating the person, Try again.")
			return
		} else if (formState?.success) {
			toast.success("Person has been created.")
			formRef.current.reset()
		}

	}, [formState])

	return (
		<>
        <Nav />
			<form action={formAction} className="w-full md:w-1/2" ref={formRef}>
				<Input placeholder="Name" label="Name" name="name" statusMessage={formState?.errors?.name?.[0]} />
				<Input placeholder="Age" label="Age" name="age" type="number" statusMessage={formState?.errors?.age?.[0]} />
				<Button type="submit" color="success">Create</Button>
			</form>
		</>
	)
}