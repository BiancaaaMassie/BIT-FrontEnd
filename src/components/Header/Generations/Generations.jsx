import Gen1 from './Gen1.jsx'
import Gen2 from './Gen2.jsx'
import Gen3 from './Gen3.jsx'
import Gen4 from './Gen4.jsx'

export default function Generations() {
  return (
    <div className="bg-green-100 p-4 my-3 rounded">
      <h3 className="font-semibold mb-2">Generations Component</h3>
      <div className="space-y-2">
        <Gen1 />
        <Gen2 />
        <Gen3 />
        <Gen4 />
      </div>
    </div>
  )
}