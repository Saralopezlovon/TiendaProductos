import React, { useState, useEffect} from 'react';
import './App.css';
import './Normalize.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'; //Para utilizar rutas
import { productContext } from './context/productContext'; //Para utilizar context en apertura -> value={input} 

// import { useDebounce } from "use-debounce";
import axios from 'axios';

function App(props) {

  const [input, setInput] = useState(""); //Estado inicial del input búsqueda de productos
  const [products, setProducts] = useState([]); //Estado inicial de los productos
  // const [debouncedText] = useDebounce(input, 2000); //Por si necesito utilizarlo en algun onchange

  //Estado para los filtros
  const [sortName, setSortName] = useState();
  const [sortPrice, setSortPrice] = useState();
  const [sortRating, setSortRating] = useState();

  //Estado para la paginación
  const [page, setPage] = useState(1);
  const [pagesTotal, setpagesTotal] = useState();

  //Función paginación

  const set_page = (pageSelected) =>{
    setPage(pageSelected)     
  }

  //Función parametrizada por el valor del input de Header y cambiar su estado
   const setInfo = (productSearched) =>{
    setInput(productSearched)     
  }

  //Función parametrizada por el click que se haga en el botón: 
    //"Ordenar por nombre"
    const set_sortName = (counterName) =>{
      setSortName(counterName)
      //Pongo el resto de filtros a 0 para que sea único:

      setSortPrice(0)
      //Reseteo el botón de Price
      let btnSortPrice = document.getElementById("btnSortPrice");
      btnSortPrice.innerText = "Ordenar por precio (menor a mayor)"

      setSortRating(0)
      //Reseteo el botón de Rating
      let btnSortRating = document.getElementById("btnSortRating");
      btnSortRating.innerText = "Ordenar por relevancia (1-3)"      

    }

    //"Ordenar por precio"
    const set_sortPrice = (counterPrice) =>{
      setSortPrice(counterPrice)

      //Pongo el resto de filtros a 0 para que sea único:

      setSortName(0)
      //Reseteo el botón de name
      let btnSortName = document.getElementById("btnSortName");
      btnSortName.innerText = "Ordenar por nombre (A-Z)"   

      setSortRating(0)
      //Reseteo el botón de Rating
      let btnSortRating = document.getElementById("btnSortRating");
      btnSortRating.innerText = "Ordenar por relevancia (1-3)"
    }

    //"Ordenar por relevancia"
    const set_sortRating = (counterRating) =>{
      setSortRating(counterRating)

      //Pongo el resto de filtros a 0 para que sea único: 

      setSortName(0)
      //Reseteo el botón de name
      let btnSortName = document.getElementById("btnSortName");
      btnSortName.innerText = "Ordenar por nombre (A-Z)"

      setSortPrice(0)
      //Reseteo el botón de Price
      let btnSortPrice = document.getElementById("btnSortPrice");
      btnSortPrice.innerText = "Ordenar por precio (menor a mayor)"

    }
    
    const set_sortClear = (reset) =>{

      //Reseteo el estado de todos los botones

      setSortName(reset)
      let btnSortName = document.getElementById("btnSortName");
      btnSortName.innerText = "Ordenar por nombre (A-Z)"

      setSortPrice(reset)
      let btnSortPrice = document.getElementById("btnSortPrice");
      btnSortPrice.innerText = "Ordenar por precio (menor a mayor)"

      setSortRating(reset)
      let btnSortRating = document.getElementById("btnSortRating");
      btnSortRating.innerText = "Ordenar por relevancia (1-3)"
    }
   

  //Función que muestra la búsqueda de
  const getProducts = async (productSearched, sortName, sortPrice, sortRating) =>{  

    if(!productSearched){
      
      //http://localhost:4000/?perPage=5&page=2&name=1&price=1&rating=1
      
      //Búsqueda de todos    
      const allProducts = async ()=>{        
        
        try{          
          
          if(sortName){
            
            //Muestro el filtro aplicado
            if(sortName === 1){
              let filter = document.getElementById("filters");
              filter.innerText = "Ordenado de la A-Z"
            }else{
              let filter = document.getElementById("filters");
              filter.innerText = "Ordenado de la Z-A"
            }
            
            //Realizo la llamada
            const resp = await axios.get(`http://localhost:4000/?page=${page}&name=${sortName}`) 
            const allProducts = resp.data.docs 
            const numPages = resp.data.pages
            setProducts([...allProducts])
            setpagesTotal(numPages)

          }else if(sortPrice){

            //Muestro el filtro aplicado
            if(sortPrice === 1){
              let filter = document.getElementById("filters");
              filter.innerText = "Ordenado de menor a mayor"
            }else{
              let filter = document.getElementById("filters");
              filter.innerText = "Ordenado de mayor a menor"
            }

            //Realizo la llamada
            const resp = await axios.get(`http://localhost:4000/?page=${page}&price=${sortPrice}`) 
            const allProducts = resp.data.docs
            const numPages = resp.data.pages     
            setProducts([...allProducts])
            setpagesTotal(numPages)

          }else if(sortRating){

            //Muestro el filtro aplicado
            if(sortRating === 1){
              let filter = document.getElementById("filters");
              filter.innerText = "Ordenar por relevancia (1-3)"
            }else{
              let filter = document.getElementById("filters");
              filter.innerText = "Ordenar por relevancia (3-1)"
            }

            //Realizo la llamada
            const resp = await axios.get(`http://localhost:4000/?page=${page}&rating=${sortRating}`) 
            const allProducts = resp.data.docs
            const numPages = resp.data.pages     
            setProducts([...allProducts])
            setpagesTotal(numPages)

          }else{

            let filter = document.getElementById("filters");
            filter.innerText = ""

            const resp = await axios.get(`http://localhost:4000/?page=${page}`) 
            const allProducts = resp.data.docs
            const numPages = resp.data.pages      
            setProducts([...allProducts])
            setpagesTotal(numPages)

          }
        }catch(err){
          console.log(err)
          }     
      }

      allProducts()

    }else{

      //Búsqueda específica      
      try {

        if(sortName){

          //Muestro el filtro aplicado
          if(sortName === 1){
            let filter = document.getElementById("filters");
            filter.innerText = "Ordenado de la A-Z"
          }else{
            let filter = document.getElementById("filters");
            filter.innerText = "Ordenado de la Z-A"
          }

          //Realizo la llamada
          const resp = await axios.get(`http://localhost:4000/products/search?page=${page}&nameProduct=${productSearched}&name=${sortName}`)
          const productsSearched = resp.data.docs
          const numPages = resp.data.pages
          setProducts([...productsSearched])
          setpagesTotal(numPages)

        }else if(sortPrice){

          //Muestro el filtro aplicado
          if(sortPrice === 1){
            let filter = document.getElementById("filters");
            filter.innerText = "Ordenado de menor a mayor"
          }else{
            let filter = document.getElementById("filters");
            filter.innerText = "Ordenado de mayor a menor"
          }

          //Realizo la llamada
          const resp = await axios.get(`http://localhost:4000/products/search?page=${page}&nameProduct=${productSearched}&price=${sortPrice}`)
          const productsSearched = resp.data.docs
          const numPages = resp.data.pages
          setProducts([...productsSearched])
          setpagesTotal(numPages)

        }else if(sortRating){

          //Muestro el filtro aplicado
          if(sortRating === 1){
            let filter = document.getElementById("filters");
            filter.innerText = "Ordenar por relevancia (1-3)"
          }else{
            let filter = document.getElementById("filters");
            filter.innerText = "Ordenar por relevancia (3-1)"
          }

          //Realizo la llamada
          const resp = await axios.get(`http://localhost:4000/products/search?page=${page}&nameProduct=${productSearched}&rating=${sortRating}`)
          const productsSearched = resp.data.docs
          const numPages = resp.data.pages
          setProducts([...productsSearched])
          setpagesTotal(numPages)

        }else{

          let filter = document.getElementById("filters");
          filter.innerText = ""

          const resp = await axios.get(`http://localhost:4000/products/search?page=${page}&nameProduct=${productSearched}`)
          const productsSearched = resp.data.docs
          const numPages = resp.data.pages
          setProducts([...productsSearched]) 
          setpagesTotal(numPages)

        }

      } catch (err) {
        console.log(err)
      }
    }
  }

  //Cuando cambie el estado del buscador se ejecuta la función getProducts

  useEffect(() => {
    getProducts(input,sortName, sortPrice, sortRating, page)
  },[input, sortName, sortPrice, sortRating, page]);


  const dataProducts ={
    products,
    setInfo,
    sortName,
    set_sortName,
    sortPrice,
    set_sortPrice,
    sortRating,
    set_sortRating,
    set_sortClear,
    page,
    set_page,
    pagesTotal
  }


  return (
    <div className="App">
      <BrowserRouter> 
          <productContext.Provider value={dataProducts} >    
            <Header/>
            <Main/>  
          </productContext.Provider>            
      </BrowserRouter>

      <Footer/>
    
    </div>
  );
}

export default App;
