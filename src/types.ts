export interface CommandOpts {
	cwd?: string
	command: string
	tooltip: string
	vsCommand: string
	singleInstance?: boolean
	name: string
	color: string
	focus?: boolean
	useVsCodeApi?: boolean
	args?: string[]
}

export interface ButtonOpts {
	command: string
	tooltip: string
	name: string
	color: string
}
