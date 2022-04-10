import * as React from 'react'
import './App.css'
import { VerticalTabs } from './components'
import UseEffect from './pages/UseEffect'
import UseRef from './pages/UseRef'
import UseState from './pages/UseState'
import UseCallback from './pages/UseCallback'
import { TabType } from './types'
import UseContext from './pages/UseContext'
import UseLayoutEffect from './pages/UseLayoutEffect'

const tabs: TabType[] = [
	{
		label: 'useCallback',
		node: <UseCallback />
	},
	{
		label: 'useRef',
		node: <UseRef />
	},
	{
		label: 'useState',
		node: <UseState />
	},
	{
		label: 'useEffect',
		node: <UseEffect />
	},
	{
		label: 'useContext',
		node: <UseContext />
	},
	{
		label: 'useLayoutEffect',
		node: <UseLayoutEffect />
	}
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