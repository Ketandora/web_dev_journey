import { useEffect, useState } from "react";

function useCurrencyInf(currency){

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.dev/v1/latest?from=${currency}`)
            .then((res) => res.json() )
            .then((res) => setData(res.rates))
            
    }, [currency])

    return data;
}

export default useCurrencyInf;