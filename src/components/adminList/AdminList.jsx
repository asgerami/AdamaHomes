import './adminList.scss'
import AdminCard from '../adminCard/AdminCard';
import {listData} from"../../lib/dummydata"

function AdminList(){
  const handleDelete = (id) => {
    // Implement delete logic here, such as API call to delete the property
    console.log(`Delete property with id: ${id}`);
  }

  return (
    <div className='list'>
      {listData.map(item=>(
        <adminCard key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  )
}

export default AdminList
