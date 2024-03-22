import {useState} from "react";

const useIdIncrementer = () => {
    const [id, setId] = useState(0);

    const incrementId = () => {
        setId(prevId => prevId + 1);
    }

    return {id, incrementId};
}

export default useIdIncrementer;
