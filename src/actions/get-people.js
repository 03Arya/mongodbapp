"use server"

import People from "@/models/people"
import { connect, disconnect } from "@/lib/db"

export default async function GetPeople() {
	try {
		await connect()
	} catch (error) {
		console.error(error)
		return []
	}

	try {
		const people = await People.find()
		await disconnect()
		return JSON.parse(JSON.stringify(people))
	} catch (error) {
		await disconnect()
		console.error(error)
		return []
	}
}