import {useState} from "react";

const useIdIncrementer = () => {
    const [id, setId] = useState(7);

    const incrementId = () => {
        setId(prevId => prevId + 1);
    }

    return {id, incrementId};
}

export default useIdIncrementer;
