"use client"
// when a state is updated all the components that use that state are re-rendered

export default function Input({label, type="text", name, placeholder = "", value = "", statusMessage = ""}) {
	
	return (
		<label className="flex flex-col">
			<span>{label}</span>
			<input
				type={type}
				name={name}
				defaultValue={value}
				placeholder={placeholder}
				className="border border-gray-300 rounded-md px-2 py-1"
			/>
			<span className="text-red-500 text-sm">{statusMessage}</span>
		</label>
	)
}