import TextInput from "./formComponents/TextInput";
import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseServiceType, chooseNotes, chooseMiles, chooseCost, chooseMechanic } from "../redux/slices/LogSlice";

interface LogFormProps {
  id?: string[]
}

const LogForm = ( props:LogFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    
    if (props.id && props.id.length > 0) {
        server_calls.update_log(props.id[0], data)
        .then(() => {
          console.log(`Updated: ${data.first} ${props.id}`);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        })
        .catch((error) => {
          console.error("Failed to update log:", error);
        });
    } else {
        dispatch(chooseServiceType(data.service_type));
        dispatch(chooseNotes(data.notes));
        dispatch(chooseMiles(data.miles));
        dispatch(chooseCost(data.cost));
        dispatch(chooseMechanic(data.mechanic));

        server_calls.create_log(store.getState())
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        })
        .catch((error) => {
          console.error("Failed to create log:", error);
        });
    }
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="service_type">Service Type</label>
          <TextInput {...register('service_type')} input_name='service_type' placeholder="Service Type" />
        </div>
        <div>
          <label htmlFor="notes">Service Notes</label>
          <TextInput {...register('notes')} input_name='notes' placeholder="Notes" />
        </div>
        <div>
          <label htmlFor="miles">Service Miles</label>
          <TextInput {...register('miles')} input_name='miles' placeholder="Miles" />
        </div>
        <div>
          <label htmlFor="cost">Service Cost</label>
          <TextInput {...register('cost')} input_name='cost' placeholder="Cost" />
        </div>
        <div>
          <label htmlFor="mechanic">Service Mechanic</label>
          <TextInput {...register('mechanic')} input_name='mechanic' placeholder="mechanic" />
        </div>
        <div className="flex p-1">
          <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default LogForm