import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Tienda() {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const state = {
      storeProducts: []
    }

    useEffect(() => {
      // getProducts
      axios({
        method: 'get',
        url: 'http://localhost:8888/flores-eva/tienda/wp-json/wc/v3/products',
        auth: {
          username: 'ck_ad4fa73a290b9314e04497e44f1e5549ca9bdcd8',
          password: 'cs_284d3c8e6abf1ab24db3ca70da6b355d28598596'
        }
      })
      .then(response => console.log(response))
    }, [])
    

  return (
    <div></div>
  )
}
