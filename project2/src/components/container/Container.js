import React, { useState, useEffect } from 'react'
import './Container.css'
import Diet from '../diet/Diet';
import Search from '../search/Search';

const Container = () => {
    const [food, setFood] = useState([])
    const [breakfast, setBreakfast] = useState([])
    const [lunch, setLunch] = useState([])
    const [dinner, setDinner] = useState([])
    const [element, setElement] = useState("")
    const [count, setCount] = useState(0)
    const [pro, setPro] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [info, setInfo] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [brquantity, setBrQuantity] = useState({})
    const [lnquantity, setLnQuantity] = useState({})
    const [dnquantity, setDnQuantity] = useState({})
    const [item, setItem] = useState("")
    const [collection, setCollection] = useState([])
    const [sear, setSear] = useState("")
    let totalquantity = {}


    let protein = 0, fiber = 0, fat = 0, iron = 0, zinc = 0, vb1 = 0, vb2 = 0,
        vb3 = 0, vb6 = 0, vb12 = 0, vc = 0, vd = 0, ve = 0, cerb = 0,
        cal = 0, meg = 0, phos = 0, pota = 0, sodi = 0, va = 0, vb9 = 0, vk = 0

    useEffect(() => {


        let params = {
            api_key: "zUsHSw1STGj41venYMQQnaK8OquPvKkku70clkii",
            dataType: ["Survey (FNDDS)"],
            pagesize: 50,
            query: sear
        }
        let api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}&query=${encodeURIComponent(params.query)}`
        const data = async () => {
            await fetch(api_url, {
                method: "get",
                headers: { "Content-Type": "application/json" }
            })
                .then(response => {
                    return response.json()
                }).then(data => {
                    console.log(data)
                    setFood(data)
                    if (data.foods.length === 0) {
                        alert(sear + " Not found")
                        setSear("")
                    }
                })
        }
        data()
    }, [count, sear])

    useEffect(() => {

        let properties = [...Object.getOwnPropertyNames(brquantity), ...Object.getOwnPropertyNames(lnquantity), ...Object.getOwnPropertyNames(dnquantity)]
        properties = [...new Set(properties)]
        properties.map(property => {
            if (brquantity.hasOwnProperty(property) === false) {
                brquantity[property] = 0
            }
            if (lnquantity.hasOwnProperty(property) === false) {
                lnquantity[property] = 0
            }
            if (dnquantity.hasOwnProperty(property) === false) {
                dnquantity[property] = 0
            }
        })
        properties.map(property => {
            totalquantity[property] = parseInt(brquantity[property]) + parseInt(lnquantity[property]) + parseInt(dnquantity[property])
        })
        collection.map(data => {

            if (totalquantity[data.foodSearchCriteria.query]) {

                protein = protein + ((data.foods[0].foodNutrients[0].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                fat = fat + ((data.foods[0].foodNutrients[1].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                fiber = fiber + ((data.foods[0].foodNutrients[9].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                iron = iron + ((data.foods[0].foodNutrients[11].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                zinc = zinc + ((data.foods[0].foodNutrients[16].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                vb1 = vb1 + ((data.foods[0].foodNutrients[29].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                vb2 = vb2 + ((data.foods[0].foodNutrients[30].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                vb3 = vb3 + ((data.foods[0].foodNutrients[31].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                vb6 = vb6 + ((data.foods[0].foodNutrients[32].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                vb12 = vb12 + ((data.foods[0].foodNutrients[34].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                vc = vc + ((data.foods[0].foodNutrients[28].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                vd = vd + ((data.foods[0].foodNutrients[24].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                ve = ve + ((data.foods[0].foodNutrients[23].value) / 100) * (totalquantity[data.foodSearchCriteria.query])

                cerb = cerb + ((data.foods[0].foodNutrients[2].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                cal = cal + ((data.foods[0].foodNutrients[10].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                meg = meg + ((data.foods[0].foodNutrients[12].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                phos = phos + ((data.foods[0].foodNutrients[13].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                pota = pota + ((data.foods[0].foodNutrients[14].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                sodi = sodi + ((data.foods[0].foodNutrients[15].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                va = va + ((data.foods[0].foodNutrients[20].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                vb9 = vb9 + ((data.foods[0].foodNutrients[33].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
                vk = vk + ((data.foods[0].foodNutrients[36].value) / 100) * (totalquantity[data.foodSearchCriteria.query])
            }

        })
        setPro([protein, fat, fiber, iron, zinc, vb1, vb2, vb3, vb6, vb12, vc, vd, ve])
        setInfo([cerb, cal, meg, phos, pota, sodi, va, vb9, vk])

    }, [brquantity, lnquantity, dnquantity, count])
    const search = (e) => {
        if (e.key === "Enter") {
            setSear(e.target.value)
            e.target.value = ""

        }


    }


    const draghandler = (e, id) => {

        e.dataTransfer.setData("id", id)
        setElement(id)


    }
    const dragOverHandler = (e) => {



        e.preventDefault();
    }
    const drop = (e, id) => {
        if (id === "Breakfast") {
            console.log("Dropped on Breakfast")
            if (!(breakfast.includes(element))) {
                setBreakfast([...breakfast, element])
            }
        }
        if (id === "Lunch") {
            console.log("Dropped on Lunch")
            if (!(lunch.includes(element))) {
                setLunch([...lunch, element])
            }
        }
        if (id === "Dinner") {
            console.log("Dropped on Dinner")
            if (!(dinner.includes(element))) {
                setDinner([...dinner, element])
            }
        }
        let params = {
            api_key: "zUsHSw1STGj41venYMQQnaK8OquPvKkku70clkii",
            dataType: ["Survey (FNDDS)"],
            pagesize: 1,
            query: element
        }
        let api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}&query=${encodeURIComponent(params.query)}`
        const data = async () => {
            await fetch(api_url, {
                method: "get",
                headers: { "Content-Type": "application/json" }
            })
                .then(response => {
                    return response.json()
                }).then(data => {
                    console.log(data);
                    setItem(data)
                    console.log(collection.includes(data));
                    collection.push(data)
                    setCollection(remove(collection, x => x.totalHits))
                    console.log("col", collection);
                })
        }
        data()
        e.preventDefault();
    }
    const remove = (data, key) => {
        return [...new Map(data.map(x => [key(x), x])).values()]

    }

    const clickHandler = (e, id, element) => {
        console.log("clicked on", id, element)
        setCount(count + 1)
        if (id === "Breakfast") {
            breakfast.splice(breakfast.indexOf(element), 1)
            console.log(breakfast)
        }
        if (id === "Lunch") {
            lunch.splice(lunch.indexOf(element), 1)
            console.log(lunch)
        }
        if (id === "Dinner") {
            dinner.splice(dinner.indexOf(element), 1)
            console.log(dinner)
        }
        collection.map(items => {
            console.log("item in collection", item.foodSearchCriteria.query);
            if (items.foodSearchCriteria.query === element) {

                if (id === "Breakfast") {
                    brquantity[element] = 0

                }
                if (id === "Lunch") {
                    lnquantity[element] = 0

                }
                if (id === "Dinner") {
                    dnquantity[element] = 0

                }
                setCount(count + 1)
            }
        })
    }
    const changeHandler = (e, element, id) => {
        if (id === "Breakfast") {

            let pair = {}
            pair[element] = e.target.value
            setBrQuantity({ ...brquantity, ...pair })
            console.log("quann", brquantity)
        }
        if (id === "Lunch") {

            let pair = {}
            pair[element] = e.target.value
            setLnQuantity({ ...lnquantity, ...pair })

        }
        if (id === "Dinner") {
            console.log("food name", element)
            let pair = {}
            pair[element] = e.target.value
            setDnQuantity({ ...dnquantity, ...pair })
            console.log("quann", brquantity)
        }

    }


    console.log("col after removed", collection);
    console.log("quanti in break", brquantity);
    console.log("quanti in ln", lnquantity);
    console.log("quanti in dn", dnquantity);


    return (
        <div>
            <Search search={search} />
            <div className="container">
                <div className="grid1">

                    {food.length !== 0 ?
                        (
                            <div>{food.foods.map(element => {
                                return (<div draggable className="food" onDragStart={(e) => draghandler(e, element.description)}>{element.description}</div>)
                            })}</div>
                        )
                        :
                        (<div>Loading..</div>)}
                </div>


                <div className="droppable grid1" onDragOver={(e) => dragOverHandler(e)} onDrop={(e) => { drop(e, "Breakfast") }}>{breakfast.map(element => {

                    return (
                        <div className="food1"   >
                            <div className="food" >



                                {element}

                            </div>

                            <div className="grams">grams:</div>
                            <input className="number" type="number" onChange={(e) => { changeHandler(e, element, "Breakfast") }} />
                            <div className="x" onClick={(e) => { clickHandler(e, "Breakfast", element) }}>x</div>
                        </div>)
                })}</div>
                <div className="droppable grid1" onDragOver={(e) => dragOverHandler(e)} onDrop={(e) => { drop(e, "Lunch") }}>{lunch.map(element => {
                    return (
                        <div className="food1">
                            <div className="food">
                                {element}

                            </div>
                            <div className="grams">grams:</div>
                            <input className="number" type="number" onChange={(e) => { changeHandler(e, element, "Lunch") }} />
                            <div className="x" onClick={(e) => { clickHandler(e, "Lunch", element) }}>x</div>
                        </div>)
                })}</div>
                <div className="droppable grid1" onDragOver={(e) => dragOverHandler(e)} onDrop={(e) => { drop(e, "Dinner") }}>{dinner.map(element => {
                    return (
                        <div className="food1">
                            <div className="food">
                                {element}

                            </div>
                            <div className="grams">grams:</div>
                            <input className="number" type="number" onChange={(e) => { changeHandler(e, element, "Dinner") }} />
                            <div className="x" onClick={(e) => { clickHandler(e, "Dinner", element) }}>x</div>
                        </div>
                    )
                })}
                </div>

            </div >
            <Diet pro={pro} info={info} />
        </div >


    );
}

export default Container
