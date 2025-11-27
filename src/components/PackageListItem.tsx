import type { PackageSummary } from '../api/types/packageSummary';
import { Link } from 'react-router-dom'

interface PackageListItemProps {
 pack: PackageSummary;
}


export default function PackageListItem({ pack }: PackageListItemProps) {
    const renderedKeywords = (pack.keywords || []).map((word) => {
        return <div key={word} className='border py-0.5 px-1 text-xs rounded'>{word}</div>
    })
  return (
    <div className="border p-4 rounded flex justify-between items-center">
        <div className="flex flex-col gap-2">
            <Link to={`/packages/${pack.name}`} className='text-xl font-bold'></Link>
            <p className="text-sm text-gray-500">{pack.description}</p>
            <div>{renderedKeywords}</div>
        </div>
        <div className='mr-6'>
            <Link to={`/packages/${pack.name}`} className="py-2 px-3 rounded bg-black text-white text-lg">View</Link>
        </div>
    </div>
  )
}
