import React from 'react';
import RectangleImg from "../../../assets/img/Rectangle124.jpg";
import riskManagement from '../../../assets/img/Risk-Management.jpg'
import digitalHygeine from '../../../assets/img/Digital-Hygeine.jpg'
import topicName from '../../../assets/img/Topic-Name.jpg'

const Upcomingtraining = () => {
    return (
        <>
            <div className="m-3 text-2xl text-gray-700 font-bold">
              Upcoming Training
            </div>
            <div className="lg:grid lg:grid-cols-4 my-2">
              <div className="mx-auto">
                <img src={RectangleImg} alt="...." className="w-28 h-28" />
              </div>
              <div className="col-span-3">
                <div className="text-gray-500 my-2 font-bold">
                  Introduction to cyber Security
                </div>
                <div className="text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-4 my-2">
              <div className="mx-auto">
                <img src={riskManagement} alt="...." className="w-28 h-28" />
              </div>
              <div className="col-span-3">
                <div className="text-gray-500 my-2 font-bold">
                  Enterprise Risk Management
                </div>
                <div className="text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-4 my-2">
              <div className="mx-auto">
                <img src={digitalHygeine} alt="...." className="w-28 h-28" />
              </div>
              <div className="col-span-3">
                <div className="text-gray-500 my-2 font-bold">
                  Digital Hygeine
                </div>
                <div className="text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-4 my-2">
              <div className="mx-auto">
                <img src={topicName} alt="...." className="w-28 h-28" />
              </div>
              <div className="col-span-3">
                <div className="text-gray-500 my-2 font-bold">
                  Topic Name
                </div>
                <div className="text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </div>
              </div>
            </div>
        </>
    );
}

export default Upcomingtraining;
