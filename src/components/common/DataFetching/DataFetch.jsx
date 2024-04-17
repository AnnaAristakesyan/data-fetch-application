import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../features/dataSlice/dataSlice";

function DataFetch() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
  
    useEffect(() => {
        setTimeout(()=>{
            dispatch(fetchData());
        }, 3000)
    }, [dispatch]);
  
    return (
      <div>
        {data.loading ? <div>Loading...</div> : (
          <ul>
            {data.items.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default DataFetch;