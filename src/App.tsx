import * as React from 'react'
import './App.css'
import { VerticalTabs } from './components'
import UseEffect from './pages/UseEffect'
import UseRef from './pages/UseRef'
import UseState from './pages/UseState'
import { TabType } from './types/global'

const tabs: TabType[] = [
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
		label: 'useCallback',
		node: ''
	},
	{
		label: 'useMemo',
		node: ''
	},
	{
		label: 'useLayoutEffect',
		node: ''
	},
	{
		label: 'useImperativeHandle',
		node: ''
	},
	{
		label: 'useContext',
		node: ''
	},
	{
		label: 'useReducer',
		node: ''
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