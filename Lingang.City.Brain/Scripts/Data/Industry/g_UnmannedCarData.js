﻿define(["config"], function (con) {
    return {
        //无人车行驶路线
        UmmannedCarTrajectoryData: {
            "1": [
            { pos: "121.906997,30.867483,-0.022186" },
            {pos:"121.906917,30.867410,0.026154"},
            {  pos: "121.905401,30.868723,-0.000702" },
            {  pos: "121.904587,30.868110,-0.000702" },
            {  pos: "121.904439,30.867898,-0.000214" },
            ],
            "2": [
            {  pos: "121.905811,30.865251,-0.000214" },
            {  pos: "121.905982,30.865251,-0.000702" },
            {  pos: "121.906771,30.865849,-0.001190" },
            { pos: "121.907005,30.866037,-0.001190" },
            { pos: "121.907277,30.866255,-0.001190" },
            { pos: "121.906711,30.866766,-0.001190" },
            ],
        },
        UmmannedCarDrivingRoute: [
            {
             "1"   :{pos:"121.906997,30.867483,-0.022186"},
             "2": { pos: "121.906917,30.867410,0.026154" },
             "3": { pos: "121.905502,30.868714,-0.021698" },
            "4": { pos: "121.905401,30.868723,-0.000702" },
            "5": { pos: "121.904587,30.868110,-0.000702" },
            "6": { pos: "121.904439,30.867898,-0.000214" },//

            "7": { pos: "121.903703,30.867269,-0.000214" },
            "8": { pos: "121.903768,30.867058,-0.000214" },
            "9": { pos: "121.905811,30.865251,-0.000214" },
            "10": { pos: "121.905982,30.865251,-0.000702" },
            "11": { pos: "121.906771,30.865849,-0.001190" },
            "12": { pos: "121.907005,30.866037,-0.001190" },

            "13":{pos:"121.906441,30.866524,0.012482"},
            //"11": { pos: "121.907277,30.866255,-0.001190" },
            //"12": { pos: "121.906711,30.866766,-0.001190" },
            "14": { pos: "121.907182,30.867167,-0.001190" },
            "15": { pos: "121.906978,30.867361,-0.001190" },            
            "16": { pos: "121.907057,30.867431,-0.022186" }
            
            /*
              */
        },
        {
            //4，11
            "15": { pos: "121.904587,30.868110,-0.000702" },//3
            "16": { pos: "121.907005,30.866037,-0.001190" },//10
        },
        {
            //5，10
            "17": { pos: "121.904439,30.867898,-0.000214" },//4
            "18": { pos: "121.906771,30.865849,-0.001190" },//9
        },
        {
            "19": { pos: "121.904522,30.868018,0.002716" },
            "20": { pos: "121.904766,30.867818,-0.021698" },
        },

        {
            "21": { pos: "121.904464,30.867934,-0.007538" },
            "22": { pos: "121.904686,30.867756,-0.021698" },
        },
        ],

    }
})



