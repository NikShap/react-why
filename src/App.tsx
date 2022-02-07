import * as React from 'react'
import './App.css'
import { VerticalTabs } from './components'
import { UseRef } from './pages'
import UseState from './pages/UseState'
import { TabType } from './types/global'

const tabs: TabType[] = [
	{
		label: 'useRef',
		node: <UseRef></UseRef>
	},
	{
		label: 'useState',
		node: <UseState></UseState>
	},
	{
		label: 'useEffect',
		node: <div>description useEffect</div>
	},
]

export default function App() {
	return (
		<React.StrictMode>
			<main>
				<VerticalTabs tabs={tabs} />
			</main>
		</React.StrictMode>
	)
}