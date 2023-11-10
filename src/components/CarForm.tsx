import TextInput from "./formComponents/TextInput"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server";
import { useDispatch} from "react-redux";
import { chooseYear, chooseMake, chooseModel, chooseColor} from "../redux/slices/CarSlice";

interface CarFormProps {
  id?: string[]
}

const CarForm = ( props:CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();


  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    
    if (props.id && props.id.length > 0) {
        server_calls.update_car(props.id[0], data)
        console.log(`Updated: ${ data.first } ${props.id}`);
        setTimeout( () => {
            window.location.reload()
        }, 500)
    } else {
        dispatch(chooseYear(data.year));
        dispatch(chooseMake(data.make));
        dispatch(chooseModel(data.model));
        dispatch(chooseColor(data.color));

        // Create the car using the form input values
        server_calls.create_car(data)
            .then(() => {
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            })
            .catch((error) => {
                console.error("Failed to create car:", error);
            });
    }
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="year">Car Year</label>
          <TextInput {...register('year')} input_name='year' placeholder="Year" />
        </div>
        <div>
          <label htmlFor="make">Car Make</label>
          <TextInput {...register('make')} input_name='make' placeholder="Make" />
        </div>
        <div>
          <label htmlFor="model">Car Model</label>
          <TextInput {...register('model')} input_name='model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="color">Car Color</label>
          <TextInput {...register('color')} input_name='color' placeholder="Color" />
        </div>
        <div className="flex p-1">
          <button className="flex justify-start m-3 bg-indigo-200 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CarForm