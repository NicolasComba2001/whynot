import ManageSearchIcon from '@mui/icons-material/ManageSearch';
export default function BarSearching(){
    return(
        <article className="flex items-center mb-4 mt-4">
            <input type="text" placeholder="Buzo OverSize, remera blanca hombre, Air Max..." className="w-full p-2 bg-white rounded mt-4 outline-none"/>
            <button className="bg-orange-400 mt-4 p-2 rounded ml-2 flex"><span className='mr-2'>Buscar</span><ManageSearchIcon/> </button>
        </article>
    )
}