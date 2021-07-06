import React, { useState, useEffect } from 'react'
import './Diet.css'
import Form from '../form/Form';
import Chart from '../chart/Chart';


const Diet = ({ pro, info }) => {
    const [datainput11, setDatainput11] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [datainput12, setDatainput12] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [datainput21, setDatainput21] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [datainput22, setDatainput22] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    const [age, setAge] = useState(0)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [gender, setGender] = useState("")
    useEffect(() => {

        setDatainput22(pro)
        setDatainput12(info)

    }, [pro, info])

    var input1 = {
        labels: ['Carbohydrate(g)', 'Calcium(mg)', 'Magnesium(mg)', 'Phosphorous(mg)', 'Potassium(mg)', 'Sodium(mg)', 'Vitamin A(mcg)', 'Vitamin B9(mcg)', 'Vitamin K(mcg)'],
        datasets: [
            {
                label: 'Daily Requirement',
                backgroundColor: '#66b3ff',
                data: datainput11
            },
            {
                label: 'Your Diet Contains',
                backgroundColor: '#5c85d6',
                data: datainput12
            }
        ]
    }
    var input2 = {
        labels: [

            'Protein(g)', 'Fat(g)', 'Fiber(g)', 'Iron(mg)', 'Zinc(mg)', 'Vitamin B1(mg)', 'Vitamin B2(mg)', 'Vitamin B3(mg)', 'Vitamin B6(mg)', 'Vitamin B12(mcg)', 'Vitamin C(mg)', 'Vitamin D(mcg)', 'Vitamin E(mg)'],
        datasets: [
            {
                label: 'Daily Requirement',
                backgroundColor: '#66b3ff',
                data: datainput21
            },
            {
                label: 'Your Diet Contains',
                backgroundColor: '#5c85d6',
                data: datainput22
            }
        ]
    }
    const userinput = (e, id) => {
        if (id === "age") {
            setAge(e.target.value)
        }
        if (id === "weight") {
            setWeight(e.target.value)
        }
        if (id === "height") {
            setHeight(e.target.value)
        }
        if (id === "gender") {
            setGender(e.target.value)
        }

    }
    const click = (e) => {
        if (parseInt(age) === 0 || age === "" || parseInt(weight) === 0 || weight === "" || parseInt(height) === 0 || height === "") {
            alert("please enter valid data")
            setDatainput21([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
            setDatainput11([0, 0, 0, 0, 0, 0, 0, 0, 0])
        }
        if (parseInt(age) !== 0 && age !== "" && parseInt(weight) !== 0 && weight !== "" && parseInt(height) !== 0 && height !== "") {
            console.log("EVA");
            let protein = weight * 0.36
            let fat = 0
            let fiber = 0
            let cerb = 0
            let cal = 1000
            let iron = 0
            let meg = 0
            let phos = 700
            let pota = 3500
            let sodi = 1500
            let zinc = 0
            let va = 0
            let vb1 = 1.2
            let vb2 = 1.2
            let vb3 = 0
            let vb6 = 1.3
            let vb9 = 400
            let vb12 = 2.4
            let vc = 0
            let vd = 15
            let ve = 15
            let vk = weight
            if (gender === "male") {
                fat = fat + ((88.362 + (13.397 * weight * 0.453592) + (4.799 * height) - (5.677 * age)) * 1.2 * 0.3) / 9
                fiber = fiber + 30
                cerb = cerb + (88.362 + (13.397 * weight * 0.453592) + (4.799 * height) - (5.677 * age)) * 1.2 * 0.5 * 0.25
                iron = iron + 8
                meg = meg + 400
                zinc = zinc + 11
                va = va + 900
                vb3 = vb3 + 16
                vc = vc + 90
            } else {
                fat = fat + ((447.593 + (9.247 * weight * 0.453592) + (3.098 * height) - (4.330 * age)) * 1.2 * 0.3) / 9
                cerb = cerb + (447.593 + (9.247 * weight * 0.453592) + (3.098 * height) - (4.330 * age)) * 1.2 * 0.5 * 0.25
                fiber = fiber + 25
                iron = iron + 18
                vb3 = vb3 + 14
                meg = meg + 310
                zinc = zinc + 8
                va = va + 700
                vc = vc + 75
            }
            setDatainput21([protein, fat, fiber, iron, zinc, vb1, vb2, vb3, vb6, vb12, vc, vd, ve])
            setDatainput11([cerb, cal, meg, phos, pota, sodi, va, vb9, vk])



        }

    }
    console.log(age, weight, height, gender);
    console.log("input1", pro);
    console.log("input2", info);

    return (
        <div>

            <div className="diet" >


                <div className="grid2">
                    <Form userinput={userinput} click={click} />

                </div>
                <div className="grid2">
                    <Chart data={input1} />
                </div>
                <div className="grid2"><Chart data={input2} /></div>
            </div>

        </div>
    )
}

export default Diet
