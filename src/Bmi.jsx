import React, { useState } from 'react'
import bmiimg from "../src/bmi-img.jpg"

const Bmi = () => {

    const [height, setheight] = useState("")
    const [weight, setweight] = useState("")
    const [bmi, setbmi] = useState(null)
    const [bmistatus, setbmistatus] = useState("")
    const [errormsg, seterrormsg] = useState("")

    const calculatebmi = () => {

        const isvaildheight = /^\d+$/.test(height)
        const isvaildweight = /^\d+$/.test(weight)



        if (isvaildheight && isvaildweight) {
            const heightInmeter = height / 100;

            const bmivalue = weight / (heightInmeter * heightInmeter);

            setbmi(bmivalue.toFixed(2))

            if (bmivalue < 18.5) {
                setbmistatus('under weight')

            }

            else if (bmivalue >= 18.5 && bmivalue < 24.9) {
                setbmistatus('Normal Weight')
            }

            else if (bmivalue >= 25 && bmivalue < 29.9) {
                setbmistatus('over Weight')
            }
            else {
                setbmistatus('obese')
            }


seterrormsg('')

        }
        else {
            setbmi(null)
            setbmistatus("")


            seterrormsg('please enter vaild numeric values for height and weight')
        }
    }

    const clerall=()=>{
        setheight('')
        setweight('')
        setbmi(null)
        setbmistatus('')
    }


    return (
        <div className='mb-3'>

            <div className="d-flex   justify-content-center  full-sec">

                {/* image */}

                <div className="">

                    <img className='bmiimg' src={bmiimg} alt="" />

                </div>


                {/* inputs  */}
                <div className="inputes  ">

                    <h1 className='fw-bold text-primary' > BMI CALCULATER </h1>


                    <div className=" mt-4 mb-3 fst-italic fw-bold">
                        {errormsg && <p className='error '>{errormsg}</p>}
                        <label >height (cm)  </label>
                        <input type="text" class="form-control p-1" value={height} onChange={(e) => { setheight(e.target.value) }} aria-label="Username" aria-describedby="basic-addon1" />
                    </div>



                    <div className="mb-3 fst-italic fw-bold ">
                        <label className='text-secondary-emphasis' >weight (kg)  </label>

                        <input type="text" class="form-control p-1" value={weight} onChange={(e) => { setweight(e.target.value) }} aria-label="Username" aria-describedby="basic-addon1" />
                    </div>


                    <button type="button" class="btn btn-primary   text-uppercase" onClick={calculatebmi}>calculate bmi</button> <span></span>
                    <button type="button" class="btn btn-danger   text-uppercase" onClick={clerall}>Clear</button>

                    {bmi !== null && (

                        <div className="mt-2 btns border border-info rounded-5 p-3">

                            <p className="mt-1 fw-bold text-success">Your BMI is: {bmi}</p>
                            <p className="mt-1 fw-bold text-danger">status:  {bmistatus}</p>
                        </div>

                    )}


                </div>


            </div>








        </div>
    )
}

export default Bmi