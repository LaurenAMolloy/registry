//import { useState } from 'react';
import { Form } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';

export default function SearchInput() {
//     const[term, setTerm] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         navigate(`/search?term=${term}`)
//     };

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input
//                 value={term}
//                 onChange={e => setTerm(e.target.value)}
//             >
//             </input>
//         </form>
//     </div>
//   )
// }
return <Form action="/search">
    <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
            <VscSearch className="h-5 w-5 text-gray-500"/>
        </div>
        <input className="pl-10 py-2 w-full border-0 shadow-none" name="term" placeholder="Search packages"></input>
    </div>
</Form>
}