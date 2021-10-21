import React from 'react';
import webinars from '../../../assets/img/Webinars.jpg'
import dsp from '../../../assets/img/DSP.jpg'
import training from '../../../assets/img/Trainings.jpg'
import cxo from '../../../assets/img/CXO-Connect.jpg'
import opRiskMasterclass from '../../../assets/img/OP-Risk-Masterclass.jpg'

const Boxfooter = () => {
    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg my-8 p-5 grid grid-cols-2 lg:grid-cols-6">
            <div>
                <img src={webinars} alt="...." className="w-full p-2" />
                <div className="text-gray-500 text-center text-xl">Webinars</div>
            </div>
            <div>
                <img src={dsp} alt="...." className="w-full p-2" />
                <div className="text-gray-500 text-center text-xl">DSP</div>
            </div>
            <div>
                <img src={training} alt="...." className="w-full p-2" />
                <div className="text-gray-500 text-center text-xl">Trainings</div>
            </div>
            <div>
                <img src={cxo} alt="...." className="w-full p-2" />
                <div className="text-gray-500 text-center text-xl">CXO Connect</div>
            </div>
            <div>
                <img src={opRiskMasterclass} alt="...." className="w-full p-2" />
                <div className="text-gray-500 text-center text-xl">OP Risk Masterclass</div>
            </div>
            <div>
                <img src={cxo} alt="...." className="w-full p-2" />
                <div className="text-gray-500 text-center text-xl">CS3</div>
            </div>
        </div>
        </div>
    );
}

export default Boxfooter;
